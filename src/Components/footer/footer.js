import React from "react"
import {Component } from "react"
import './footer.css'

class footer extends Component{
    render(){
        return(
            <>
            <div className="footer">
                <div className="lefttext">
                    <p>Feito com S2 por hiyoko</p>
                    <p>Em um estudo de react</p>
                    <p>feito em algum lugar que não vale a penas ser mencionado</p>
                </div>
            </div>
            </>
        )
    }
}

export default footer