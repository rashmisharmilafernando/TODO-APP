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
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  //function of handle Add task 
  const handleAppTask = () => {
    if (task) {
      if (editIndex !== -1) {
        const updateTasks = [...tasks];
        updateTasks[editIndex] = task;
        setTasks(updateTasks);
        setEditIndex(-1);
      } else {
        setTasks([...tasks, task]);
      }
      setTask("");
    }
  };

  //function of handle Edit task 
  const handleEditTask = (index) => {
    const taskToEdit = tasks[index];
    setTask(taskToEdit);
    setEditIndex(index);
  };

  //Function of henadle delect task
  const handleDelectTask = (index) => {
    const updateTasks = [...tasks];
    updateTasks.splice(index, 1);
    setTasks(updateTasks);
  }

  const renderItem = ({ item, index }) => (
    <View style={styles.task}>

      {/* List of Task */}
      <Text style={styles.itemList}>
        {item}
      </Text>

      <View style={styles.taskButtons}>

        {/* Edit Button */}
        <TouchableOpacity
          onPress={() => handleEditTask(index)}>
          <Text style={styles.editButton}>Edit</Text>
        </TouchableOpacity>

        {/* Delect Button */}
        <TouchableOpacity
          onPress={() => handleDelectTask(index)}>
          <Text style={styles.deleteButton}>Delete</Text>
        </TouchableOpacity>

      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TaskTrackr</Text>
      {/* Input the Task */}
      <TextInput style={styles.input}
        placeholder="Enter task"
        value={task}
        onChangeText={(text) => setTask(text)}
      />

      {/* Add / Edit Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={handleAppTask}>
        <Text style={styles.addButtonText}>
          {editIndex !== -1 ? "Update Task" : "Add Task"}
        </Text>
      </TouchableOpacity>

      {/* Todo List */}
      <FlatList
        data={tasks}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

//Css Style Sheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    marginTop: 10,
    backgroundColor: "white"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "black"
  },
  input: {
    borderWidth: 3,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    fontSize: 18,
    color: 'black'
  },
  addButton: {
    backgroundColor: 'black',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,

  },
  addButtonText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    color: 'white'
  },
  task: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
    color: 'black'
  },
  itemList: {
    fontSize: 19,
    color: 'black'
  },
  taskButtons: {
    flexDirection: "row",
  },
  editButton: {
    marginRight: 10,
    color: 'green',
    fontWeight: "bold",
    fontSize: 18,
  },
  deleteButton: {
    color: "red",
    fontWeight: "bold",
    fontSize: 18,
  },


})
export default App;
