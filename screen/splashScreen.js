import * as React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { FontSize, FontFamily, Color, Borders } from "../GlobalStyles.js";
import { useNavigation } from "@react-navigation/native";
import { navigationRef } from "../RootNavigation/rootNavigation.js";
import FrameComponent from "../components/FrameComponent.js";



// const SplashScreen = () => {
//   const navigation = useNavigation();
function SplashScreen({navigation = useNavigation()}) {
  return (
    <View style={styles.spalshScreen}>
      <View style={styles.createYourAccountToPlanYoParent}>
        <Text style={styles.createYourAccount}>
          Jelajahi Berbagai Keindahahan Alam Indonesia
        </Text>
        <Text style={styles.asdasdasdasdasdadasdadsadsadas}>
           Anda bisa mengunjungi berbagai keindahan alam         
        </Text>
      </View>
      <Image
        style={styles.spalshScreenChild}
        resizeMode="cover"
        source={require("../assets/splash.png")}
      />
      <FrameComponent/>
    </View>
  );
};

const styles = StyleSheet.create({
  createYourAccount: {
    fontSize: FontSize.size_17xl,
    lineHeight: 50,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemibold,
    color: Color.bg121212,
    width: 304,
    height: 168,
    textAlign: "center",
  },
  asdasdasdasdasdadasdadsadsadas: {
    fontSize: FontSize.size_lg,
    lineHeight: 29,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.subTextBgWhite,
    width: 295,
    height: 74,
    marginTop: 4,
    textAlign: "center",
  },
  createYourAccountToPlanYoParent: {
    top: 394,
    left: 28,
    position: "absolute",
  },
  spalshScreenChild: {
    top: 144,
    left: 18,
    width: 312,
    height: 210,
    position: "absolute",
  },
  spalshScreen: {
    backgroundColor: Color.bgFbfbfb,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
  register: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    color: Color.bgFbfbfb,
    letterSpacing: 0,
    textAlign: "left",
  },
  registerWrapper: {
    top : 650,
    left: 30,
    borderRadius: 10,
    backgroundColor: Color.darkslategray_100,
    shadowColor: "rgba(46, 142, 255, 0.2)",
    height: 55,
    justifyContent: "center",
    marginTop: 16,
    alignItems: "center",
    width: 295,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    elevation: 40,
    shadowRadius: 40,
  },
    wrapperSpaceBlock: {
    flexDirection: "row",
  },
    loginNowTypo: {
      fontWeight: "bold",
    }
});


export default SplashScreen;