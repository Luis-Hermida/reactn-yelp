import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";
import yelp from "../api/yelp";

const ResultsShowScreen = ({ navigation }: { navigation: any }) => {
  const [result, setResult]: any | null = useState(null);
  const id = navigation.getParam("id");

  console.log(result);

  useEffect(() => {
    getResult(id);
  }, []);

  const getResult = async (id: string) => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  if (result !== null) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{result.name}!</Text>
        <Text style={styles.info}>Phone: {result.phone}</Text>
        <Text style={styles.info}>Address: {result.location.address1}</Text>
        {result.is_closed ? (
          <Text style={styles.closed}>Closed</Text>
        ) : (
          <Text style={styles.open}>Open</Text>
        )}

        <FlatList
          data={result.photos}
          showsVerticalScrollIndicator={false}
          keyExtractor={(photo) => photo}
          renderItem={({ item }) => {
            return <Image style={styles.image} source={{ uri: item }} />;
          }}
        />
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },
  title: {
    fontSize: 18,
    marginBottom: 15,
    marginTop: 10,
    fontWeight: "bold",
  },
  info: {
    marginBottom: 5,
  },
  open: {
    color: "green",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  closed: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    height: 200,
    width: 300,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default ResultsShowScreen;
