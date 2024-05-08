import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Pressable,
  Button,
} from "react-native";
import varnamala from "../Data/varnmalas";
import { useNavigation } from "@react-navigation/native";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system";

const Flashcard = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [recording, setRecording] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [recordings, setRecordings] = useState([]);
  const navigation = useNavigation();
  const data = varnamala;
  const currentVarn = data[currentIndex];
  const soundObject = useRef(new Audio.Sound());

  const allRecordings = [];

  const startRecording = async () => {
    console.log("Start recording...");
    const { recording } = await Audio.Recording.createAsync(
      Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
    );
    setRecording(recording);
    setIsButtonDisabled(true);
  };

  const stopRecording = async () => {
    console.log("Stop recording...");
    await recording.stopAndUnloadAsync();
    const uri = recording.getURI();
    console.log("Recording stopped and stored at", uri);
    setRecording(null);
    saveRecordingToFile(uri);
  };

  const saveRecordingToFile = async (uri) => {
    const filename = `recording_${currentVarn}.mp3`;
    const fileUri = FileSystem.documentDirectory + filename;
    await FileSystem.moveAsync({ from: uri, to: fileUri });
    console.log("Recording saved to file:", fileUri);
    setRecordings([fileUri]);
  };
  const navigateToNextVarn = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
    setRecordings([]);
  };

  const playRecording = async (uri) => {
    try {
      await soundObject.current.unloadAsync();
      await soundObject.current.loadAsync({ uri });
      await soundObject.current.playAsync();
      setIsButtonDisabled(true);
      soundObject.current.setOnPlaybackStatusUpdate((playbackStatus) => {
        if (playbackStatus.didJustFinish) {
          setIsButtonDisabled(false);
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.varn}>{currentVarn}</Text>
        <Pressable
          onPress={
            currentIndex + 1 >= varnamala.length
              ? () => navigation.navigate("Results")
              : navigateToNextVarn
          }
          style={styles.button}
          disabled={isButtonDisabled}
        >
          <Text style={styles.buttonText}>
            {currentIndex + 1 >= varnamala.length ? "Done" : "Next Varn"}
          </Text>
        </Pressable>
      </View>
      <View style={styles.container}>
        <Pressable
          style={[
            styles.button,
            { backgroundColor: recording ? "red" : "#00b4d8" },
          ]}
          onPress={recording ? stopRecording : startRecording}
        >
          <Text style={styles.buttonText}>
            {recording ? "Stop Recording" : "Start Recording"}
          </Text>
        </Pressable>
        {recordings.map((recording, index) => (
          <Pressable
            key={index}
            style={[styles.button, { backgroundColor: "#00b4d8" }]}
            onPress={() => playRecording(recording)}
          >
            <Text style={styles.buttonText}>Play Recording</Text>
          </Pressable>
        ))}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    marginTop: 30,
    flex: 0.5,
    backgroundColor: "#F0F8FF",
    padding: 20,
    borderRadius: 12,
    alignItems: "center",
    marginBottom: 20,
    width: "90%",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 100,
  },
  varn: {
    fontSize: 200,
    fontWeight: "bold",
    textAlign: "center",
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

export default Flashcard;
