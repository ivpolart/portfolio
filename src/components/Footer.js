const Footer = () => {
    return (
        <footer id="footer">
            <div className="container">
                <ul className="socials-list">
                    <li><a href="https://www.linkedin.com/in/ivan-polozkov/" target="_blank" rel="noopener noreferrer"><i className="ico-linkedin"></i></a></li>
                    <li><a href="https://www.instagram.com/ivpolart/" target="_blank" rel="noopener noreferrer"><i className="ico-instagram"></i></a></li>
                    <li><a href="https://t.me/ivpolart" target="_blank" rel="noopener noreferrer"><i className="ico-telegram"></i></a></li>
                    <li><a href="https://github.com/ivpolart" target="_blank" rel="noopener noreferrer"><i className="ico-github"></i></a></li>
                </ul>
                <div className="address-holder">
                    <div className="phone-holder">
                        <a href="tel:+380994384164">+38 (099) 43-84-164</a>
                    </div>
                    <div className="mail-holder">
                        <a href="mailto:ivpolart@gmail.com">ivpolart@gmail.com</a>
                    </div>
                </div>
                <div className="copy-holder">
                    Made by <mark>Ivan Polozkov</mark>
                </div>
            </div>
        </footer>
    );
}

export default Footer;