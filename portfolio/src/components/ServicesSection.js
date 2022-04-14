import react from "react";
import clock from "../img/clock.svg";
import diaphragm from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.jpg";
import styled from "styled-components";

const ServicesSection = ()=>{
    return(
        < Services>
            <Cards>
                <h2>High <span>Quality</span> Services</h2>
                <div className="cards">
                    <div className="card">
                        <div className="icon">
                        <img src={clock} alt="" />
                        <h3>Faster</h3>
                        </div>
                        <p>I like to code faster and efficiently</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                        <img src={diaphragm} alt="" />
                        <h3>Creativity</h3>
                        </div>
                        <p>I like to create creative websites</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                        <img src={money} alt="" />
                        <h3>Cost Effient</h3>
                        </div>
                        <p>I charge reasonable amount of money</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                        <img src={teamwork} alt="" />
                        <h3>Team work</h3>
                        </div>
                        <p>I am great with teamwork</p>
                    </div>
                </div>
            </Cards>
            <Home2>
                <img src={home2} alt="" />
            </Home2>
        </Services>

    );

}

const Services  = styled.div`
display: flex;
justify-content: space-around;

min-height: 100vh;
margin-top: 3rem;

`
const Cards = styled.div`
 flex: 1;
 padding-left: 1rem;
 display: flex;
 flex-direction: column;
 .cards{
     display: flex;
     flex-wrap: wrap;
    

 }
 
 .card{
    flex-basis:20rem;
    .icon{
        display: flex;
        img{
            margin-right: 15px;
        }
    }
    h3{
        height: auto;
        width: auto;
        color: black;
        background-color:white;
        


    }
   
 }
`
const Home2 = styled.div`
     flex: 1;
     padding: 1rem;
     img{
         width: 35rem;
         height: 30rem;
     }
 

`


export default ServicesSection;