import React from "react";

export default function Footer(props) {
    return(
        <footer>
            <div id="footer-top">
                <div className="footer-content">
                    <div className="logo"><img src={require("../CSS/images/6point6 logo/White-logo.png")} alt="" /></div>
                    <div>{props.changeCompany == "true" ? "Change Company/Service" : ""}</div>
                </div>
                <div className="footer-content">
                    <div>Help</div>
                    <div>Contact Us</div>
                </div>
            </div>

            <div id="footer-bottom">
                <div className="footer-content">
                    <div>Privacy Policy</div>
                    <div>Cookie Policy</div>
                </div>
                <div className="footer-content">
                    <div>© 2023 6point6. All Rights Reserved.</div>
                </div>
            </div>
        </footer>
    );
}