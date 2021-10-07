import React, {Component} from "react";
import {NavLink} from 'react-router-dom';

class aboutUs extends Component{

render(){
return(
<div>
    <h1>This is a About US PAGE</h1>
    
<NavLink to="/">About PAGE</NavLink>
<br/>
<NavLink to="/loginpage">LoginPage</NavLink>
<br/>
<NavLink to="/product">Product</NavLink>
<br/>
<NavLink to="/contact">Contact</NavLink>



</div>
)

}
}

export default aboutUs;