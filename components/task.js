import { StyleSheet, Text, View, FlatList} from 'react-native';

const i = 10;
let data = [
    {
        ID: 1,
        text: "goodbro"
    },
    { 
        ID: 2,
        text: "nothing bro"
    }
]
export function TaskCard() {
    return(
        <View style={styles.container}>
            <Text style={styles.content}>Task 1</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        padding: 10,
    }, 
})
