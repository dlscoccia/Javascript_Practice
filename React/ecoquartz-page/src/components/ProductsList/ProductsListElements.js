import styled from "styled-components";
import { Link } from "react-router-dom";


export const ProductsContainer = styled.div`
display: flex;
flex-direction: column;
`

export const Heading = styled.h1`
font-family: var(--primary);
font-size: 40px;
text-align: center;
margin: 15px 0;
`

export const CartLink = styled(Link)`
background-color: #c6c6c6;
margin: 10px auto;
`

export const BtnContainer = styled.div`
width: 80%;
margin: 10px auto;
display: flex;
flex-wrap: wrap;
justify-content: center;
gap: 1rem;

`

export const Button = styled.button`
background-color: var(--blue);
color: var(--yellow);
width: 100px;
padding: 5px 10px;
box-shadow: none;
transition: all 0.5s ease-in-out;

&:hover {
box-shadow: 2px 2px 0 var(--yellow), -2px -2px 0 var(--dark-gray);
transition: all 0.5s ease-in-out;
}

`