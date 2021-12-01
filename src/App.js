import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

//components


export default function App() {

  const redirectToHome= () => {
    return <Redirect to="/login" />;
  };

  return (
    <Router>
      <div>
        
        <Switch>
          <SecuredRoute path="/Home" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Product" component={Product} />

          <Route exact={true} path="/" component={redirectToHome} />
          <Route exact={true} path="*" component={redirectToHome} />
        </Switch>
      </div>
    </Router>
  )
}
