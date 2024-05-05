import { StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { CheckBox } from '@rneui/themed';
import data from '../assets/data/data.json';
const num = 1;

// Practise Passing Props & Props Drilling(passing functions)
export function TaskCard() {
    const [checked, setChecked] = React.useState(true);
    const toggleCheckBox = () => setChecked(!checked);
    return(
        <View style={styles.container}>
            <View style={styles.cardWrapper}>
               <View style={styles.content}> 
                <CheckBox
                    center
                    checked={checked}
                    onPress={toggleCheckBox}
                    iconType= "material-community"
                    checkedIcon= "checkbox-outline"
                    uncheckedIcon={'checkbox-blank-outline'}
                />
                </View>
                <View style={styles.textBox}>
                    <Text numberOfLines={3} ellipsizeMode="tail" style={styles.text}>{data[num].text}</Text>
                </View>
            </View>
            <Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    cardWrapper:{
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    content: {
    },
    textBox: {
        // backgroundColor: '#050505',
        width: 250,
    },
    text: {
        fontSize: 16,
    }
})
