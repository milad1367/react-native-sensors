import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PedometerSensor from '../containers/PedometerSensor';
import GyroscopeSensor from '../containers/GyroscopeSensor';
import GpsSensor from '../containers/GpsSensor';

const Index = ()=> {
    return(
        <View>
            <PedometerSensor />
            <GyroscopeSensor />
            <GpsSensor />
        </View>
    )
}

export default Index

