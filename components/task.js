import { StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { CheckBox } from '@rneui/themed';
const num = 1;
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
    const [checked, setChecked] = React.useState(true);
    const toggleCheckBox = () => setChecked(!checked);
    const paddingValue = 10;
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
                    <Text>{data[num].text}</Text>
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
    },
    content: {
        flex: 1,
        flexDirection: 'row',
        alignItems: '',
    },
    textBox: {
        padding: 20
    }
})
