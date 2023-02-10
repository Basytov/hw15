import React from "react";
import styled from "styled-components";
import useTimer from "./useTimer";

function TimerExample() {
  const [seconds, start, pause, reset] = useTimer(60);

  return (
    <StyledDiv>
      <StyledTimer>Timer:{seconds}</StyledTimer>
      <Button onClick={start}>Start</Button>
      <Button2 onClick={pause}>Pause</Button2>
      <Button3 onClick={reset}>Reset</Button3>
    </StyledDiv>
  );
}

export default TimerExample;

const StyledDiv = styled.div`
    /* width: 500px; */
    height: 200px;
    background-color: red;
   text-align: center;
   /* margin-left: 35%; */
   margin-top: 40px;
   border-radius: 15px;
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
  background-color: #1b6369;
  font-size: 23px;
`;
const Button3 = styled.button`
  width: 80px;
  height: 40px;
  background-color: #821ca1;
  font-size: 23px;
`;

const StyledTimer = styled.h1`
    color: #1aae44;
`