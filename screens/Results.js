import { StyleSheet, Text, View, SafeAreaView, Pressable } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Results = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={{ marginTop: 30, marginLeft: 90 }}>
        <Pressable onPress={() => setIndex(index + 1)} style={styles.button}>
          <Text style={styles.buttonText}>Upload</Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.navigate("Home")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Record New Voice</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Results;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: 10,
    borderRadius: 6,
    paddingHorizontal: 20,
    marginTop: 30,

    backgroundColor: "green",
    padding: 20,
    width: "70%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
});
