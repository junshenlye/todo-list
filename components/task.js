import { StyleSheet, Text, View} from 'react-native';
import React from 'react';
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
    const [checked, setChecked] = React.useState(true);
    const toggleCheckBox = () => setChecked(!checked);
    const paddingValue = 10;
    return(
        <View style={styles.container}>
            <View style={styles.container1}>
                <CheckBox
                    center
                    checked={checked}
                    onPress={toggleCheckBox}
                    iconType= "material-community"
                    checkedIcon= "checkbox-outline"
                    uncheckedIcon={'checkbox-blank-outline'}
                />
                <Text style={[styles.content, { padding: paddingValue}]}>Task 1</Text>
            </View>
            <Text></Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container1:{
        flex: 1,
        flexDirection: 'row',
        
    },
    content: {

    },
    button:{
        width: 20,
        height: 10,
        backgroundColor: '#000000'
    }
})
