import ColoredDot from "../ColoredDot/ColoredDot";
import { toggleFormOverlay } from "../../utils/utils";
import close from "../../assets/images/close-icon.svg";
import ContactForm from "../ContactForm/ContactForm";
import "./FormOverlay.scss";

const FormOverlay = () => {
    return (  
        <div className="form-overlay-wrapper">
            <button 
                className="form-overlay-wrapper__close-btn" 
                onClick={toggleFormOverlay}
            >
                <img src={close} />
            </button>
            <div className="form-overlay container">
                <div className="form-overlay__form-wrapper">
                    <h3 className="form-overlay__heading">
                        Send me a message<ColoredDot />
                    </h3>
                    <p className="form-overlay__text">
                        Feel free to send me a message using the form below. 
                        I usually respond the same day.
                    </p>
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}
 
export default FormOverlay;