import react from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const FaqComponent = ()=>{
    return (
        <Faq>
           
            <FontAwesomeIcon icon="fa-solid fa-angle-up" />
            <h2>Any Questions</h2>
       
            <div className="questions">
                <h4>What is my name?  <FontAwesomeIcon icon="fa-solid fa-angle-down" /></h4>
                <div className="answer">
                    <p>My Name is Samir <span>Pandey</span></p>
                </div>
                </div>
                <div className="faq-line"></div>
                <div className="questions">
                <h4>Where do i work?</h4>
                <div className="answer">
                    <p>Curremtly i am unemployed</p>
                </div>
                </div>
                <div className="faq-line"></div>

                <div className="questions">
                <h4>What is my expertise?</h4>
                <div className="answer">
                    <p>My expertise at the time of making this website would be Vanilla  Javacript and i am currently prusuing REACT</p>
                </div>
                </div>
                <div className="faq-line"></div>

                <div className="questions">
                <h4>What is my name?</h4>
                <div className="answer">
                    <p>My Name is Samir <span>Pandey</span></p>
                </div>
                </div>
                <div className="faq-line"></div>
                



            </Faq>
            

    );
}

const Faq = styled.div`
.answer{
    display: none;
}
.faq-line{
    border-bottom: 2px solid white;
}

`

export default FaqComponent;