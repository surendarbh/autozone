import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Background from '../images/deal-1-black.png';
import Button from '../common_Component/Button';
import "../css/styles.css"
import ReactHtmlParser from 'react-html-parser';

export default class Pencilbanner extends Component {


    render() {
       let cta = true;

       let imageWithButton = "../images/pencil_image.JPG";
       let imagelink ="https://www.google.com";

       let imageWithOutButton = "../images/pencil_image2.JPG";
       let buttonLink = "https://www.google.com";
       let content = "SEE DETAILS";


        let style = {
            //fontSize : "10px",
            //color: "green",
            //backgroundColor:'#dc3545'
            fontWeight:'bold'
        };


        let htmlContent = '<div><strong>FREE GROUND SHIPPING OVER $25* LOREM IPSUM DOLAR SIT AMET CON.<\/strong><\/div>\n\n<div>Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore.<\/div>\n';

        /*
        This method will return the required banner for option 3 based on the response.
        */
       const getPencilBanner = () => {
        return cta ? <div class="col-md-12 col-xs-12 pencil_container"><img className="pencil_img" src={imageWithOutButton}/>
        <div className = "pencil_img_button" onClick= {() => {alert("load" + {buttonLink}) }}>
        <span> {content}</span> </div></div> :
          <div class="col-md-12 col-xs-12"><a href={imagelink}><img className="pencil_img" src={imageWithButton}/>
         </a> </div>;
        }


        return (

            // Banner class can be - a) pencilBannerLight and b)pencilBannerDark
            <div>
            <h3> Pencil Option 1 </h3>
            <div className = "pencilBannerLight" style={style} onClick= {() => {cta ? alert("yes click") : alert("no")}}>
                <div className = "pencilContent col-md-12 col-xs-12">
                    <div className= "col-md-3 col-xs-3"> <img alt ="Pencil Banner Image" src="../images/pencilImage.png" className="pencilImage"/></div>
                    <div className = "pencilTitle col-md-6 col-xs-6"> FREE GROUND SHIPPING OVER $25* LOREM IPSUM DOLAR SIT AMET CON.
                        <div> Lorem ipsum dolor sit amet, consectetur adipisc elit, sed do eiusmod tempor incididunt ut labore. </div>
                    </div>
            {cta ? <div className = "col-md-3 col-xs-3"><span> SEE DETAILS</span> </div> : ''}

                </div>
            </div>

            <h3> Pencil Option 3 </h3>


        {getPencilBanner()}

            <h3> Pencil Option 2 </h3>

        <div className = "pencilBannerLight" style={style} onClick= {() => {cta ? alert("yes click") : alert("no")}}>
            <div className = "pencilContent col-md-12 col-xs-12">
                <div className= "col-md-3 col-xs-3"> <img alt ="Pencil Banner Image" src="../images/pencilImage.png" className="pencilImage"/></div>

                    { ReactHtmlParser(htmlContent) }
                    {cta ? <div className = "col-md-3 col-xs-3"><span> SEE DETAILS</span> </div> : ''}
                </div>


            </div>
              </div>

        );
    }
}
