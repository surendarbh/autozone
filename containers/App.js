import React, {Component} from 'react';
import { Pencilbanner } from '../component/Pencilbanner.js'
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
          <Pencilbanner/>





        );
    }
}
