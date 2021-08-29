import { Route, RouteProps, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router';

const ProtectedRoute = (props: RouteProps) => {
  const history = useHistory();
  let tempPath = window.sessionStorage.getItem('currentPath');
  if (!history.location.state) {
    return <Redirect to={{ pathname: tempPath, state: { from: props.location } }} />;
  }

  return <Route {...props} />;
};

export default ProtectedRoute;
