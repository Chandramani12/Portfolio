import React from "react";
import './app.css';
import image from '../images/chandramani.png'


class Footer extends React.Component{
render(){
    return(
        <div >
            <footer className="text-footer text-white flex flex-col md:flex-row items-center justify-between">

                <div className="text-footer">
                    <img src={image} alt="chandramani" width={200} height={150}/>
                </div>
               
                 
            </footer>
        </div>
    );
}

}

export default Footer;