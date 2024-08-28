import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, FlatList, View } from 'react-native';

export default function App() {

  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const handle = e => {
    switch (e) {
      case 'ADD':
        setList([...list, {key: text}]);
      break;

      case 'CLEAR':
        setList([]);
      break;
    }

    setText('')
  }
  return (
    <View style={styles.container}>
        <TextInput
          keyboardType='default'
          style={styles.input}
          onChangeText={text => setText(text)}
          value={text}
          />
        <View style={styles.buttons}>
          <Button title="ADD" onPress={() => handle('ADD')}/>
          <Button title="CLEAR" onPress={() => handle('CLEAR')}/>
        </View>
        <View style={styles.list}>
          <Text style= {styles.header}>Shopping List</Text>
          <FlatList
            data={list}
            renderItem={({item}) => <Text>{item.key}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    paddingTop: 20,
    paddingBottom: 50,
    alignItems: 'center',
    flexDirection: 'row',
  },
  list: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 200, 
    borderColor: 'gray', 
    borderWidth: 1,
  },
  header: {
    color: 'blue',
    fontSize: 16,
  }
});
