import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";



const App = () => {
  const [task,setTask]=useState("");
  const [taskes,setTasks]=useState([]);
  const[editIndex,setEditIndex]=useState(-1);
  
  //function of handle Add task 
  const handleAppTask=()=>{
    if(task){
      if(editIndex !==-1){
        const updateTasks=[...tasks];
        updateTasks[editIndex]=task;
        setTasks(updateTasks);
        setEditIndex(-1);
      }else{
        setTasks([...taskes,task]);
      }
      setTask(""); 
    }
  };

  //function of handle Edit task 
  const handleEditTask=(index)=>{
    const taskToEdit=tasks[index];
    setTask(taskToEdit);
    setEditIndex(index);
  };

  //Function of henadle delect task

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskTrackr</Text>
      <TextInput style={styles.input}>
        placeholder="Enter task"
        value={task}
        onChangeText={(text)=>setTask(text)}
      </TextInput>
    </View>
  );
};
const styles=StyleSheet.create({
  container:{
    flex:1,
    padding:25,
    marginTop:10,
    backgroundColor:"white"
  },
  title:{
    fontSize:24,
    fontWeight:"bold",
    marginBottom:20,
    color:"black"
  },
  input:{
    borderWidth: 3, 
        borderColor: "black", 
        padding: 10, 
        marginBottom: 10, 
        borderRadius: 10, 
        fontSize: 18, 
  }
 

})
export default App;
