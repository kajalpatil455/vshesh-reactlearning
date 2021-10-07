import React, {Component} from "react";

class LoginPage extends Component{
constructor(props){
super(props);
this.State = {
  email :'',
  password : ''

}
}
handleInput = (event) => {
// console.log(event.target.value,event.target.name)
   this.setState({
     [event.target.name] : event.target.value


   });
}
displayLogin(){

  console.log(this.state)
}


render(){
return(
    <div>
<h1 className="heading">Welcome to Login Page</h1>
<img src={require("../images/kajal.jpg").default} style={{'width':'250px'}}/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDYzDboMxTT295NonSz3TXIXwg-c9Xrj98_A&usqp=CAU"/>

<div className="bottom-space">
<label className="label-Text">Enter your Email Id :</label>
<input type="email" placeholder="Please enter your email id"
className="input-space" onChange={this.handleInput} name="email"/>
</div>
<div className="bottom-space">
<label className="label-Text">Enter your Password :</label>
<input type="password" placeholder="Please enter your password" 
className="input-space" onChange={this.handleInput} name="password"/>
</div>

<div className="bottom-space">
<button onClick={() => this.displayLogin()}>Login</button>
</div>

</div>

)
}
}
  
  export default LoginPage;