import icoGmail from "../images/ico-gmail.svg";
import icoTelegram from "../images/ico-telegram.svg";
import icoPhone from "../images/ico-phone.svg";

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="container">
                <div className="title-block">
                    <h3>CONTACT</h3>
                </div>
                <div className="columns-block">
                    <a className="column" href="mailto:ivpolart@gmail.com">
                        <div className="ico-holder">
                            <img src={icoGmail} alt="" />
                        </div>
                        <span className="copy-block">
                            ivpolart@gmail.com
                        </span>
                    </a>
                    <a className="column" href="https://t.me/ivpolart">
                        <div className="ico-holder">
                            <img src={icoTelegram} alt="" />
                        </div>
                        <span className="copy-block">
                            @ivpolart
                        </span>
                    </a>
                    <a className="column" href="tel:+380994384184">
                        <div className="ico-holder">
                            <img src={icoPhone} alt="" />
                        </div>
                        <span className="copy-block">
                            +38 (099) 43-84-184
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;