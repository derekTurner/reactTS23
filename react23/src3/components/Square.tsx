import React,  { MouseEvent } from 'react';
import styled from "styled-components";

type SquareProps = {
    value : Int8Array;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const MyButton = styled.button`
background: lightblue;
border: 2px solid darkblue;
font-size:25px;
font-weight: 800;
cursor: pointer;
outline-style: solid;
outline-width: thin;
outline-color:  #92a8d1;
/*margin: 1px;*/
`;



const Square = ({ value, onClick }:SquareProps) => {
    return(
    <MyButton  onClick={onClick}>
        {value}
    </MyButton>
    )
}

export default Square;