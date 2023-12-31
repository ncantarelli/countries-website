import { useRouteError } from 'react-router-dom'
import MyNavbar from '../components/MyNavbar';
import { RouteErrorType } from '../types/customTypes';

function ErrorPage() {
    const error = useRouteError() as RouteErrorType;
    console.log(error);

    return (
        <div>
            <MyNavbar />
            <h1>Nothing to see here 😭</h1>
            {/* <h3>{error.error.message}</h3> */}
        </div>
    );
}

export default ErrorPage