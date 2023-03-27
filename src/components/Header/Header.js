import './Header.css';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = ({ onLogout, profilePicture }) => {
	const [dashboard, setDashboard] = React.useState(false);
	const navigate = useNavigate();

	function logoutHandler(e) {
		e.preventDefault();
		navigate('/'); //it navigate to 'http://localhost:3000', which is home page
	}

	return (
		<header>
			<section className='main-header'>
				<div className='header-content'>
					<div className='brand-content'>
						<span className='brand'>ENVIROIMPACT</span>
					</div>
					<div className='nav-links'>
						<ul>
							<li>
								<Link
									to='/service'
									onClick={(e) => {
										e.preventDefault();
										setDashboard(true);
									}}
								>
									Service
								</Link>
							</li>
							<li>
								<Link
									to='/report'
									onClick={(e) => {
										e.preventDefault();
										setDashboard(true);
									}}
								>
									Report
								</Link>
							</li>
							<li>
								<Link
									to='/setting'
									onClick={(e) => {
										e.preventDefault();
										setDashboard(true);
									}}
								>
									Setting
								</Link>
							</li>

							<li>
								<Link to='/logout' onClick={logoutHandler}>
									Logout
								</Link>
							</li>
						</ul>
					</div>

					<div className='blue-bar'>
						<ul>
							<li>
								{dashboard && (
									<Link
										to='/dashboard'
										onClick={(e) => {
											e.preventDefault();
											setDashboard(false);
										}}
									>
										Dashboard
									</Link>
								)}
							</li>
							{/* <li>
								<a href='/services'>Services</a>
							</li>
							<li>
								<a href='/reports'>Reports</a>
							</li>
							<li>
								<a href='/account-settings'>Account Settings</a>
							</li> */}
						</ul>
					</div>
				</div>

				{/* <div className='left-section'>
					<button className='btn btn-primary'>Brand Name</button>
				</div>
				<div className='center-section'>
					<h3>Main Dashboard</h3>
				</div>
				<div className='right-section'>
					<div className='profile-banner'>
						<img src={profilePicture} alt='profile-picture' />
						<button className='btn btn-danger' onClick={onLogout}>
							Logout
						</button>
					</div>
				</div> */}
			</section>
		</header>
	);
};

export default Header;
