import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function App() {
  const [enteredgoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  const handleChange = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const handleClick = () => {
    setGoals((prevGoals) => [...prevGoals, enteredgoalText]);
    setEnteredGoalText("");
  };
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Type your goal !"
          style={{ borderColor: "#cccccc", borderWidth: 1, width: "75%" }}
          value={enteredgoalText}
          onChangeText={handleChange}
        />

        <Button title="Add goal" onPress={handleClick} />
      </View>
      <View style={styles.goalsContainer}>
        <ScrollView>
          {goals.map((goal) => (
            <Text
              key={goal}
              style={{
                backgroundColor: "blue",
                marginBottom: 10,
                color: "white",
              }}
            >
              {goal}
            </Text>
          ))}
        </ScrollView>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  inputContainer: {
    flexDirection: "row",
    gap: 3,
    marginBottom: 25,
  },
  goalsContainer: {
    flex: 1,
    borderColor: "black",
    borderWidth: 1,
  },
});
