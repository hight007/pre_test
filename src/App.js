import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";

//components
import question1 from './components/question1'
import question2 from './components/question2'

export default function App() {

  const redirectToHome= () => {
    return <Redirect to="/question1" />;
  };

  return (
    <Router>
      <div>
        
        <Switch>
          <Route path="/question1" component={question1} />
          <Route path="/question2" component={question2} />
          <Route exact={true} path="/" component={redirectToHome} />
          <Route exact={true} path="*" component={redirectToHome} />
        </Switch>
      </div>
    </Router>
  )
}
