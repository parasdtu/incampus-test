import React from 'react';
import $ from 'jquery';
import '../otp/otp.styles.css';

export class formInput extends React.Component {
    constructor(){
        super();
    }

    moveNext = (e) => {
        setTimeout(function(){ console.log($(e.target).value); }, 500);
        if(e.target.value === "") {
            
            $(e.target).prev().focus();
        } else {
            $(e.target).next().focus();
        }
    }

    render(){
        var rows=[1,2,3,4];
        return(
            <form>
               {rows.map(() => (<input className="input" type="text" maxlength="1" onKeyUp={this.moveNext} id="input1" />
               ))}
            </form>
        );
    
    }
}

export default formInput;