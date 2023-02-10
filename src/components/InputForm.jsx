import React from "react";
import styled from "styled-components";
import { useInput } from "./useInput";

function InputForm() {
  const { input, onInputChange, onSubmit } = useInput();

  return (
    <Form onSubmit={onSubmit}>
      <div>
        <StyledLabel htmlFor="email">Email:</StyledLabel>
        <StyledInput
          type="email"
          id="email"
          name="email"
          value={input.email}
          onChange={onInputChange}
        />
      </div>
      <div>
        <StyledLabel htmlFor="password">Password:</StyledLabel>
        <StyledInput
          type="password"
          id="password"
          name="password"
          value={input.password}
          onChange={onInputChange}
        />
      </div>
      <StyledButton type="submit">Login</StyledButton>
    </Form>
  );
}

export default InputForm;


const Form = styled.form`
 height: 200px;
  background-color: blueviolet;
  text-align: center;
  margin: -30px;
  padding: 0px;
  border: 5px solid purple; 
 
`;

const StyledLabel = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
 
`;
const StyledInput = styled.input`
  width: 50%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 10px;
  margin-top: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
  
`;