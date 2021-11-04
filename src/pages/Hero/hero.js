import React ,{ Component } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import './hero.css'

class hero extends Component{
    render(){
        return(
            <div className="hero-bg">
                <Navbar />
                <div className="hero">
                    <h1>A melhor host <br />Minecraft</h1>
                    <p>O site que não faz sua hospedagem minecreaft</p>
                </div>
            </div>
        )
    }
}

export default hero