import './Footer.css';

import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer>
			<section className='footer-main'>
				<div className='footer-content'>
					<div className='flex-container'>
						<div className='footer-navigation'>
							<ul>
								<li>
									<Link to='/help' onClick={(e) => e.preventDefault()}>
										Help
									</Link>
								</li>
								<li>
									<Link to='/privacy' onClick={(e) => e.preventDefault()}>
										Privacy
									</Link>
								</li>
								<li>
									<Link to='/cookies' onClick={(e) => e.preventDefault()}>
										Cookies
									</Link>
								</li>
								<li>
									<Link to='/contact' onClick={(e) => e.preventDefault()}>
										Contact
									</Link>
								</li>
								<li>
									<Link
										to='/terms-and-conditions'
										onClick={(e) => e.preventDefault()}
									>
										Terms and Conditions
									</Link>
								</li>
							</ul>
							<div>&copy; 2022 Enviroimpact ltd</div>
						</div>
					</div>
				</div>
			</section>
		</footer>
	);
};

export default Footer;

/*


Just the Help, privacy, cookies, contact, terms and conditions

*/
