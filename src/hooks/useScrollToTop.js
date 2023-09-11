import { useEffect } from "react";

// Scrolls page back to top on first render to prevent weird 
// default behaviour

const useScrollToTop = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

}

export default useScrollToTop;