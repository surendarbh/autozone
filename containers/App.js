import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Background from '../images/deal-1-black.png';
import Button from '../component/Button';
import "../css/styles.css"

export default class App extends Component {


    render() {
       let cta = true;

        let style = {
            //fontSize : "10px",
            //color: "green",
            //backgroundColor:'#dc3545'
            fontWeight:'bold'
        };

        return (

            // Banner class can be - a) pencilBannerLight and b)pencilBannerDark
            <div className = "pencilBannerLight" style={style} onClick= {() => {cta ? alert("yes click") : alert("no")}}>
                <div className = "pencilContent col-md-12 col-xs-12">
                    <div className= "col-md-3 col-xs-3"> <img alt ="Pencil Banner Image" src="../images/pencilImage.png" className="pencilImage"/></div>
                    <div className = "pencilTitle col-md-6 col-xs-6"> FREE GROUND SHIPPING OVER $25* LOREM IPSUM DOLAR SIT AMET CON.
                            <div> Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore. </div>
                    </div>
            {cta ? <div className = "col-md-3 col-xs-3"><span> SEE DETAILS</span> </div> : ''}

                </div>
            </div>









        );
    }
}
