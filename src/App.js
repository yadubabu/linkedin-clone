import "./App.css";
import {Container} from 'react-bootstrap';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import { useDispatch } from "react-redux";
import {getUserAuth} from './actions/index';
import { useEffect } from "react";
import SignIn from './components/SignIn';

function App() {
  const dispatch=useDispatch();
  useEffect(()=>{
    return dispatch(getUserAuth());
  },[]);
  return (
    <Container>

        <Router>
          <Routes>

            <Route path='/' exact element={<Login/>}/>
            <Route path='/home' element={<Home />} />
            <Route path='/signup' exact element={<SignUp/>}/>
            <Route path='/signin' exact element={<SignIn/>}/>

          </Routes>
        </Router>
    </Container>
     
  );
}

export default App;