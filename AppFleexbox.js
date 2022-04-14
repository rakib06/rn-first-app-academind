/*
App: Playing with box flex
*/



import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  // const [outputText, setOutputText] = useState('Welcome to React Native')
  return (
    // style --> js object 
    <View style={{padding:50,
       flexDirection: 'row', 
    width: "100%", height:300, 
    justifyContent: "space-between",
    alignItems: 'center'
    }}>
      <View 
        style={{
            backgroundColor: 'red',
            alignItems: 'center', 
            // height: 100,
            // width: 100,
            //borderRadius:100,
            flex:1,
            justifyContent: 'center',
            alignItems: 'center'
            
            }}>
                <Text>1</Text>
      </View>

      <View 
        style={{
            backgroundColor: 'green',
            alignItems: 'center', 
            // height: 100,
            // width: 100,
            //borderRadius:50,
            flex:5,
            justifyContent: 'center',
            alignItems: 'center'
            
            }}>
                <Text>2</Text>
      </View>

      <View 
        style={{
            backgroundColor: 'blue',
            alignItems: 'center', 
            // height: 100,
            // width: 100,
            // borderRadius:40,
            justifyContent: 'center',
            alignItems: 'center'
            
            }}>
                <Text>3</Text>
      </View>


    </View>
  );
}

