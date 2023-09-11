import "./LoadingScreen.scss";
import ErrorBadge from "../../components/ErrorBadge/ErrorBadge";

const LoadingScreen = ({loading}) => {
    return (  
        <section className="loading-screen">
            {loading ? (
                <div className="loading-screen__dot-grid">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            ) : (
                <ErrorBadge />
            )}
        </section>
    );
}
 
export default LoadingScreen;