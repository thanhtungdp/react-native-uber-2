import React from 'react'
import PropTypes from 'prop-types'
import { MapView, Permissions, Location } from 'expo'

export default class MapViewCustom extends React.Component {
  static propTypes = {
    haveDirection: PropTypes.bool,
    coords: PropTypes.array
  }

  state = {
    mapRegion: null
  }

  componentDidMount() {
    // yêu cầu người dùng đồng ý truy cập vị trí
    this.getLocationAsync()
  }

  async getLocationAsync() {
    let { status } = await Permissions.askAsync(Permissions.LOCATION)
    if (status !== 'granted') {
      alert('Permission to access location was denied')
    }
    let position = await Location.getCurrentPositionAsync({})
    let region = {
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
      latitudeDelta: 0.00922 * 1.5,
      longitudeDelta: 0.00421 * 1.5
    }
    this.setState({ mapRegion: region })
  }

  handleChangeMapRegion(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region
    })
  }

  render() {
    return (
      <MapView
        style={{ flex: 1 }}
        region={this.state.mapRegion}
        showsUserLocation
        onRegionChange={this.handleChangeMapRegion.bind(this)}
      >
        {this.props.haveDirection ? (
          <MapView.Polyline coordinates={this.props.coords} strokeColor="#2c3e50" strokeWidth={4} />
        ) : null}
      </MapView>
    )
  }
}
