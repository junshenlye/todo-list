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
        <View>
            <Text>Something</Text>
            <Text>I slacked today, i do this tmr </Text>
            <Text>Let the tech Debt stacks X 2</Text>
            <FlatList>
                <Text>Item 1</Text>
            </FlatList>
        </View>
    );
};

