import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from 'app/pages/Auth';
import Camera from 'app/pages/Camera';
import CustomerDeatils from 'app/pages/CustomerDetails';
import GovernmentID from 'app/pages/GovernmentID';
import Selfie from 'app/pages/Selfie';
import Success from 'app/pages/Success';
import VerifyPhoto from 'app/pages/VerifyPhoto';
import ProtectedRoute from './ProtectedRoute';
import SignupPage from './app/pages/Signup';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth} />
        <ProtectedRoute exact path="/camera/:type/:side" component={Camera} />
        <ProtectedRoute exact path="/customerDetails" component={CustomerDeatils} />
        <ProtectedRoute exact path="/governmentId/:side" component={GovernmentID} />
        <ProtectedRoute exact path="/selfie" component={Selfie} />
        <ProtectedRoute exact path="/verifyPhoto/:type/:side" component={VerifyPhoto} />
        <ProtectedRoute exact path="/success" component={Success} />
        <Route exact path="/signup" component={SignupPage} />
      </Switch>
    </Router>
  );
};

export default Routes;
