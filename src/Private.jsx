import Authentication from "./Pages/Authentication";
import { PrivateRouter } from "./Routes/PrivateRoute";

const Private = () => {
    return(
       <PrivateRouter>
        <Authentication />
       </PrivateRouter> 
    )
}

export default Private;