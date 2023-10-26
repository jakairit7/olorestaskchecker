import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task) {
      setTasks([...tasks, { text: task, completed: false }]);
      setTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text>Task Checker</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder="Add a task"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Add Task" onPress={addTask} />
      {tasks.map((task, index) => (
        <View style={styles.task} key={index}>
          <CheckBox
            checked={task.completed}
            onPress={() => toggleTask(index)}
          />
          <Text
            style={{
              textDecorationLine: task.completed ? 'line-through' : 'none',
            }}
          >
            {task.text}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  header: {
    marginBottom: 20,
  },
  input: {
    width: 250,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  task: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 250,
    marginVertical: 5,
  },
});
