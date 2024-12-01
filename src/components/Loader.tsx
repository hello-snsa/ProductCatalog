import React from 'react';

type LoaderProps = {
    isLoading: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ isLoading }) => {

    return (
        <div className="loader-container" style={{ display: isLoading ? "flex" : "none" }}>
            <span className="loader"></span>
        </div>
    )
}
export default Loader;