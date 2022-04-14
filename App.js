import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, 
  FlatList, // infinite list
  Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  
  // Inline function

  const goalInputHandler = (enteredGoal)=>{
      setEnteredGoal(enteredGoal)
  }

  const addGoalHandler = () =>{

      setCourseGoals(currentGoal => [...courseGoals, enteredGoal])//spread array  add new array to old array

  }
  
  return (
    // style --> js object 
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        {/* <StatusBar/> */}
        <TextInput placeholder="Course Goal" 
            style={styles.input}
            onChangeText={goalInputHandler}
            value={enteredGoal}
            />
        <Button title="ADD" onPress={addGoalHandler}/>
      </View>
      <ScrollView>
        
        {courseGoals.map((goal)=> 
          <View style={styles.listItem}>
            <Text key={goal}>
          
            {goal}
          
            </Text>
            </View>
          
          )}
        


    </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    screen:{
        padding:50
    },
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input:{
        width: '80%',
        borderBottomColor: 'black',
        borderWidth: .3,
        padding: 10
    },
    listItem:{
      padding:10,
      marginVertical:10,
      backgroundColor: '#ccc',
      borderColor: 'black',
      borderWidth: 1
      
    }
})