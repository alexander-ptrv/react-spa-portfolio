import "./Hamburger.scss";
import { toggleCurtain } from "../../../utils/utils";

const Hamburger = () => {
    return (  
        <button className="hamburger" onClick={toggleCurtain}>
            <div className="hamburger__top-line"></div>
            <div className="hamburger__bottom-line"></div>
        </button>
    );
}
 
export default Hamburger;