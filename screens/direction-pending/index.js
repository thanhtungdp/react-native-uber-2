import React from 'react'
import styled from 'styled-components/native'
import CarLoading from '../../components/CarLoading'
import LabelText from '../../components/LabelText'
import Button from '../../components/Button'

const Layout = styled.View`
  flex: 1;
  padding-top: 50px;
  background-color: #fafbfb;
`

const Clearfix = styled.View`
  height: 16px;
`

const Wrapper = styled.View``

export default class DirectionPending extends React.Component {
  render() {
    const {
      direction: { duration, distance, origin, destination }
    } = this.props.navigation.state.params
    return (
      <Layout>
        <Wrapper>
          <LabelText label="Địa điểm đón">{origin.text}</LabelText>
          <LabelText label="Địa điểm tới">{destination.text}</LabelText>
          <LabelText label="Khoảng cách">{distance.text}</LabelText>
          <LabelText label="Thời gian">{duration.text}</LabelText>
        </Wrapper>
        <Clearfix />
        <CarLoading />
        <Clearfix />
        <Button onPress={() => this.props.navigation.goBack(null)}>Quay lại</Button>
      </Layout>
    )
  }
}
