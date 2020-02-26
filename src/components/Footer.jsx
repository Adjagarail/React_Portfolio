import React from 'react';

function Footer(){
    return(
        <footer id="footer" className="footer-top-border bg-color-light-scale-1 mt-0">
            <div className="footer-copyright bg-color-light-scale-1">
                <div className="container-fluid py-2">
                    <div className="row py-4">
                        <div className="col-md-6">
                            <p className="d-lg-none"><strong>Y.SADIO</strong> - © Copyright 2020 - All Rights Reserved.</p>
                        </div>
                        <div className="col-md-6 d-flex align-items-center justify-content-center justify-content-md-end">
                            <nav id="sub-menu">
                                <ul>
                                    <li><i className="fas fa-angle-right"></i><a href="#" className="ml-1 text-decoration-none text-color-primary">FAQ's</a></li>
                                    <li><i className="fas fa-angle-right"></i><a href="#" className="ml-1 text-decoration-none text-color-primary">Télécharger mon CV</a></li>
                                    <li><i className="fas fa-angle-right"></i><a href="#" className="ml-1 text-decoration-none text-color-primary">Contact</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;