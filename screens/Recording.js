import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Recording = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Details")}
      >
        <Text
          style={{
            fontSize: 30,
            fontWeight: 700,
            color: "white",
          }}
        >
          Start Process
        </Text>
      </Pressable>
    </View>
  );
};

export default Recording;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    height: 200,
    backgroundColor: "green",
    borderRadius: 100,
  },
});
