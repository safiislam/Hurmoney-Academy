import { Link, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    console.log(error.status)
    console.log(error.statusText)
    console.log(error.error.message)
    return (
        <div>
            {
                error && <div className="flex items-center gap-10">
                    <img className="h-screen" src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1686415873~exp=1686416473~hmac=4466c45493c9240092ea4a5981d482c40400488add86a5f79e65eb745e43529e' alt="" />
                    <div className="text-center mx-auto">
                        <p className="text-7xl font-bold">{error.status}</p>
                        <p className="text-5xl" >{error.statusText} !!!!</p>
                        <p>{error.error.message}</p>
                    </div>
                    <button className="btn btn-primary" ><Link to='/'>Home</Link></button>
                </div>
            }
        </div>
    );
};

export default ErrorPage;