import { Text, View, Button } from "react-native";
import { useEffect, useState } from "react";
import PostsList from "../components/Post/PostsList";
import { Post } from "../models/post";
import { fetchPosts, insertPost } from "../util/database";
import { useIsFocused } from "@react-navigation/native";

const Posts = ({ route, navigation }) => {
  const [posts,setPosts] = useState([]);
  console.log("D:", navigation.getState().routes.map(route => route.name));
  const isFocused = useIsFocused();

  useEffect(()=>{
    if (isFocused) {
      fetchPosts().then(data => {
        setPosts(data)
      })
    }
    console.log({ isFocused });
  },[isFocused])
  useEffect(() => {
    if (route.params?.post) {
      const p = route.params?.post;
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
      // const newPost = new Post(p.author, p.text, Date.now())
      // setPosts((prevPosts) => [...prevPosts, newPost]);
      // insertPost(newPost);
    }
  }, [route.params?.post]);

  return (
    <>
      <View style={{ flex: 4, justifyContent: "center" }}>
        <Text style={{ alignSelf: "center",}}>POSTS</Text>
        <PostsList posts={posts} />
      </View>
      {/*<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>*/}
      {/*  <Text style={{ margin: 10 }}>Post: {route.params?.post.text}</Text>*/}
      {/*</View>*/}
    </>
  );
};
export default Posts;
