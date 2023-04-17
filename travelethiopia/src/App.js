import './App.css';
// import PostList from './components/PostList';
// import AddList from './components/AddList';
import { useState } from 'react';
import SignIn from './components1/SignIn';
import LoggedIn from './components1/LoggedIn';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { UserProvider } from './components1/userContext';
import { Link  } from 'react-router-dom';
import PostList from './components/PostList';
import Guest from './components1/Guest';

function App() {
  const [currentForm, setcurrentForm] = useState('login')
  const [username, setUsername] = useState('');

  const changeForm = (formName) => {
    setcurrentForm(formName);
  }
  return (
    <div className="App">
      {/* <Router>
        <SignIn/>
        <Switch>
          <Route exact path='/login'>
            <LoggedIn/>
          </Route>
        </Switch>
      </Router> */}

      {
        currentForm === "login" ? 
        <SignIn onFormSwitch={changeForm}changeForm/> :         
         <LoggedIn/> 
      }

      {/* <PostList/> */}
      
    </div>
  );
}

export default App;
