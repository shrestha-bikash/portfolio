import * as Unicons from '@iconscout/react-unicons';

export default function Footer () {
    return (
        <div className="footer">
            <div className="footer_bg">
                <div className="footer_container">
                    <div>
                        <h1 className="footer__title">Bikash</h1>
                        <span className="footer__subtitle">Graduate Research Assistant, Software Engineer</span>
                    </div>
                    <div className="footer__socials">
                        <a href="https://www.linkedin.com/in/bikash-shrestha-a939b9137/" className="footer__social" target="_blank">
                            <i className="footer__icon"><Unicons.UilLinkedin/></i>
                        </a>
                        <a href="https://github.com/shrestha-bikash" className="footer__social" target="_blank">
                            <i className="footer__icon"><Unicons.UilGithub/></i>
                        </a>
                        <a href="https://twitter.com/BikashSherestha" className="footer__social" target="_blank">
                            <i className="footer__icon"><Unicons.UilTwitter/></i>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}