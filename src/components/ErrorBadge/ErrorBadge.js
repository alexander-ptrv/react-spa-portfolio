import "./ErrorBadge.scss";


const ErrorBadge = () => {
    return (  
        <div className="error-badge">
            <h3 className="error-badge__title">
                Something doesn't work. :(
            </h3>
            <p className="error-badge__text">
                Try to reload the page or come back a bit later.
            </p>
        </div>
    );
}
 
export default ErrorBadge;