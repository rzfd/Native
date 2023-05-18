import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
// import Home from "./screens/Home";
import SignIn from "/Users/User/OneDrive/Dokumen/Kodingding/Native/RPL/screen/SignIn";
import Register from "/Users/User/OneDrive/Dokumen/Kodingding/Native/RPL/screen/Register";
import SplashScreen from "/Users/User/OneDrive/Dokumen/Kodingding/Native/RPL/screen/SplashScreen";
// import Detail from "./screens/Detail";
// import TipsMendaki from "./screens/TipsMendaki";
// import Perlengkapan from "./screens/Perlengkapan";
// import TipsMendakiDetail from "./screens/TipsMendakiDetail";
// import TrackDetail from "./screens/TrackDetail";
// import TrackDetail1 from "./screens/TrackDetail1";
// import TrackPhotoDetail from "./screens/TrackPhotoDetail";

const Stack = createNativeStackNavigator();

const App = () => {
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
      <NavigationContainer>
          <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="SplashScreen"
              component={SplashScreen}
            />
            <Stack.Screen
              name="Register"
              component={Register}
            />
            <Stack.Screen
              name="SignIn"
              component={SignIn}
            />
          </Stack.Navigator>
      </NavigationContainer>
  );
};
export default App;
