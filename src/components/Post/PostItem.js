import { Pressable, StyleSheet, Text, View } from "react-native";

import Colors from "../../constants/colors";
import IconButton from "../UI/IconButton";
import { deletePost } from "../../util/database";
import { useNavigation } from "@react-navigation/native";

function PostItem({ post, onSelect }) {
  const navigation = useNavigation();

  const updateHandler = () => {
    navigation.navigate("CreatePost", { id: post.id });
  };
  return (
    // <Pressable
    //   onPress={onSelect.bind(this, post.id)}
    //   style={({ pressed }) => [styles.item, pressed && styles.pressed]}
    // >
    <View style={styles.item}>
      <View style={styles.info}>
        <Text style={styles.author}>{post.user}</Text>
        <Text style={styles.time}>{new Date(post.timestamp).toDateString()}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{post.text}</Text>
        <IconButton type={"Ionicons"} icon="create-outline" color={"white"} size={20}
                    onPress={updateHandler} />
      </View>
    </View>
    // </Pressable>
  );
}

export default PostItem;

const styles = StyleSheet.create({
  item: {
    flexDirection: "column",
    borderRadius: 6,
    marginVertical: 12,
    backgroundColor: Colors.primary800,
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
  },
  pressed: {
    opacity: 0.9,
  },
  info: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    // width:300
  },
  author: {
    fontWeight: "bold",
    fontSize: 12,
    color: Colors.white,
  },
  time: {
    // fontWeight: 'bold',
    fontSize: 12,
    color: Colors.white,
  },
  textContainer: {
    flex: 1,
    padding: 8,
    flexDirection: "row",
    paddingHorizontal: 16,
    backgroundColor: Colors.primary600,
    borderBottomEndRadius: 8,
    minHeight: 50,
  },
  text: {
    flex: 1,
    color: Colors.white,
    fontSize: 18,
  },
  address: {
    fontSize: 12,
    color: Colors.gray700,
  },
});
