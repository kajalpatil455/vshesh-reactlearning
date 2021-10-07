import React, {Component} from "react";

class RegisterPage extends Component{

    render(){
        return(
       <div>
  <h1>Register Page</h1>
     <div className="bottom-space">
<label className="label-Text">Enter First Name :</label>
<input className="input-space" type="text" placeholder="Please enter your first name.."/>
    </div>
    <div className="bottom-space">
<label className="label-Text">Enter Last Name :</label>
<input className="input-space" type="text" placeholder="Please enter your last name.."/>
    </div>
    <div className="bottom-space">
<label className="label-Text">Enter Email ID :</label>
<input className="input-space" type="text" placeholder="Please enter your email id.."/>
    </div>
    <div className="bottom-space">
<label className="label-Text">Select your Gender:</label>
<input className="font" type="radio" name="gender"/>Male
<input className="font" type="radio" name="gender"/>Female
<input className="font" type="radio" name="gender"/>Others
</div>
<div className="bottom-space">
<label className="label-Text">Select your DOB :</label>
<input type="date" className="input-space"/> 
</div>
<div className="bottom-space center-text">
<label className="label-text">Enter your Address :</label>
<textarea placeholder="Please enter your address.."
className="input-space"></textarea>
</div>

</div>
   )
 }
}


export default RegisterPage;