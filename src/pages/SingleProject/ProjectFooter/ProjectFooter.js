import "./ProjectFooter.scss";
import ColoredDot from "../../../components/ColoredDot/ColoredDot";
import FooterNav from "../../../components/FooterNav/FooterNav";
import OpenFormButton from "../../../components/OpenFormButton/OpenFormButton";

const ProjectFooter = () => {
    return (  
        <>
            <section className="project-footer-wrapper">
                <div className="project-footer container container--xs">
                    <h2 className="project-footer__heading">Get in touch<ColoredDot /></h2>
                    <p className="project-footer__text">
                        Feel free to send me a message. At the moment I am available full-time 
                        and looking for new job opportunities.
                    </p>
                    <OpenFormButton>Get in Touch</OpenFormButton>
                </div>
            </section>
            <FooterNav />
        </>
    );
}
 
export default ProjectFooter;