import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'
import numeral from 'numeral'
import Button from '../../components/Button'

const DirectionInfoWrapper = styled.View`
  position: absolute;
  bottom: 16px;
  left: 16px;
  right: 16px;
  background-color: #ffffff;
`

const FlexWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
`

const Text = styled.Text`
  font-size: 16px;
`

const TextBlue = Text.extend`
  color: #3498db;
`
const TextRed = Text.extend`
  color: #e74c3c;
`

const TextRedBold = Text.extend`
  color: #e74c3c;
  font-weight: 600;
`

export default class DirectionInfo extends React.PureComponent {
  static propTypes = {
    duration: PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.number
    }),
    distance: PropTypes.shape({
      text: PropTypes.string,
      value: PropTypes.number
    }),
    onConfirm: PropTypes.func
  }

  getPrice(){
    return 7000 * ((this.props.distance.value) / 1000)
  }

  render() {
    return (
      <DirectionInfoWrapper>
        <FlexWrapper>
          <TextBlue>
            {this.props.distance.text} -
            <TextRed>{this.props.duration.text}</TextRed>
          </TextBlue>
          <TextRedBold>
            đ {numeral(this.getPrice()).format('0,0')}
          </TextRedBold>
        </FlexWrapper>
        <Button onPress={this.props.onConfirm} color={'#2ecc71'}>Xác nhận</Button>
      </DirectionInfoWrapper>
    )
  }
}
