import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Slider from '@react-native-community/slider';

const App = () => {
  const [value, setValue] = React.useState(40);
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View
        style={{
          width: 300,
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'scroll',
        }}>
        <ScrollView
          horizontal
          contentContainerStyle={{
            width: 1200,
            height: 200,
            overflow: 'scroll',
          }}>
          <Slider
            tapToSeek={true}
            onValueChange={v => setValue(v.toFixed(1))}
            style={{width: 1200, height: 40, overflow: 'scroll'}}
            minimumValue={0}
            maximumValue={100}
            step={0.5}
            value={40}
          />
        </ScrollView>
      </View>
      <Text>{value}</Text>
    </View>
  );
};
export default App;
