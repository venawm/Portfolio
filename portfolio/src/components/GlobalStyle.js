import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
margin: 0;
padding: 0;
box-sizing: border-box;

body{
    background-color: #1f1f1ffa;
    color: white;

    
}
button{
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid green;
    color: white;
    transition: all 0.5s ease;
    background: transparent;
    &:hover{
        color: #23d997;
        background-color: black;
    }
}
h2{
    font-weight: lighter;
    font-size:2rem;
    margin: 0;
}
h3{
    color: white;
}
span{
    font-weight: bold;
    color: #37c230;
}
p{
    color: ccc;
    padding: 3rem 0rem;
    margin: 0;
    font-size: 1rem;
}
a{
    text-decoration: none;
    color: white;
                
    }
`;


export default GlobalStyles;
