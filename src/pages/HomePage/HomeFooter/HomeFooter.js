import "./HomeFooter.scss";
import ColoredDot from "../../../components/ColoredDot/ColoredDot";
import OpenFormButton from "../../../components/OpenFormButton/OpenFormButton";
import FooterNav from "../../../components/FooterNav/FooterNav";

const HomeFooter = () => {
    return (  
        <>
            <footer className="home-footer-wrapper">
                <div className="home-footer container container--xs">
                    <h2 className="home-footer__heading">Get in touch<ColoredDot /></h2>
                    <p className="home-footer__text">
                        Feel free to send me a message. At the moment I am available full-time 
                        and looking for new job opportunities.
                    </p>
                    <OpenFormButton>Get in Touch</OpenFormButton>
                </div>
            </footer>
            <FooterNav />
        </>
    );
}
 
export default HomeFooter;