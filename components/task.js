import { StyleSheet, Text, View, Pressable} from 'react-native';
import { useState } from 'react';
import { CheckBox } from '@rneui/themed';

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


// Practise Passing Props & Props Drilling(passing functions)
export function TaskCard() {
    return(
        <View style={styles.container}>
            <Pressable style={styles.container1}>
                <CheckBox></CheckBox>
                <Text style={styles.content}>Task 1</Text>
            </Pressable>
            <Text></Text>
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
        width: 10,
        height: 10,
        backgroundColor: '#000000'
    }
})
