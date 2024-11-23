import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ onAddGoal, visible, onCancel }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  const handleChange = (enteredText) => {
    setEnteredGoalText(enteredText);
  };
  const handleAddGoal = () => {
    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          source={require("../assets/images/goal.png")}
          style={{ width: 100, height: 100, margin: 20 }}
        />
        <TextInput
          placeholder="Type your goal here !"
          style={{
            width: "95%",
            backgroundColor: "white",
            borderRadius: 3,
          }}
          value={enteredGoalText}
          onChangeText={handleChange}
        />

        <View
          style={{
            flexDirection: "row",
            gap: 10,
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Button title="Add goal" onPress={handleAddGoal} />
          <Button title="Cancel" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#311b6b",
    flex: 1,
    alignItems: "center",
  },
});
