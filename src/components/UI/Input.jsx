import React from 'react'
import styled from 'styled-components'

const Input = ({type, onChange, value, name, placeholder, ...propsStyle}) => {
  return <InputStyle onChange={onChange} />
}

export default Input

const InputStyle = styled.input`
  width: 400px;
  padding: 10px;
  outline: none;
  border-radius: 10px;
  border: 1px solid #C1C1C1;
`