import react from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = ()=>{
    return(
        <Navigation>
            <a href="#"><h3>Portfolio Website</h3></a>
            <div className="navs">
            <ul>
               <li><Link to="/" >Home</Link></li> 
                <li><Link to="/">About Me</Link></li>
               <li> <Link to="contact">Contact Me</Link></li>
               <li> <Link to="work"> My Qualifications</Link></li>
            </ul>

            </div>
           
        </Navigation>

    );
}

const Navigation  = styled.div`
background-color: #2b2b2b;
display: flex;
justify-content: space-between;

.navs{
    

    ul{
        display: flex;
        li{
            list-style: none;
            padding: 0.5rem 1rem;
            

           
        }
    }
}


`;

export default Nav;
