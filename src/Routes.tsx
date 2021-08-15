import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from 'app/pages/Auth';
import Camera from 'app/pages/Camera';
import CustomerDeatils from 'app/pages/CustomerDetails';
import GovernmentID from 'app/pages/GovernmentID';
import Selfie from 'app/pages/Selfie';
import Success from 'app/pages/Success';
import VerifyPhoto from 'app/pages/VerifyPhoto';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Auth} />
        <Route exact path="/camera/:type/:side" component={Camera} />
        <Route exact path="/customerDetails" component={CustomerDeatils} />
        <Route exact path="/governmentId/:side" component={GovernmentID} />
        <Route exact path="/selfie" component={Selfie} />
        <Route exact path="/verifyPhoto/:type/:side" component={VerifyPhoto} />
        <Route exact path="/success" component={Success} />
      </Switch>
    </Router>
  );
};

export default Routes;
