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
            width: 1000,
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
            }}>
            <Text style={{paddingRight: 3.3, fontSize: 32}}>{'|'}</Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 32}}>{'|'}</Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 32}}>{'|'}</Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 32}}>{'|'}</Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 32}}>{'|'}</Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 20, fontWeight: 'bold'}}>
              {'|'}
            </Text>
            <Text style={{paddingRight: 3.3, fontSize: 32}}>{'|'}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginHorizontal: 30,
              alignItems: 'baseline',
              paddingTop: 24,
            }}>
            <Text style={{paddingRight: 30, fontSize: 20}}>{'0'}</Text>
            <Text style={{paddingRight: 28, fontSize: 20}}>{'5'}</Text>
            <Text style={{paddingRight: 28, fontSize: 20}}>{'10'}</Text>
            <Text style={{paddingRight: 24, fontSize: 20}}>{'15'}</Text>
            <Text style={{paddingRight: 24, fontSize: 20}}>{'20'}</Text>
            <Text style={{paddingRight: 24, fontSize: 20}}>{'25'}</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default App;
