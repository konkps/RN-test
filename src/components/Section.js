import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

const Section = ({ children, title, isDarkMode }): Node => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={[styles.sectionTitle, { color: isDarkMode ? Colors.white : Colors.black, }, ]}>
        {title}
      </Text>
      <Text style={[ styles.sectionDescription, {  color: isDarkMode ? Colors.lightTheme : Colors.darkTheme, }, ]}>
        {children}
      </Text>
    </View>
  );
};
export default Section;

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
    backgroundColor: Colors.primary500,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  }
});
