import { TextInput, Button } from "react-native";
import { useEffect, useState } from "react";
import { deletePost, fetchPost, insertPost, updatePost } from "../util/database";
import { Post } from "../models/post";

const PostFormScreen = ({ navigation, route }) => {

  const { id } = route.params;

  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    if (id) {
      fetchPost(id).then(post => {
        setAuthor(post.user);
        setText(post.text);
      });
    }
  }, [id]);

  const savePostHandler = async () => {
    const post = new Post(author, text, null, id);
    if (id)
      await updatePost(post);
    else
      await insertPost(post);
    // Pass and merge params back to home screen
    navigation.navigate({
      name: "Posts",
      // params: { post: {author,text} },
      merge: true,
    });
  };
  const deletePostHandler = async () => {
    await deletePost(id);
    navigation.navigate("Posts");
  };
  return (
    <>
      <TextInput
        multiline
        placeholder="author"
        style={{ height: 50, margin: 10, padding: 10, backgroundColor: "white" }}
        value={author}
        onChangeText={setAuthor}
      />
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, margin: 10, padding: 10, backgroundColor: "white" }}
        value={text}
        onChangeText={setText}
      />
      <Button
        title="Done"
        onPress={savePostHandler}
      />
      {id && <Button
        title="Delete"
        color={"red"}
        onPress={deletePostHandler}
      />}
    </>
  );
};

export default PostFormScreen;
