import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { TaskCard } from './components/task'
import data from './assets/data/data.json'

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([])
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.title}>Today's Tasks</Text> 
          {
            data.map((items) =>
            <View style={styles.items}>
                <TaskCard></TaskCard>
                <View style={styles.spacing}></View>
                <View></View>
            </View>)
          }
      </View>
      <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.writeTaskWrapper}
      >
        <TextInput
        style={styles.input}
        placeholder='Write a Task'
        />
        <TouchableOpacity>
          <View style={styles.addWrapper}>
            <Text>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  writeTaskWrapper:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 350,
  },
  addWrapper:{
    backgroundColor: '#FFFFFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  input:{
    width: 246,
    height: 45,
    borderRadius: 23,
    backgroundColor: '#FFFFFF',
    textAlign: 'center',
    marginLeft: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
  taskWrapper:{
    flex: 1, 
    paddingTop: 94,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 12,
  },
  items: {
    backgroundColor: '#FFFFFF',
    width: 345,
    height: 65,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,  
    elevation: 5
  },
});
