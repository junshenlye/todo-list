import { StyleSheet, Text, View, Pressable, Button} from 'react-native';

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
            <Pressable style={styles.container1}>
                <Button style={styles.button} title=''></Button>
                <Text style={styles.content}>Task 1</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1:{
        // backgroundColor: '#000000',
        flex: 1,
        flexDirection: 'row',
    },
    content: {
        padding: 10,
    },
    button:{
        
    }
})
