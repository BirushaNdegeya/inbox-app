import { View, Text } from 'react-native';


export default function Message () {
   return (
      <View style={{ 
         flex: 1,
         justifyContent: 'center',
         alignContent: 'center',
         alignItems: 'center'
      }}>
         <Text style={{ 
            fontSize: 24,
            color: '#fff'
         }}>Message Screen</Text>
      </View>
   );
}