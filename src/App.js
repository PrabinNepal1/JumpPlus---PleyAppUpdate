import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import PrivateRoute from './component/route/privateRoute';

import {AuthProvider} from "./context/AuthContext";


import Header from "./component/header/header";
import Footer from './component/footer/footer';
import Login from './component/login/login';
import Signup from './component/signup/signup';
import User from './component/user/user';
import Resturant from './component/restaurant/restaurant';
=======
import { Slider } from "material-ui";
import Footer from "./component/footer/Footer";
import Header from "./component/header/header";
import Cards from "./component/card/Cards";

function App() {
  return (

    <Router>
      <AuthProvider>
        <div className="App">

        <Header/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        <PrivateRoute exact path='/user' component={User}/>
        <Route exact path='/resturant' component={Resturant}/>
        <Footer/>
    
    

        </div>
      </AuthProvider>
    </Router>
      <h1>Pley App</h1>
      <Cards/>
      <Footer/>
     
    </div>
  );
}

export default App;
