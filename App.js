// library imports
import React, {useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

/**
 * @function App
 * @returns {JSX}
 * @description the main App component
 */
const App = () => {
  // state variables
  const [weight, setWeight] = React.useState(1500);
  const [height, setHeight] = React.useState(650);

  const scrollViewRef1 = useRef();
  const scrollViewRef2 = useRef();

  // calculate weight
  let displayWeightText = weight > 0 ? Math.floor(weight / 8.9) : 0;
  displayWeightText /= 10;

  // calculate height
  let displayInchText = height > 0 ? Math.floor(height / 9) : 0;
  let displayFeetText = 0;
  if (displayInchText > 11) {
    displayFeetText = Math.floor(displayInchText / 12);
    displayInchText = displayInchText - 12 * Math.floor(displayInchText / 12);
  }

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
          {`${displayWeightText} `}
          <Text style={styles.font24}>{'kg'}</Text>
        </Text>
        <Image style={{top: 16}} source={require('./assets/img/marker.png')} />
        <ScrollView
          ref={scrollViewRef1}
          onContentSizeChange={() =>
            scrollViewRef1.current.scrollTo({
              x: 1500,
              animated: true,
            })
          }
          scrollEventThrottle={200}
          onScroll={event =>
            setWeight(Math.floor(Number(event.nativeEvent.contentOffset.x)))
          }
          horizontal
          showsHorizontalScrollIndicator={true}
          persistentScrollbar={true}
          contentContainerStyle={styles.weightScrollContainer}>
          <View style={styles.markingContainerWeight}>
            {Array(1000)
              .fill()
              .map((_, i) => i)
              .map((value, index) => {
                if ((index > 0 && index % 10 === 0) || index === 0) {
                  return (
                    <Text
                      key={index.toString()}
                      style={styles.weighMarkerLarge}>
                      {'|'}
                    </Text>
                  );
                } else if (index > 0 && index % 10 !== 0) {
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
            {Array(1000)
              .fill()
              .map((_, i) => i)
              .map((value, index) => {
                if ((index > 0 && index % 5 === 0) || index === 0) {
                  return (
                    <Text
                      key={index.toString()}
                      style={[
                        styles.heightGraduationText,
                        // eslint-disable-next-line react-native/no-inline-styles
                        {
                          paddingRight:
                            index / 10 < 10 ? 40 : index / 10 === 11 ? 36 : 36,
                        },
                      ]}>
                      {index % 10 === 0 ? index / 10 : ''}
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
          {`${displayFeetText} `}
          <Text style={styles.font18}>{'ft'}</Text>
          {` ${displayInchText} `}
          <Text style={styles.font18}>{'in'}</Text>
        </Text>
        <Image source={require('./assets/img/marker.png')} />
        <ScrollView
          ref={scrollViewRef2}
          onContentSizeChange={() =>
            scrollViewRef2.current.scrollTo({
              x: 650,
              animated: true,
            })
          }
          scrollEventThrottle={200}
          onScroll={event =>
            setHeight(Math.floor(Number(event.nativeEvent.contentOffset.x)))
          }
          horizontal
          showsHorizontalScrollIndicator={true}
          persistentScrollbar={true}
          contentContainerStyle={styles.heightScrollContainer}>
          <View style={styles.markingContainer}>
            {Array(201)
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
                      style={styles.heightMarkerLarge}>
                      {'|'}
                    </Text>
                  );
                } else if (index > 0 && (index % 2 !== 0 || index % 3 !== 0)) {
                  return (
                    <Text
                      key={index.toString()}
                      style={styles.heightMarkerSmall}>
                      {'|'}
                    </Text>
                  );
                }
              })}
          </View>
          <View style={styles.heightGraduationContainer}>
            {Array(201)
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
                              ? 50
                              : index <= 90
                              ? 42
                              : 44,
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
    width: Dimensions.get('screen').width,
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
  weightScrollContainer: {
    width: Dimensions.get('screen').width * 20,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    bottom: 32,
  },
  heightScrollContainer: {
    width: Dimensions.get('screen').width * 5,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'center',
    bottom: 32,
  },
  markingContainerWeight: {
    flexDirection: 'row',
    marginHorizontal: 30,
    alignItems: 'baseline',
    paddingTop: 48,
    left: Dimensions.get('window').width / 2 - 49,
  },
  markingContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    alignItems: 'baseline',
    justifyContent: 'center',
    top: 22,
    left: Dimensions.get('window').width / 2 - 82,
  },
  weighMarkerLarge: {paddingRight: 3.25, fontSize: 32, color: 'grey'},
  weighMarkerSmall: {
    paddingRight: 3.25,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
  heightMarkerLarge: {paddingRight: 3.4, fontSize: 32, color: 'grey'},
  heightMarkerSmall: {
    paddingRight: 3.4,
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey',
  },
  weighGraduationContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    alignItems: 'baseline',
    paddingTop: 8,
    left: Dimensions.get('window').width / 2 - 48,
  },
  heightGraduationContainer: {
    flexDirection: 'row',
    marginHorizontal: 30,
    alignItems: 'baseline',
    paddingTop: 48,
    left: Dimensions.get('window').width / 2 - 56,
  },
  weighGraduationText: {color: 'grey', fontSize: 20},
  heightGraduationText: {color: 'grey', fontSize: 14},
});

export default App;
