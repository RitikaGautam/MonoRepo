import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
} from 'react-native';
import _ from 'lodash';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const data = [
    {id: 1, name: 'John', age: 25},
    {id: 2, name: 'Jane', age: 22},
    {id: 3, name: 'Alice', age: 30},
    {id: 4, name: 'Bob', age: 22},
  ];
  const filteredData = _.filter(data, person => person.age > 22);
  const sortedData = _.sortBy(filteredData, 'age');

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <Text style={styles.header}>Filtered and Sorted List</Text>
      <FlatList
        data={sortedData}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => (
          <Text style={styles.item}>
            {item.name} - Age: {item.age}
          </Text>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  item: {
    fontSize: 16,
    marginVertical: 4,
  },
});

export default App;
