// library imports
import React from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

// imported libraries
import Slider from '@react-native-community/slider';

/**
 * @function App
 * @returns {JSX}
 * @description the main App component
 */
const App = () => {
  // state variables
  const [weight, setWeight] = React.useState(10);
  const [height, setHeight] = React.useState(40);

  /**
   * @function displayHeightText
   * @param {Number} index
   * @returns {String}
   * @description Calculate height and pewrform conversion for ft in
   */
  const displayHeightText = index => {
    const ft = Math.floor(index / 12);
    const inch = index - 12 * ft;
    return inch === 0 ? `${ft} ft` : '';
  };
  return (
    <View style={styles.overallContainer}>
      {/* Weigh container */}
      <View style={styles.weightContainer}>
        <Text style={styles.weighCaption}>{'How much do you weigh Mani?'}</Text>
        <Text style={styles.weightDisplayText}>
          {`${weight} `}
          <Text style={styles.font24}>{'kg'}</Text>
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          persistentScrollbar={true}
          contentContainerStyle={styles.horizontalScrollContainer}>
          <Slider
            thumbImage={require('./assets/img/marker.png')}
            tapToSeek={true}
            onValueChange={v => setWeight(v)}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor={'white'}
            maximumTrackTintColor={'white'}
            step={1}
            value={weight}
          />
          <View style={styles.markingContainer}>
            {Array(101)
              .fill()
              .map((_, i) => i)
              .map((value, index) => {
                if ((index > 0 && index % 5 === 0) || index === 0) {
                  return (
                    <Text
                      key={index.toString()}
                      style={styles.weighMarkerLarge}>
                      {'|'}
                    </Text>
                  );
                } else if (index > 0 && index % 5 !== 0) {
                  return (
                    <Text
                      key={index.toString()}
                      style={styles.weighMarkerSmall}>
                      {'|'}
                    </Text>
                  );
                }
              })}
          </View>
          <View style={styles.weighGraduationContainer}>
            {Array(101)
              .fill()
              .map((_, i) => i)
              .map((value, index) => {
                if ((index > 0 && index % 5 === 0) || index === 0) {
                  return (
                    <Text
                      key={index.toString()}
                      style={[
                        styles.weighGraduationText,
                        // eslint-disable-next-line react-native/no-inline-styles
                        {
                          paddingRight:
                            index === 0
                              ? 30
                              : index <= 10
                              ? 28
                              : index <= 40
                              ? 22
                              : index <= 60
                              ? 20
                              : index <= 70
                              ? 22
                              : 20,
                        },
                      ]}>
                      {index}
                    </Text>
                  );
                }
              })}
          </View>
        </ScrollView>
      </View>

      {/* Height container */}
      <View style={styles.weightContainer}>
        <Text style={styles.weighCaption}>{'How tall are you Mani?'}</Text>
        <Text style={styles.heightDisplayText}>
          {`${Math.floor(height / 12)} `}
          <Text style={styles.font18}>{'ft'}</Text>
          {` ${height - 12 * Math.floor(height / 12)} `}
          <Text style={styles.font18}>{'in'}</Text>
        </Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          persistentScrollbar={true}
          contentContainerStyle={styles.horizontalScrollContainer}>
          <Slider
            thumbImage={require('./assets/img/marker.png')}
            tapToSeek={true}
            onValueChange={v => setHeight(v)}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor={'white'}
            maximumTrackTintColor={'white'}
            step={1}
            value={height}
          />
          <View style={styles.markingContainer}>
            {Array(101)
              .fill()
              .map((_, i) => i)
              .map((value, index) => {
                if (
                  (index > 0 && index % 2 === 0 && index % 3 === 0) ||
                  index === 0
                ) {
                  return (
                    <Text
                      key={index.toString()}
                      style={styles.weighMarkerLarge}>
                      {'|'}
                    </Text>
                  );
                } else if (index > 0 && (index % 2 !== 0 || index % 3 !== 0)) {
                  return (
                    <Text
                      key={index.toString()}
                      style={styles.weighMarkerSmall}>
                      {'|'}
                    </Text>
                  );
                }
              })}
          </View>
          <View style={styles.weighGraduationContainer}>
            {Array(101)
              .fill()
              .map((_, i) => i)
              .map((value, index) => {
                if (
                  (index > 0 && index % 3 === 0 && index % 2 === 0) ||
                  index === 0
                ) {
                  return (
                    <Text
                      key={index.toString()}
                      style={[
                        styles.heightGraduationText,
                        // eslint-disable-next-line react-native/no-inline-styles
                        {
                          paddingRight:
                            index <= 10
                              ? 40
                              : index <= 40
                              ? 44
                              : index <= 60
                              ? 42
                              : index <= 70
                              ? 42
                              : index <= 90
                              ? 42
                              : 42,
                        },
                      ]}>
                      {displayHeightText(index)}
                    </Text>
                  );
                }
              })}
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overallContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  weightContainer: {
    width: 300,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'scroll',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginBottom: 32,
  },
  weighCaption: {fontWeight: 'bold', fontSize: 20, paddingBottom: 24},
  weightDisplayText: {fontWeight: 'bold', fontSize: 32},
  heightDisplayText: {fontWeight: 'bold', fontSize: 32, paddingBottom: 24},
  font24: {fontSize: 24},
  font18: {fontSize: 18},
  horizontalScrollContainer: {
    width: 970,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: -30,
  },
  markingContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    alignItems: 'baseline',
    position: 'absolute',
    top: 22,
    zIndex: -10, // to show the marker on Top of each graduation
  },
  weighMarkerLarge: {paddingRight: 3.3, fontSize: 32, color: 'grey'},
  weighMarkerSmall: {
    paddingRight: 3.3,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
  weighGraduationContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    alignItems: 'baseline',
    paddingTop: 24,
  },
  weighGraduationText: {color: 'grey', fontSize: 20},
  heightGraduationText: {color: 'grey', fontSize: 14},
});

export default App;
