import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';

import DonutChart from './DonutChart';
import LineChart from './LineChart';


export default class App extends Component {
  render() {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <DonutChart />
        <LineChart />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center'
  },
});
