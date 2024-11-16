import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
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
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: enteredgoalText, id: Math.random.toString() },
    ]);
    //setEnteredGoalText("");
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
        <FlatList
          data={goals}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <Text
              style={{
                backgroundColor: "blue",
                marginBottom: 10,
                color: "white",
              }}
            >
              {itemData.item.text}
            </Text>
          )}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
