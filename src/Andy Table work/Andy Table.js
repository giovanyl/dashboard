//import React, {useState, useEffect} from 'react';


//function App() {
//  const [bubbles, setBubbles] = useState(false);
//  useEffect(() => {
//    getAllUsage();
//  }, []);


//  function getAllUsage() {
//    fetch('http://localhost:3001')
//      .then(response => {
//        return response.text();
//      })
//      .then(data => {
//        setBubbles(data);
//      });
//  }
  
 // return (
 //   <div>
 //     {bubbles ? bubbles : 'There is no data to display'}
 //     <br />
      
 //   </div>
 // );
// }



import React, { useEffect, useState } from "react"


function App() {
  const [bubbles, setBubbles] = useState(false);
  useEffect(() => {
    getAllUsage();
  }, []);



  const getAllUsage = () => {
    fetch("http://localhost:3001/usage/getallusage")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setBubbles(data)
      })
  }

  const getAllUsageByAWSAccountID = () => {
    fetch("http://localhost:3001/usage/getallusagebyawsaccountid/980799089100")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setBubbles(data)
      })
  }

  const getAllUsageByDateRange = () => {
    fetch("http://localhost:3001/usage/getallUsagebydaterange/2022-02-01&2022-02-02")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setBubbles(data)
      })
  }

  const createOrg = () => {
    let name = prompt('Enter organisation name');
    let email = prompt('Enter organisation domain');
    fetch('http://localhost:3001/organisations/createorganisation', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, email}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getAllUsage();
      });
  }

  const deleteOrganisation = () => {
    let orgid = prompt('Enter Org id');
    fetch(`http://localhost:3001/organisations/deleteorganisation/${orgid}`, {
      method: 'DELETE',
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getAllUsage();
      });
    }

  const updateOrganisation = () => {
    let name = prompt('Enter organisation name');
    let email = prompt('Enter organisation domain');
    let orgid = prompt('Enter Org id');
    fetch(`http://localhost:3001/organisations/updateorganisation`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({orgid, name, email}),
    })
      .then(response => {
        return response.text();
      })
      .then(data => {
        alert(data);
        getAllUsage();
      });
    }



  return (
    
    <div>
      {bubbles.length > 0 && (
        <table>
            <tr><th>AWS Account</th><th>Service</th><th>Total kwh</th><th>Total Cost</th></tr>
          
         
          {bubbles.map(bubbles => (
             <React.Fragment>
                <tr>
                    <td> {bubbles.account}</td> 
                    <td> {bubbles.service}</td> 
                    <td>{bubbles.kwh}</td>
                    <td>{bubbles.cost}</td>
                </tr>
            </React.Fragment>
          ))}
         
        </table>
      )}
      <div>
      <br />
      <button onClick={getAllUsageByAWSAccountID}>Specific Account Test</button>
      <br />
      <br />
      <button onClick={getAllUsageByDateRange}>Specific Date Range Test</button>
      <br />
      <br />
      <button onClick={createOrg}>Add Organisation</button>
      <br />
      <br />
      <button onClick={deleteOrganisation}>Delete Organisation</button>
      <br />
      <br />
      <button onClick={updateOrganisation}>Update Organisation</button>
      </div>
    </div>
  )
}
export default App;