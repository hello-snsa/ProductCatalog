import { useNavigate } from "react-router-dom";

import "./PageNotFound.css";

export const PageNotFound = () => {
    const navigate = useNavigate();

    const goHome = () => {
        navigate("/");
    };

    return (
        <div className="page-not-found">
            <h1 className="title">404</h1>
            <p className="pnf-sub-title">Page Not Found</p>
            <button className="pnf-button" onClick={goHome}>
                Go to Home
            </button>
        </div>
    );
};

export default PageNotFound;
