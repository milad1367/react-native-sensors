import React, { Component } from 'react';
import { Platform, Text, View, StyleSheet } from 'react-native';
import { Constants, Location, Permissions } from 'expo';
import { connect } from 'react-redux';
import { setGps } from '../actions'

 class GpsSensor extends Component {
  state = {
    location: null,
    errorMessage: null,
    gps:"off",
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this.getLocation();
    }
  }
  componentDidMount() {
    this._getGpsStatus();
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };
  /*
  getLocation = () => {
    
    this.mlocation = Expo.Location.watchPositionAsync({
        enableHighAccuracy: true,
        timeInterval: 1,
        distanceInterval: 1
    }, (loc) => {
        if (loc.timestamp) {
           this.props.dispatch(setGps(loc));
           this.setState({location:loc});
        } else {
          this.setState({errorMessage:'Problems on update location'})
        }
    });
}
*/

  getLocation = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }
    this.mlocation = Expo.Location.watchPositionAsync({
        enableHighAccuracy: true,
        timeInterval: 1,
        distanceInterval: 1
    }, (loc) => {
        if (loc.timestamp) {
           this.props.dispatch(setGps(loc));
           this.setState({location:loc});
        } else {
          this.setState({errorMessage:'Problems on update location'})
        }
    });
}

_getGpsStatus= async () => {
  let { status } = await Permissions.askAsync(Permissions.LOCATION);
  if (status !== 'granted') {
    this.setState({
      errorMessage: 'Permission to access location was denied',
    });
  }

  let gps = await Location.getProviderStatusAsync();
  console.log(gps.gpsAvailable)
  if (!gps.gpsAvailable) {
    alert('please turn on gps');
  }
  else {
    this.setState({ gps: "on" });
    
  }
};
  render() {
    let text = 'Waiting..';
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (
      <View style={styles.container}>
        <Text> Gps Sensor : </Text>
        <Text style={styles.paragraph}>{ text }</Text>
        <Text > { this.state.errorMessage } </Text>
        <Text>gps status on your device: turn { this.state.gps } </Text>
      </View>
    );
  }
}

GpsSensor = connect()(GpsSensor);

export default GpsSensor

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    textAlign: 'center',
  },
});