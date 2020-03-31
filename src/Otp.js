import React, {Component, Fragment} from 'react';
import './components/otp/otp.styles.css';
import OtpCard from '../src/components/otp/otp.component';

class Otp extends Component {
    
    render(){
        return(
            <Fragment>
                <div className="outer">
                    <div className="middle">
                        <OtpCard />
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Otp;