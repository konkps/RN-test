import { useNavigation } from '@react-navigation/native';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import  Colors  from '../../constants/colors';

import PostItem from './PostItem';

function PostsList({ posts }) {
  const navigation = useNavigation();

  // function selectPostHandler(id) {
  //   navigation.navigate('PostDetails', {
  //     postId: id,
  //   });
  // }

  if (!posts || posts.length === 0) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.fallbackText}>
          No posts added yet - start adding some!
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.list}
      data={posts}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <PostItem post={item}
                  // onSelect={selectPostHandler}
        />
      )}
    />
  );
}

export default PostsList;

const styles = StyleSheet.create({
  list: {
    marginTop: 16,
    paddingHorizontal:16,
    backgroundColor:Colors.lightTheme
  },
  fallbackContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:Colors.darkTheme
  },
  fallbackText: {
    fontSize: 16,
    color: Colors.white
  },
});
