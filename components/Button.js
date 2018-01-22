import React from 'react'
import { ActivityIndicator } from 'react-native'
import styled from 'styled-components/native/index'

const Button = styled.TouchableOpacity`
  background-color: ${props => (props.color ? props.color : '#3498db')};
  padding: 16px 16px;
  align-items: center;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
`
const ButtonText = styled.Text`
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
`

export default function ButtonFunc({ children, isLoading, ...props }) {
  return (
    <Button {...props}>
      {isLoading ? <ActivityIndicator /> : <ButtonText>{children}</ButtonText>}
    </Button>
  )
}
