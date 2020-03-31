import React from 'react';
import './otp.styles.css';
import { Button,Card } from 'react-bootstrap';
import image from '../../OTP anime.gif';
import formInput from '../otp-form/otp-form.component';
class OtpCard extends React.Component {

    Generate()
    {
        window.alert("New One Time Password has been sent");
        document.getElementById('sent').innerHTML = "Enter The new Code that We sent You";
    }
    // moveNext = (e) => {
    //     setTimeout(function(){ console.log($(e.target).value); }, 500);
    //     if(e.target.value === "") {
            
    //         $(e.target).prev().focus();
    //     } else {
    //         $(e.target).next().focus();
    //     }
    // }

    render() {
        return(
            <Card id="c">
                <Card.Body>
                    <h5 className="card-title" id="heading">Verification</h5>
                    <img src={image} width = '85%' alt="" />
                    <div className="card-text" id="sent" >Enter the verification Code we just sent you on your phone...</div>
                    {/* <form>
                        <input className="input" type="text" maxlength="1" onKeyUp={this.moveNext} id="input1" />
                        <input className="input" type="text" maxlength="1" id="input2" onKeyUp={this.moveNext} />
                        <input className="input" type="text"  maxlength="1" id="input3" onKeyUp={this.moveNext} />
                        <input className="input" type="text" maxlength="1" id="input4" onKeyUp={this.moveNext}  />
                    </form> */}
                    <div><formInput /></div>
                    
                    <br /><br /><br /><br />
                    <div id="resend">If you didn't recieve a code! <a href="#" onClick={this.Generate} >Resend</a> </div>
                                
                    <Button className="btn btn-success" id="success"><a href="/profile" style= {{color:"white",textDecoration:"none"}}>Verify</a></Button>
                </Card.Body>     
            </Card>
            
        );
    }
    
}

export default OtpCard;