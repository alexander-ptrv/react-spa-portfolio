import { useRef } from "react";
import { Helmet } from "react-helmet";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeHero from "./HomeHero/HomeHero";
import HomeProjects from "./HomeProjects/HomeProjects";
import FixedSocials from "../../components/FixedSocials/FixedSocials";
import useScrollToTop from "../../hooks/useScrollToTop";
import HomeFooter from "./HomeFooter/HomeFooter";

const HomePage = () => {

    useScrollToTop();

    // "HandleScroll" funcion is passed to "My Work" button on home page, 
    // which scrolls to the specific ref defined in "HomeProject" component
    const myRef = useRef(null)

    const handleScroll = () => {
        myRef.current.scrollIntoView();
    }

    return (  
        <>
            <Helmet>
                <title>Alenxader Petrov | Frontend Developer & UI/UX Designer</title>
                <meta 
                    name="description" 
                    content="Alexander Petrov – frontend developer and UI/UX designer from Moscow. Creating things for the web since 2016."
                />
            </Helmet>
            <HomeHero scroll={handleScroll} />
            <HomeAbout />
            <HomeProjects sectionRef={myRef} />
            <FixedSocials />
            <HomeFooter />
        </>
    );
}
 
export default HomePage;