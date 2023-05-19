import Button from "../../components/Button/Button";
import "./NotFound.scss";


const NotFound = () => {
    return (
        <section className="not-found-wrapper">
            <div className="not-found container">
                <h1 className="not-found__error-code">404</h1>
                <p className="not-found__text">It seems, this page does not exist. Click the button below<br /> to return to the home page.</p>
                <div className="not-found__btn-wrapper">
                    <Button variant="cta" to="/" >Home Page</Button>
                </div>
            </div>
        </section>
    );
}
 
export default NotFound;