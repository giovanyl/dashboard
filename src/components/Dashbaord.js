// This is main main Dashboard component in which other components are residing...

// importing mandotory stuff here

import React, { useContext, useEffect, useState } from 'react';
import classes from './Dashboard.module.css';

import AuthContext from '../store/auth-context';
import { useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

import CcfItem from './CcfItem';

// Dashboard main functional component

function Dashboard() {
	const authCtx = useContext(AuthContext); //Authenticaion
	const navigate = useNavigate();
	const [ccf, setccf] = useState([]);

	//function 'logoutHanlder' when exectued, it's navigate to main route
	function logoutHandler() {
		navigate('/'); //it navigate to 'http://localhost:3000', which is home page
	}

	useEffect(() => {
		(async () => {
			// const response = await fetch('http://localhost:5000/ccf');
			const response = await fetch('http://localhost:5000/publicccf');
			const json = await response.json();
			console.log(json);
			setccf(json);
		})();
	}, []);

	return (
		// This is the main jsx content which will be converted into HTML
		<div className={classes.dashboard}>
			<Header onLogout={logoutHandler} profilePicture={authCtx.user.picture} />
			<div className={classes['dashboard-content']}>
				<h2>CCF Recommendations</h2>

				{ccf.length > 0 && (
					<>
						<table
							className='table table-striped'
							style={{ overflow: 'hidden' }}
						>
							<thead className='thead-dark'>
								<tr>
									{/* <th>ID</th> */}
									<th>Cloud Provider</th>
									<th>Account Id</th>
									<th>Region</th>
									<th>Recommednation Type</th>
									<th>Recommedaation Detail</th>
									<th>Kilowatt hour savings</th>
									<th>Instance Name</th>
									<th>Co2 e Savings</th>
									<th>costsavingss</th>
								</tr>
							</thead>
							<tbody>
								{ccf.map((c) => {
									return <CcfItem ccf={c} key={c.ID} />;
								})}
							</tbody>
						</table>
					</>
				)}
			</div>

			{authCtx.user && (
				<div className={classes.profile}>
					{/* <div>
						<label>{authCtx.user.name}</label>
					</div> */}
					{/* <img src={authCtx.user.picture} alt='profile' /> */}
				</div>
			)}

			<Footer />
		</div>
	);
}

export default Dashboard; //exporting Dashboard component
