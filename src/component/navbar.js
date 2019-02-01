import React from 'react';
import {Link} from 'react-router-dom';
import logo from'../github.png';
import Search from '../screens/search';
class Navbar extends React.Component{
    constructor(){
        super();
        this.show=this.show.bind(this);

    }
    show(){
        console.log();
        document.getElementById("forms").style.display="block";
    }
    hide(){
        document.getElementById("forms").style.display="none";
    }
    render(){
    return(
        <div className="navmain">
            <div className="navbar">
            <img className="logo" src={logo}/>
            <Link to='/'>Home</Link>
            <Link to='/search'>Search</Link>
            <Link to='/about'>About</Link>
            </div>
        </div>
    )
    }
}
export default Navbar