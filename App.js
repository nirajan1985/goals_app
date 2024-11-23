import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClick = (enteredGoalText) => {
    if (enteredGoalText === "") return alert("Enter goal text first");
    setGoals((prevGoals) => [
      ...prevGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    setIsModalVisible(false);
  };
  //console.log("goals", goals);
  const handleDeleteItem = (id) => {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  };
  const startAddGoalHandler = () => {
    setIsModalVisible(true);
  };
  const handleCloseModal = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button
          title="Add new goal"
          onPress={startAddGoalHandler}
          color="green"
        />
        <GoalInput
          onAddGoal={handleClick}
          visible={isModalVisible}
          onCancel={handleCloseModal}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => (
              <GoalItem itemData={itemData} onDeleteItem={handleDeleteItem} />
            )}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },

  goalsContainer: {
    //flex: 1,
    //borderColor: "black",
    //borderWidth: 1,
    marginTop: 10,
    height: "90%",
  },
});
