import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";
import Section from "../components/Section";

const SectionsExample = ({ route, navigation }) => {
  const isDarkMode = true;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darkTheme : Colors.lightTheme,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      {/*//   <StatusBar*/}
      {/*//     barStyle={isDarkMode ? "light-content" : "dark-content"}*/}
      {/*//     backgroundColor={backgroundStyle.backgroundColor}*/}
      {/*//   />*/}
      <View
        style={{
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        }}>
        <Section title="Step One" isDarkMode={isDarkMode}>
          Edit <Text style={styles.highlight}>App.js</Text> to change this
          screen and then come back to see your edits.
        </Section>
      </View>
    </SafeAreaView>
  );
};
export default SectionsExample;

const styles = StyleSheet.create({
  highlight: {
    fontWeight: "700",
  },
});
