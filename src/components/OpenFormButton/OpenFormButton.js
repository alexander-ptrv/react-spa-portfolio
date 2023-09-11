import "./OpenFormButton.scss";
import { toggleFormOverlay } from "../../utils/utils";

const OpenFormButton = ({children}) => {
    return (  
        <button 
            className="open-form-btn" 
            onClick={toggleFormOverlay}
        >
            {children}
        </button>
    );
}
 
export default OpenFormButton;