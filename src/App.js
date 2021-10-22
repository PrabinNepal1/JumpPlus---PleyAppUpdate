import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PrivateRoute from './component/route/privateRoute';

import {AuthProvider} from "./context/AuthContext";


import Header from "./component/header/header";
import Footer from './component/footer/Footer';
import Login from './component/login/login';
import Signup from './component/signup/signup';
import User from './component/user/user';
import Resturant from './component/pages/resturant/Resturant';

import { Slider } from "material-ui";

import Cards from "./component/card/Cards";
import CreateResturant from './component/curd/CreateResturant';

function App() {
  return (
    <div className="App">
    <Router>
      <AuthProvider>
      

        <Header/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        <PrivateRoute exact path='/user' component={User}/>
        <Route exact path='/resturant' component={Resturant}/>
        <Route exact path='/resturant/add' component={CreateResturant}/>
        
        <Footer/>
    
    

        
      </AuthProvider>
    </Router>
  
     

        <Footer/>
     
    </div>
  );
}

export default App;
