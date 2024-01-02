import React, { useState } from 'react';
import { FlatList, Text, View, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import CustomButton from '../components/CustomButton';

export default function AxiosGetRequest() {
  const BASE_URL = 'https://jsonplaceholder.typicode.com/posts';

  const [data, setData] = useState([]);

  const getApi = () => {
    axios({
      method: 'GET',
      url: `${BASE_URL}`,
    })
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>APIs</Text>

      <CustomButton title="GET" Press={getApi} />

      <FlatList
        data={data}
        ListEmptyComponent={() => (
          <Text style={styles.noDataText}>No Data</Text>
        )}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.card,
              { backgroundColor: index % 2 === 0 ? '#6ceb8e' : '#FFFFFF' },
            ]}>
            <Text style={styles.cardText}>Id: {item.id}</Text>
            <Text style={styles.cardText} numberOfLines={1}>
              Title: {item.title}
            </Text>
            <Text style={styles.cardText} numberOfLines={1}>
              Body: {item.body}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F0F0', // Set the background color of the app
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000000',
    marginBottom: 10,
  },
  card: {
    borderRadius: 10,
    padding: 15,
    margin: 10,
    elevation: 5,
  },
  cardText: {
    fontSize: 18,
    color: 'black',
    marginBottom: 8,
  },
  noDataText: {
    fontSize: 40,
    color: '#000000',
    textAlign: 'center',
  },
});
