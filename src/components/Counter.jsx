import React from "react";
import styled from "styled-components";
import useCounter from "./useCounter";

const Counter = () => {
  const { count, increment, decrement,reset } = useCounter();

  return (
    <StyledDiv>
      <StyledP>Count: {count}</StyledP>
      <Button onClick={increment}>+</Button>
      <Button2 onClick={decrement}>-</Button2>
      <Button3 onClick={reset}>Reset</Button3>
    </StyledDiv>
  );
}

export default Counter;

const StyledP = styled.h1`
    color: red;
`

const Button = styled.button`
  width: 80px;
  height: 40px;
  background-color: #ffc57f;
  font-size: 23px;
`;

const Button2 = styled.button`
  width: 80px;
  height: 40px;
  background-color: #7fff8c;
  font-size: 23px;
`;
const Button3 = styled.button`
  width: 80px;
  height: 40px;
  background-color: #c7361d;
  font-size: 23px;
`;

const StyledDiv = styled.div`
  text-align: center;
  margin: -30px;
  padding: 0px;
  background-color: blue;
  height: 200px;
`;