import React from "react";
import { Pressable, Text, View } from "react-native";

const GoalItem = ({ itemData, onDeleteItem }) => {
  const id = itemData.item.id;

  const handleOnPress = () => {
    onDeleteItem(id);
  };
  return (
    <Pressable onPress={handleOnPress}>
      <View>
        <Text
          style={{
            backgroundColor: "blue",
            marginBottom: 10,
            color: "white",
            padding: 2,
            borderRadius: 5,
          }}
        >
          {itemData.item.text}
        </Text>
      </View>
    </Pressable>
  );
};

export default GoalItem;
