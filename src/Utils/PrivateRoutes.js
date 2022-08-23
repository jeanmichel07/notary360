import { Outlet, Navigate } from 'react-router-dom';
import { isAuth } from './Common';

const PrivateRoutes = () => {
    return(
        isAuth() ? <Outlet/> : <Navigate to="/"/>
    )
}

export default PrivateRoutes