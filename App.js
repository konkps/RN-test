/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useEffect, useState } from "react";
import type { Node } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View, Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Colors from "./src/constants/colors";
import Home from "./src/screens/Home";
import SectionsExample from "./src/screens/SectionsExample";
import Posts from "./src/screens/Posts";
import Details from "./src/screens/Details";
import CreatePost from "./src/screens/PostForm";

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import IconButton from "./src/components/UI/IconButton";
import { init } from "./src/util/database";

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()


const TabNavigator = () => {
  const isDarkMode = useColorScheme() === "light";

  return (
    <Tab.Navigator
    screenOptions={{
      headerTitleAlign:"center",
      // headerShown:false,
      headerStyle: { backgroundColor: isDarkMode ? Colors.darkTheme : Colors.lightTheme },
      headerTintColor: isDarkMode ? Colors.lightTheme : Colors.darkTheme,
      headerTitleStyle: { fontWeight: "bold" },
      headerTitle: (props) => <LogoTitle {...props} />,
      headerRight: () => (<Button onPress={() => alert('This is a button!')} title="Info" color="#8be" />)
    }}>
      <Tab.Screen name="Αρχική" component={Home}
                  options={{
                    // tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons  name="home" color={color} size={size} solid/>
                    ),
                  }}
      />
      <Tab.Screen name="RN Home" component={SectionsExample}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Ionicons  name="logo-react" color={color} size={size} solid/>
                    ),
                  }}
      />
      <Tab.Screen name="Posts" component={Posts}
                  // options={{
                  //
                  // }}
                  options={({ navigation }) => ({
                    tabBarIcon: ({ color, size }) => (
                      <MaterialIcons  name="article" color={color} size={size} solid/>
                    ),
                    headerRight: ({ tintColor }) => (
                      <IconButton  type={"Ionicons"} icon="add" color={tintColor} size={30}
                                   onPress={() => navigation.navigate('CreatePost',{})} />
                    ),
                  })}
                  />
      {/*<Tab.Screen name="Settings" component={Posts} />*/}
      {/*<Stack.Screen name="CreatePost" component={CreatePost} />*/}
      {/*<Stack.Screen name="Details"*/}
      {/*              component={Details}*/}
      {/*              initialParams={{ itemId: 99 }}*/}
      {/*/>*/}
    </Tab.Navigator>
  );
}
const LogoTitle=()=>{
  return (
    <View style={{justifyContent:"center",alignItems:"center",flex:1}}>
      <Image
        style={{ width: 50, height: 50 }}
        source={require('./assets/test.png')}
      />
    </View>
  );
}

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === "light";
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init()
      .then(() => {
        setDbInitialized(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!dbInitialized) {
    return  <View>
      <Text>
        No posts added yet - start adding some!
      </Text>
    </View>;
  }

  return (<>
      <NavigationContainer style={{ flex: 1 }}>
        <Stack.Navigator
          screenOptions={{
            // headerStyle: { backgroundColor: "#f4511e" },
            // headerTintColor: "#fff",
            // headerTitleStyle: { fontWeight: "bold" },
          }}
        >
          <Stack.Screen name="Home" component={TabNavigator}
                        options={{
                          title: "Αρχική",
                          headerShown: false,
                          headerStyle: { backgroundColor: isDarkMode ? Colors.darkTheme : Colors.lightTheme },
                          headerTintColor: isDarkMode ? Colors.lightTheme : Colors.darkTheme,
                          headerTitleStyle: { fontWeight: "bold" },
                          headerTitle: (props) => <LogoTitle {...props} />,
                          headerRight: () => (<Button onPress={() => alert('This is a button!')} title="Info" color="#8be" />)
                        }}
          />
          {/*<Stack.Screen name="Posts" component={Posts} />*/}
          <Stack.Screen name="RN Home" component={SectionsExample} />
          <Stack.Screen name="CreatePost" component={CreatePost} />
          <Stack.Screen name="Details"
                        component={Details}
                        initialParams={{ itemId: 42 }}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
};




export default App;
