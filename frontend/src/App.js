import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import { BrowserRouter, Route , Switch , Redirect} from 'react-router-dom';
import Login from './components/Login';
import Header from './components/header';
import Chat from './components/Chat';
import Home from './components/home';



function App() {
  return (
    <div className="App">
     <BrowserRouter>
   
     <Header></Header>
     <Route path="/">
       <Redirect to="/home"></Redirect>
     </Route>

     <Route component={Home} path='/home'></Route>
     <Route component={Register} path='/register'></Route>
     <Route component={Login} path='/login'></Route>
     <Route component={Chat} path='/chat'></Route>
    
     </BrowserRouter>
    </div>
  );
}

export default App;
