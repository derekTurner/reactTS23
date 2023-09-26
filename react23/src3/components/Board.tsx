import React from 'react';
import Square from './Square';
import styled from "styled-components";


const GridDiv = styled.div`
background-color:red,
border: 4px solid darkblue,
borderRadius: 10px,
width: 250px,
height:"250px,
margin: 0 auto,
display: grid,
gridTemplate: repeat(3, 1fr) / repeat(3, 1fr)
`;


interface BoardProps {
    squares: Array<Int8Array>,
	onClick: (i:number) => void;
}

const Board = ({ onClick }:BoardProps) => {
    return(
    <GridDiv>
        <Square value="1" onClick={() => onClick(1)} />
        <Square value="2" onClick={() => onClick(2)} />
        <Square value="3" onClick={() => onClick(3)} />
        <Square value="4" onClick={() => onClick(4)} />
        <Square value="5" onClick={() => onClick(5)} />
        <Square value="6" onClick={() => onClick(6)} />
        <Square value="7" onClick={() => onClick(7)} />
        <Square value="8" onClick={() => onClick(8)} />
        <Square value="9" onClick={() => onClick(9)} />
    </GridDiv>
    )
}

export default Board;
