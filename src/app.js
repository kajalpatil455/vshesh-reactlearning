import React, {Component} from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './pages/home';
import AboutUs from './pages/about-us';
import Contact from './pages/contact';
import Product from './pages/product';
import loginPage from './pages/login-page';
import Mail from './pages/mail';
import RegisterPage from './pages/register';
class App extends Component{

render(){
return(
<BrowserRouter>
<switch>
<Route path="/" exact component={Home}></Route>
<Route path="/loginPage" component={loginPage}></Route>
'<Route path="/about-us" component={AboutUs}></Route>
<Route path="/contact" component={Contact}></Route>
<Route path="/product" component={Product}></Route>
<Route path="/mail" component={Mail}></Route>
<Route path="/signin" component={RegisterPage}></Route>
</switch>

</BrowserRouter>

 )
}

}

export default App;