import React from "react";
import home1 from "../img/home1.jpg";
import styled from 'styled-components';

const AboutUsComponent = ()=>{
    return(
    <Styles >
        <Description>
            <div className="hide">
                <h2>Hi i am</h2>
            </div>
            <div className="hide">
                <h2>Samir
                <span> Pandey</span>
                </h2>
            </div>
            <div className="hide">
                <h2>I am a <span>React</span> developer.</h2>
            </div>
            <p>Contact me for beautiful websites making beautiful websites.</p>
            <button>Contact Us</button>
        </Description>
        <Image>
            <img src={home1} alt="" />
        </Image>
    </Styles>
    


    );
    
};
const Styles = styled.div`
padding-top:10px;
min-height: 100vh;
display: flex;
justify-content: space-around;
align-items: center;

`
const Description = styled.div`
flex: 1;
padding: 1rem;
h2{
    font-weight: lighter;
}

`
const Image = styled.div`
flex: 1;
img{
    height: 40%;
    width: 35vw;
   
}
`

//Styled Components



export default AboutUsComponent;