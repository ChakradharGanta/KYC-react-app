import { Route, RouteProps, Redirect } from 'react-router-dom';
//hooks
import { useAuthentication } from './app/hooks/useAuthentication';
import { useHistory } from 'react-router';

const ProtectedRoute = (props: RouteProps) => {
  const history = useHistory();
  const { currentPath } = useAuthentication();
  // console.log(currentPath.current, history.location.state?.triggered);
  // console.log(currentPath.current);
  if (!history.location.state?.triggered) {
    return <Redirect to={currentPath} />;
  }

  return <Route {...props} />;
};

export default ProtectedRoute;
