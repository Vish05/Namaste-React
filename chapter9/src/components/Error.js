import {useRouteError} from "react-router-dom"

const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Oops!!</h1>
            <h2>Something went wrong!!</h2>
            <h2>{err.status + " : " + err.statusText}</h2>
            <h3>Don't get dissapointed. You can find your route</h3>
        </div>
    )
};
export default Error;