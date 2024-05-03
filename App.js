import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch} from 'react-native';
import { TaskCard } from './components/task'

let data = [
  {
      ID: 1,
      text: "goodbro"
  },
  { 
      ID: 2,
      text: "nothing bro"
  },
  { 
      ID: 2,
      text: "nothing bro"
  },
  { 
      ID: 2,
      text: "nothing bro"
  }
  
]
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.title}>Today's Tasks</Text> 
          {
            data.map(() =>
            <View style={styles.items}>
                <TaskCard></TaskCard>
                <View style={styles.spacing}></View>
            </View>)
          }
      </View>
      <View style={styles.writtenTask}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWrapper:{
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
    height: 75,
    borderRadius: 10,
    margin: 10,
  },
  writtenTask:{
    
  }
});
