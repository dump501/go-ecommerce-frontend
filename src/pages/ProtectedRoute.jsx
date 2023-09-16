import { useAuth } from "../context/auth.context";
import { Route } from "react-router-dom";

export const ProtectedRoute = ({...rest }) => {
    let { user } = useAuth();
  
    if (!user || !user.token || user.token === "") {
      return (
        // component which inform the user that they must be logged in
        <h1>You must login</h1>
      );
    }
  
    // let user through if they're logged in
    return <Route {...rest} />;
  };