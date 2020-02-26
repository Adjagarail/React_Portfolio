import React from 'react';
import Footer from './Footer';
import Body from './Body';


function Menu(){
    return(
        <div>
        <header id="header" className="side-header d-flex">
            <div className="header-body">
                <div className="header-container container d-flex h-100">
                    <div className="header-column flex-row flex-lg-column justify-content-center h-100">
                        <div className="header-row flex-row justify-content-start justify-content-lg-center py-lg-5">
                            <div className="header-logo">
                                <a href="index.html">
                                    <img alt="LOGO SADIO" width="100" height="48" src="img/logoss.png"/>
									</a>
								</div>
                            </div>
                            <div className="header-row header-row-side-header flex-row h-100 pb-lg-5">
                                <div className="side-header-scrollable scrollable colored-slider" data-plugin-scrollable>
                                    <div className="scrollable-content">
                                        <div className="header-nav header-nav-links header-nav-links-side-header header-nav-links-vertical header-nav-links-vertical-expand header-nav-click-to-open align-self-start">
                                            <div className="header-nav-main header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-effect-4 header-nav-main-sub-effect-1">
                                                <nav className="collapse">
                                                    <ul className="nav nav-pills" id="mainNav">
                                                        <li className="dropdown">
                                                            <a className="dropdown-item active" href="#">
                                                                Accueil
															</a>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a className="dropdown-item" href="#">
                                                                A propos
															</a>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a className="dropdown-item" href="#">
                                                                Skills
															</a>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a className="dropdown-item" href="#">
                                                                Projets
															</a>
                                                        </li>
                                                        <li className="dropdown">
                                                            <a className="dropdown-item" href="#">
                                                                Contact
															</a>
                                                        </li>
                    
                                                        <li className="dropdown">
                                                            <a className="dropdown-item" href="#">
                                                                Blog
															</a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="header-row justify-content-end pb-lg-3">
                                <ul className="header-social-icons social-icons d-none d-sm-block social-icons-clean d-sm-0">
                                    <li className="social-icons-github"><a href="http://www.github.com/" target="_blank" title="Github"><i className="fab fa-github"></i></a></li>
                                    <li className="social-icons-facebook"><a href="http://www.facebook.com/" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="social-icons-twitter"><a href="http://www.twitter.com/" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a></li>
                                    <li className="social-icons-linkedin"><a href="http://www.linkedin.com/" target="_blank" title="Linkedin"><i className="fab fa-linkedin-in"></i></a></li>
                                    <li className="social-icons-instagram"><a href="http://www.instagram.com/" target="_blank" title="Instagram"><i className="fab fa-instagram"></i></a></li>
                                </ul>
                                <p className="d-none d-lg-block text-1 pt-3">© 2020 Y.SADIO . All rights reserved</p>
                                <button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav">
                                    <i className="fas fa-bars"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
			</header>
            <Footer/>
            </div>
    )
}
export default Menu;