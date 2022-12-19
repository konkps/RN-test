import { Pressable, StyleSheet } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';


const IconButton = ({type, icon, size, color, onPress })=> {
  let C = null

  switch (type) {
    case 'EvilIcons':
      C = EvilIcons;
      break;
    case 'FontAwesome':
      C = FontAwesome;
      break;
    case 'FontAwesome5':
      C = FontAwesome5;
      break;
    case 'Ionicons':
      C = Ionicons;
      break;
    case 'MaterialCommunityIcons':
      C = MaterialCommunityIcons;
      break;
    case 'MaterialIcons':
      C = MaterialIcons;
      break;
  }

  if (C===null) {
    return null
  }

  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <C name={icon} size={size} color={color} />
    </Pressable>
  );
}

export default IconButton;

const styles = StyleSheet.create({
  button: {
    padding: 8,
    margin: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    opacity: 0.7,
  },
});
