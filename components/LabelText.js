import React from 'react'
import styled from 'styled-components/native'

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 16px;
  border-bottom-color: #eee;
  border-bottom-width: 1px;
`

const Label = styled.Text`
  font-weight: 600;
`

const LabelValue = styled.Text`
  color: ${props => (props.color ? props.color : '#3498db')};
  font-weight: 600;
`

const View = styled.View`
  padding-left: 16px
`

export default function LabelText({ color, label, children }) {
  return (
    <Wrapper>
      <Label>{label}</Label>
      <View>
        <LabelValue color={color}>{children}</LabelValue>
      </View>
    </Wrapper>
  )
}
