import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Button,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import { firebase } from "../config";

const Results = ({ route }) => {
  const navigation = useNavigation();
  const [recordingFileUris, setRecordingFileUris] = useState([]);

  useEffect(() => {
    if (route.params) {
      const { recordingFileUris } = route.params;
      if (recordingFileUris) {
        setRecordingFileUris(recordingFileUris);
      }
    }
  }, [route.params]);

  const uploadAllRecordings = async () => {
    try {
      for (let i = 0; i < recordingFileUris.length; i++) {
        const fileUri = recordingFileUris[i];
        const response = await fetch(fileUri);
        const blob = await response.blob();
        const ref = firebase
          .storage()
          .ref()
          .child(`recordings/recording_${i}.mp3`);
        await ref.put(blob);
        console.log("File uploaded to Firebase:", fileUri);
      }
      console.log("All recordings uploaded to Firebase");
    } catch (error) {
      console.error("Error uploading file to Firebase:", error);
    }
  };
  const handleUploadButtonPress = async () => {
    if (recordingFileUris.length > 0) {
      await uploadAllRecordings();
      console.log("All recordings uploaded to Firebase");
    } else {
      Alert.alert("All recordings uploaded to Firebase");
    }
  };

  const handleRecordNewVoiceButtonPress = () => {
    navigation.navigate("Home");
  };

  return (
    <SafeAreaView>
      <View style={{ marginTop: 30, marginLeft: 90 }}>
        <Pressable onPress={handleUploadButtonPress} style={styles.button}>
          <Text style={styles.buttonText}>Upload</Text>
        </Pressable>

        <Pressable
          onPress={handleRecordNewVoiceButtonPress}
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
