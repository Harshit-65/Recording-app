import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const Details = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [Lastname, setLastname] = useState("");
  const [PatientId, setpatientId] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState("");
  const [hyperfunktionelleChecked, setHyperfunktionelleChecked] =
    useState(false);
  const [dysphonieChecked, setDysphonieChecked] = useState(false);
  const [heartConditionChecked, setHeartConditionChecked] = useState(false);
  const [kidneyProblemChecked, setKidneyProblemChecked] = useState(false);
  const [bloodPressureHigh, setBloodPressureHigh] = useState(false);
  const [bloodPressureLow, setBloodPressureLow] = useState(false);
  const [bloodPressureNormal, setBloodPressureNormal] = useState(false);
  const [diabetesHigh, setDiabetesHigh] = useState(false);
  const [diabetesLow, setDiabetesLow] = useState(false);
  const [diabetesNormal, setDiabetesNormal] = useState(false);

  const resetForm = () => {
    setName("");
    setLastname("");
    setpatientId("");
    setWeight("");
    setAge("");
    setHeight("");
    setGender("");
    setBloodPressureHigh(false);
    setBloodPressureLow(false);
    setBloodPressureNormal(false);
    setDiabetesHigh(false);
    setDiabetesLow(false);
    setDiabetesNormal(false);
    setHeartConditionChecked(false);
    setHyperfunktionelleChecked(false);
    setKidneyProblemChecked(false);
    setDysphonieChecked(false);
  };

  const handleSubmit = () => {
    if (
      !name ||
      !Lastname ||
      !PatientId ||
      !weight ||
      !age ||
      !height ||
      !gender
    ) {
      alert("Please fill in all mandatory fields");
      return;
    } else {
      resetForm();
      navigation.navigate("flashcard");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Patient's Detail</Text>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.formContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter First Name"
            onChangeText={(e) => setName(e)}
            value={name}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Last Name"
            onChangeText={(e) => setLastname(e)}
            value={Lastname}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Patient ID"
            // secureTextEntry={true}
            onChangeText={(e) => setpatientId(e)}
            value={PatientId}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Weight in kgs"
            onChangeText={(e) => setWeight(e)}
            value={weight}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Age in years"
            onChangeText={(e) => setAge(e)}
            value={age}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Enter Height in cm"
            onChangeText={(e) => setHeight(e)}
            value={height}
            keyboardType="numeric"
          />
          <View style={styles.genderContainer}>
            <Text
              style={[
                styles.genderButtonText,
                { fontWeight: "500", fontSize: 20 },
              ]}
            >
              Gender :
            </Text>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === 1 && styles.genderButtonSelected,
              ]}
              onPress={() => setGender(1)}
            >
              <Text style={styles.genderButtonText}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.genderButton,
                gender === 2 && styles.genderButtonSelected,
              ]}
              onPress={() => setGender(2)}
            >
              <Text style={styles.genderButtonText}>Female</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.checkboxContainer}>
          <Text style={styles.subHeading}>ENT-DISEASES</Text>
          <CheckBox
            title="Hyperfunktionelle"
            checked={hyperfunktionelleChecked}
            onPress={() =>
              setHyperfunktionelleChecked(!hyperfunktionelleChecked)
            }
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
          />
          <CheckBox
            title="Dysphonie"
            checked={dysphonieChecked}
            onPress={() => setDysphonieChecked(!dysphonieChecked)}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
          />
        </View>

        <View style={styles.knownConditionsContainer}>
          <Text style={[styles.subHeading, { fontWeight: "500" }]}>
            Known Conditions
          </Text>
          <View style={styles.conditionsRow}>
            <Text style={styles.conditionsText}>Conditions</Text>
            <Text style={styles.conditionsText}>High</Text>
            <Text style={styles.conditionsText}>Low</Text>
            <Text style={styles.conditionsText}>Normal</Text>
          </View>
          <View style={styles.conditionsRow}>
            <Text
              style={[styles.conditionsText, { width: 70, fontWeight: "400" }]}
            >
              Blood {"\n"}Pressure
            </Text>
            <CheckBox
              checked={bloodPressureHigh}
              onPress={() => {
                setBloodPressureHigh(true);
                setBloodPressureLow(false);
                setBloodPressureNormal(false);
              }}
            />
            <CheckBox
              checked={bloodPressureLow}
              onPress={() => {
                setBloodPressureHigh(false);
                setBloodPressureLow(true);
                setBloodPressureNormal(false);
              }}
            />
            <CheckBox
              checked={bloodPressureNormal}
              onPress={() => {
                setBloodPressureHigh(false);
                setBloodPressureLow(false);
                setBloodPressureNormal(true);
              }}
            />
          </View>
          <View style={styles.conditionsRow}>
            <Text style={[styles.conditionsText, { fontWeight: "400" }]}>
              Diabetes
            </Text>
            <CheckBox
              checked={diabetesHigh}
              onPress={() => {
                setDiabetesHigh(true);
                setDiabetesLow(false);
                setDiabetesNormal(false);
              }}
            />
            <CheckBox
              checked={diabetesLow}
              onPress={() => {
                setDiabetesHigh(false);
                setDiabetesLow(true);
                setDiabetesNormal(false);
              }}
            />
            <CheckBox
              checked={diabetesNormal}
              onPress={() => {
                setDiabetesHigh(false);
                setDiabetesLow(false);
                setDiabetesNormal(true);
              }}
            />
          </View>
        </View>

        <View style={styles.checkboxContainer}>
          <CheckBox
            title="Heart Conditions"
            checked={heartConditionChecked}
            onPress={() => setHeartConditionChecked(!heartConditionChecked)}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
          />
          <CheckBox
            title="Kidney Problems"
            checked={kidneyProblemChecked}
            onPress={() => setKidneyProblemChecked(!kidneyProblemChecked)}
            containerStyle={styles.checkbox}
            textStyle={styles.checkboxText}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Reset Form" onPress={resetForm} />
          <Button onPress={handleSubmit} title="Submit" color={"green"} />
        </View>
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#f5f5f5",
  },
  heading: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 10,
    backgroundColor: "#f2f2f2",
    marginBottom: 20,
  },
  contentContainer: {
    flexGrow: 1,
  },
  formContainer: {
    // width: "80%",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  input: {
    width: "100%",
    fontSize: 18,
    color: "black",
    borderWidth: 2,
    borderColor: "green",
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  genderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    alignItems: "center",
  },
  genderButton: {
    backgroundColor: "#EAEAEA",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  genderButtonSelected: {
    backgroundColor: "#007AFF",
  },
  genderButtonText: {
    fontSize: 18,
    color: "black",
  },
  checkboxContainer: {
    // width: "80%",
    marginVertical: 20,
  },
  subHeading: {
    fontSize: 20,
    marginBottom: 10,
  },
  checkbox: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
  checkboxText: {
    fontSize: 16,
    color: "black",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    // width: "80%",
    marginTop: 20,
  },
  knownConditionsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  conditionsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  conditionsText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
