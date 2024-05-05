import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, KeyboardAvoidingView, Platform, TextInput, TouchableOpacity} from 'react-native';
import { TaskCard } from './components/task'
import data from './assets/data/data.json'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.title}>Today's Tasks</Text> 
          {
            data.map((items) =>
            <View style={styles.items}>
                <TaskCard></TaskCard>
                <View style={styles.spacing}></View>
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

  },
  input:{

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
    width: 335,
    height: 65,
    borderRadius: 10,
    margin: 10,
  },
  writtenTask:{

  }
});
