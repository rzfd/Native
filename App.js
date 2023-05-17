const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
// import Home from "./screens/Home";
// import SignInInactive from "./screens/SignInInactive";
// import SignInInactive1 from "./screens/SignInInactive1";
import Register from "./screen/register";
import SpalshScreen from "./screen/splashScreen";
// import Detail from "./screens/Detail";
// import TipsMendaki from "./screens/TipsMendaki";
// import Perlengkapan from "./screens/Perlengkapan";
// import TipsMendakiDetail from "./screens/TipsMendakiDetail";
// import TrackDetail from "./screens/TrackDetail";
// import TrackDetail1 from "./screens/TrackDetail1";
// import TrackPhotoDetail from "./screens/TrackPhotoDetail";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);
  const [fontsLoaded, error] = useFonts({
    Poppins_regular: require("/Users/User/OneDrive/Dokumen/Kodingding/Native/RPL/assets/fonts/Poppins_regular.ttf"),
    Poppins_medium: require("/Users/User/OneDrive/Dokumen/Kodingding/Native/RPL/assets/fonts/Poppins_medium.ttf"),
    Poppins_semibold: require("/Users/User/OneDrive/Dokumen/Kodingding/Native/RPL/assets/fonts/Poppins_semibold.ttf"),
    Poppins_bold: require("/Users/User/OneDrive/Dokumen/Kodingding/Native/RPL/assets/fonts/Poppins_bold.ttf"),
    Nunito_semibold: require("/Users/User/OneDrive/Dokumen/Kodingding/Native/RPL/assets/fonts/Nunito_semibold.ttf"),
    Nunito_bold: require("/Users/User/OneDrive/Dokumen/Kodingding/Native/RPL/assets/fonts/Nunito_bold.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignInInactive"
              component={SignInInactive}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignInInactive1"
              component={SignInInactive1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SpalshScreen"
              component={SpalshScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Detail"
              component={Detail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TipsMendaki"
              component={TipsMendaki}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Perlengkapan"
              component={Perlengkapan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TipsMendakiDetail"
              component={TipsMendakiDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TrackDetail"
              component={TrackDetail}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TrackDetail1"
              component={TrackDetail1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="TrackPhotoDetail"
              component={TrackPhotoDetail}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : (
          <SpalshScreen />
        )}
      </NavigationContainer>
    </>
  );
};
export default App;
