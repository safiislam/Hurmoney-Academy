/* eslint-disable react/prop-types */


const Container = ({ children }) => {
    // return children
    return (
        <div className="max-w-7xl  mx-auto px-0 md:px-14">
            {children}
        </div>
    );
};

export default Container;