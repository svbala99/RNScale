import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Slider from '@react-native-community/slider';

const App = () => {
  const [weight, setWeight] = React.useState(10);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          width: 300,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'scroll',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 20, paddingBottom: 24}}>
          {'How much do you weigh Mani?'}
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 32}}>
          {`${weight} `}
          <Text style={{fontSize: 24}}>{'kg'}</Text>
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={true}
          persistentScrollbar={true}
          contentContainerStyle={{
            width: 970,
            height: 100,
            flexDirection: 'column',
            justifyContent: 'center',
          }}>
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
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              alignItems: 'baseline',
              position: 'absolute',
              top: 22,
              zIndex: -10, // to show the marker on Top of each graduation
            }}>
            {Array(101)
              .fill()
              .map((_, i) => i)
              .map((value, index) => {
                if ((index > 0 && index % 5 === 0) || index === 0) {
                  return (
                    <Text
                      key={index.toString()}
                      style={{paddingRight: 3.3, fontSize: 32, color: 'grey'}}>
                      {'|'}
                    </Text>
                  );
                } else if (index > 0 && index % 5 !== 0) {
                  return (
                    <Text
                      key={index.toString()}
                      style={{
                        paddingRight: 3.3,
                        fontSize: 20,
                        fontWeight: 'bold',
                        color: 'grey',
                      }}>
                      {'|'}
                    </Text>
                  );
                }
              })}
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              alignItems: 'baseline',
              paddingTop: 24,
            }}>
            {Array(101)
              .fill()
              .map((_, i) => i)
              .map((value, index) => {
                if ((index > 0 && index % 5 === 0) || index === 0) {
                  return (
                    <Text
                      key={index.toString()}
                      style={{
                        color: 'grey',
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
                        fontSize: 20,
                      }}>
                      {index}
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
export default App;
