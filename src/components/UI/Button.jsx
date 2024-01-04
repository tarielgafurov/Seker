import React from 'react'
import styled from 'styled-components'

const Button = ({name, onClick}) => {
  return (
    <ButtonStyle onClick={onClick}>{"Test"}</ButtonStyle>
  )
}

export default Button

const ButtonStyle = styled.button`
  background-color: #FC3A74;
  color: white;
  padding: ${(props)=>props.padding || "5px 34px"};
  font-size: ${(props)=>props.fontSize || "20px"};
  font-weight: ${(props)=>props.fontWeight || "600px"};
  border-radius: 10px;
  border: none;
`