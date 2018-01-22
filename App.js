import React from 'react'
import {StackNavigator} from 'react-navigation'
import Home from './screens/home'
import DirectionPending from './screens/direction-pending'

export default new StackNavigator({
  home: {
    screen: Home
  },
  directionPending: {
    screen: DirectionPending
  }
}, {
  headerMode: 'none'
})
