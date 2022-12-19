import { Text, Button, View } from "react-native";

const HomeScreen = ({ route,navigation }) => {
  console.log("H:", navigation.getState().routes.map(route => route.name));

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "space-around" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details", {
          itemId: 86,
          otherParam: "anything you want here",
        })}
      />
      {/*<Button*/}
      {/*  title="Go to Posts"*/}
      {/*  onPress={() => navigation.navigate("Posts")}*/}
      {/*/>*/}
    </View>
  );
};
export default HomeScreen;
