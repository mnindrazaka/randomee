import {
  Button,
  Input,
  NativeBaseProvider,
  ScrollView,
  Stack,
  Text,
} from 'native-base';
import React from 'react';
import {Alert} from 'react-native';

const App = () => {
  const [inputValue, setInputValue] = React.useState('');

  const [items, setItems] = React.useState<string[]>([]);

  const addItem = () => {
    setItems(prevItems => [...prevItems, inputValue]);
    setInputValue('');
  };

  const pickItem = () => {
    const pickedIndex = Math.floor(Math.random() * items.length);
    const pickedItem = items[pickedIndex];
    Alert.alert(`You pick ${pickedItem}`);
    setItems(prevItems =>
      prevItems.filter((_, index) => index !== pickedIndex),
    );
  };

  return (
    <NativeBaseProvider>
      <Stack direction="column" padding="5" space="lg">
        <Stack direction="column" space="md">
          <Input
            placeholder="Input your item"
            value={inputValue}
            onChangeText={setInputValue}
          />
          <Button onPress={addItem} disabled={inputValue === ''}>
            Submit
          </Button>
        </Stack>
        <ScrollView>
          <Stack direction="column" space="md">
            {items.map((item, index) => (
              <Text key={index}>{item}</Text>
            ))}
          </Stack>
        </ScrollView>
        <Button onPress={pickItem} disabled={items.length === 0}>
          Pick
        </Button>
      </Stack>
    </NativeBaseProvider>
  );
};

export default App;
