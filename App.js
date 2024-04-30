import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch} from 'react-native';
import {TaskCard} from './components/task'
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <Text style={styles.title}>Today's Tasks</Text> 
        <View style={styles.items}>
          <TaskCard></TaskCard>
        </View>
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
  },
  items: {
    backgroundColor: '#FFFFFF',
    width: 335,
    height: 75,
    borderRadius: 10,
  },
  
});
