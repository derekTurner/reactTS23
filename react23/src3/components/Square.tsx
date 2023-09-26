import React,  { MouseEvent } from 'react';
import styled from "styled-components";

type SquareProps = {
    value : string;
    onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const MyButton = styled.button`
background: lightblue;
border: 2px solid darkblue;
font-size: 30px;
font-weight: 800;
cursor: pointer;
outline: none;
`;



const Square = ({ value, onClick }:SquareProps) => {
    return(
    <MyButton  onClick={onClick}>
        {value}
    </MyButton>
    )
}

export default Square;