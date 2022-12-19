import { Button, Text, View } from "react-native";
import { useEffect, useState } from "react";

const DetailsScreen = ({ route, navigation }) => {

  const { itemId, otherParam } = route.params;

  const [count, setCount] = useState(0);

  useEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <Button onPress={() => setCount((c) => c + 1)} title="Update count"  color="#8be"/>
      ),
    });
    console.log("D:", navigation.getState().routes.map(route => route.name));

  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}>
      <Text>Details Screen</Text>
      <View>
        <Text>Count: {count}</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      </View>
      <Button
        title="Go to Details... again"
        onPress={() =>
          navigation.push("Details", {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button
        title="Navigate to Details"
        onPress={() => navigation.navigate("Details", {
          itemId: Math.floor(Math.random() * 100),
        })}
      />

      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
};
export default DetailsScreen;
