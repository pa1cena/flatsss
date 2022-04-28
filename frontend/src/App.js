import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Login from './components/login';
import Createpoll from './components/createpoll';
import Signup from './components/signup';
import Err from './components/err';
import Protected from './components/Protected';
import Card from './components/Card';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/signup' component={Signup}></Route>
        <Route exact path='/protected' component={Protected}></Route>
        <Route exact path='/createpoll' component={Createpoll}></Route>
        <Route exact path='/cards' component={Card}></Route>
        <Route exact path='*' component={Err}></Route>
      </Switch>
    </Router>
  );
}

export default App;
