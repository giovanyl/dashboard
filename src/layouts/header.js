import React, { useState } from "react";


export default function Header(props) {
    
    // Function to expand user button to show dropdown

    const [isShown,setIsShown] = useState(false);

    const toggleShow = event => {
        setIsShown(current => !current);
    };

    function ExpandUser(){
        return(
            // Props to include to determine what options are available and should be rendered to the user
            <div className="user-expanded">
                <div className="user-item">Self Assessment</div>
                <div className="user-item">Logbook</div>
                <div className="user-item">Assessment Admin</div>
                <div className="user-item">User Settings</div>
                <div className="user-logout">Log Out</div>                
            </div>
        );
    }

    function HeaderBottom(props) {
        return(
        <div id="header-bottom">
            <div>
                <div className="client-name">{props.clientName}<span>(Change)</span></div>
                <div className="client-service">{props.serviceName}</div>
            </div>
        </div>
        )
    }

    // HTML to be returned to user

    return ( 
        <header>
            <div id="header-top">
                <div className="logo"><img src={require("../CSS/images/6point6 logo/White-logo.png")} alt="" /></div>
                <div className="nav-content">

                    {/* Props to determine which element to be active using the nav-active class */}
                    <div className="nav-item">Home</div>
                    <div className="nav-item">Assessments</div>
                    <div className="nav-item">Recommendations</div>
                    <div className="nav-item">Reports</div>
                </div>
                <div className="user" onClick={toggleShow}>
                    <img src={require("../CSS/icons/user-WHITE.png")} alt="" />
                </div>
            </div>
            {isShown && <ExpandUser />}

            {props.showClient == "true" ? <HeaderBottom clientName={props.clientName} serviceName={props.serviceName} /> : ""}

        </header>
    )
};
