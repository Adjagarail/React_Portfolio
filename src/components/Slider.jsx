import React from 'react';

function Slider(){
    return(
        <div className="slider-container rev_slider_wrapper" style={{height: "100vh"}}>
            <div id="revolutionSlider" className="slider rev_slider" data-version="5.4.8" data-plugin-revolution-slider data-plugin-options="{'sliderLayout': 'fullscreen', 'delay': 9000, 'gridwidth': 1170, 'gridheight': 550, 'disableProgressBar': 'on', 'responsiveLevels': [4096,1200,992,500], 'navigation' : {'arrows': { 'enable': true, 'style': 'arrows-style-1 arrow-dark' }, 'bullets': {'enable': true, 'style': 'bullets-style-1', 'h_align': 'center', 'v_align': 'bottom', 'space': 7, 'v_offset': 70, 'h_offset': 0}}}">
                <ul>
                    <li data-transition="fade" className="slide-overlay slide-overlay-level-8">
                        <img src="img/3.jpg"
                            alt=""
                            data-bgposition="center center"
                            data-bgfit="cover"
                            data-bgrepeat="no-repeat"
                            className="rev-slidebg"/>

                            <div className="tp-caption font-weight-extra-bold text-color-light negative-ls-2"
                                data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"sX:1.5;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                                data-x="center"
                                data-y="center" data-voffset="['-60','-60','-60','-85']"
                                data-fontsize="['55','60','60','100']"
                                data-lineheight="['55','55','55','95']">BIENVENUE</div>

                            <div className="tp-caption font-weight-light text-center ws-normal"
                                data-frames='[{"from":"opacity:0;","speed":300,"to":"o:1;","delay":2000,"split":"chars","splitdelay":0.04,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                                data-x="center"
                                data-y="center" data-voffset="['8','8','8','70']"
                                data-width="['570','570','570','1000']"
                                data-fontsize="['20','20','20','50']"
                                data-lineheight="['29','29','29','60']"
                                style={{'color': '#e0e0e0'}}> Je m'appele Yaya A. SADIO <strong className="text-color-light"> Dev Web & Mobile.</strong> La Satisfaction de mes clients est ma priorité numero 1</div>

                            <a className="tp-caption btn btn-primary font-weight-semibold rounded-0"
                                data-frames='[{"delay":3500,"speed":2000,"frame":"0","from":"opacity:0;y:50%;","to":"o:1;y:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                                href="#"
                                data-x="center" data-hoffset="0"
                                data-y="center" data-voffset="['100','100','100','275']"
                                data-whitespace="nowrap"
                                data-fontsize="['15','15','15','33']"
                                data-paddingtop="['20','20','20','45']"
                                data-paddingright="['45','45','45','110']"
                                data-paddingbottom="['20','20','20','45']"
                                data-paddingleft="['45','45','45','110']">EN SAVOIR PLUS!</a>
								
							</li>
                        <li className="slide-overlay" data-transition="fade">
                            <img src="img/2.jpg"
                                alt=""
                                data-bgposition="center center"
                                data-bgfit="cover"
                                data-bgrepeat="no-repeat"
                                className="rev-slidebg"/>

                                <div className="rs-background-video-layer"
                                    data-forcerewind="on"
                                    data-volume="mute"
                                    data-videowidth="100%"
                                    data-videoheight="100%"
                                    data-videomp4="video/busy.mp4"
                                    data-videopreload="preload"
                                    data-videoloop="loop"
                                    data-forceCover="1"
                                    data-aspectratio="16:9"
                                    data-autoplay="true"
                                    data-autoplayonlyfirsttime="false"
                                    data-nextslideatend="false">
                                </div>

                                <div className="tp-caption font-weight-extra-bold text-color-light negative-ls-2"
                                    data-frames='[{"delay":1000,"speed":2000,"frame":"0","from":"sX:1.5;opacity:0;fb:20px;","to":"o:1;fb:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                                    data-x="center"
                                    data-y="center" data-voffset="['-60','-60','-60','-85']"
                                    data-fontsize="['55','60','60','100']"
                                    data-lineheight="['55','55','55','95']" style={{zIndex: "5"}}>HELLO &amp; WELCOME</div>

                                <div className="tp-caption font-weight-light text-center ws-normal"
                                    data-frames='[{"from":"opacity:0;","speed":300,"to":"o:1;","delay":2000,"split":"chars","splitdelay":0.04,"ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"to":"y:[100%];","mask":"x:inherit;y:inherit;s:inherit;e:inherit;","ease":"Power2.easeInOut"}]'
                                    data-x="center"
                                    data-y="center" data-voffset="['8','8','8','70']"
                                    data-width="['570','570','570','1000']"
                                    data-fontsize="['20','20','20','50']"
                                    data-lineheight="['29','29','29','60']"
                                    style={{color: "#e0e0e0", zIndex: "5"}}>Porto is trusted by over <strong className="text-color-light">30,000</strong> satisfied users. Learn more about us and our amazing projects.</div>

                                <a className="tp-caption btn btn-dark font-weight-semibold rounded-0"
                                    data-frames='[{"delay":3500,"speed":2000,"frame":"0","from":"opacity:0;y:50%;","to":"o:1;y:0;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;fb:0;","ease":"Power3.easeInOut"}]'
                                    href="#"
                                    data-x="center" data-hoffset="0"
                                    data-y="center" data-voffset="['100','100','100','275']"
                                    data-whitespace="nowrap"
                                    data-fontsize="['15','15','15','33']"
                                    data-paddingtop="['20','20','20','45']"
                                    data-paddingright="['45','45','45','110']"
                                    data-paddingbottom="['20','20','20','45']"
                                    data-paddingleft="['45','45','45','110']" style={{zIndex: "5"}}>EN SAVOIR PLUS!</a>

                                <div className="tp-dottedoverlay tp-opacity-overlay-light bg-color-primary opacity-8"></div>
							</li>
						</ul>
					</div>
				</div>
    );
}
export default Slider;