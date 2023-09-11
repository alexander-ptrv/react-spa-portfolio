import { AiOutlineArrowRight, AiOutlineArrowDown } from "react-icons/ai";
import "./HomeHero.scss";
import heroImage from "../../../assets/images/hero.png";
import ColoredDot from "../../../components/ColoredDot/ColoredDot";
import OpenFormButton from "../../../components/OpenFormButton/OpenFormButton";

const HomeHero = ({scroll}) => {
    return (  
        <section className="home-hero-wrapper">
            <div className="home-hero container">
                <div className="home-hero__columns">
                    {/* Left column */}
                    <div className="home-hero__left">
                        <h1 className="home-hero__title">
                            <span className="home-hero__name">Alexander Petrov.</span><br />
                            Frontend developer & UI/UX designer<ColoredDot />
                        </h1>
                        <p className="home-hero__text">
                            Developing and designing things for the web since 2016. Currently 
                            available full-time and looking for new job opportunities. 
                        </p>
                        <div className="home-hero__btns">
                            <OpenFormButton>Get in Touch</OpenFormButton>
                            <button className="home-hero__work-btn" onClick={scroll}>
                                My Work
                                <div className="home-hero__work-btn-icon">
                                    <AiOutlineArrowRight />
                                </div>
                                <div className="home-hero__work-btn-icon-mobile">
                                    <AiOutlineArrowDown />
                                </div>
                            </button>
                        </div>
                    </div>
                    {/* Right column */}
                    <div className="home-hero__right">
                        <img 
                            className="home-hero__image" 
                            src={heroImage} 
                            alt="PTRV hero image" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default HomeHero;