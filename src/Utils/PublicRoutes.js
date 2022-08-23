import { Outlet, Navigate } from 'react-router-dom';
import { isAuth } from './Common';

const PublicRoutes = () => {
    return(
        !isAuth() ? <Outlet/> : <Navigate to="/login"/>
    )
}

export default PublicRoutes