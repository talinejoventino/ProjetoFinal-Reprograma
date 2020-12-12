import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

export default class BntNav extends React.Component {

    constructor()
    {
        super();
        this.state={
            visNav:'flex'
        }
    }

    clickMe()
    {
        if(this.state.visNav === 'flex'){
            this.setState({
                visNav:'none'
            });
        }else{
            this.setState({
                visNav:'flex'
            });
        }
        document.querySelector(".links").style.display=this.state.visNav;
    }

    render(){
        return(
            <div className="bntNav" onClick={this.clickMe.bind(this)}>
                <GiHamburgerMenu size={30} color="#ffff"/>
            </div>
        );
    }
}