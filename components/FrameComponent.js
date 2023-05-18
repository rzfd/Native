import React, {memo} from "react";
import { Text, StyleSheet, View, Pressable, TouchableOpacity, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const FrameComponent = memo(() => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.startJourneyWrapper}
      onPress={() => navigation.navigate("Register")}
    >
      <Text style={styles.startJourney}>Mulai Aplikasi</Text>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  startJourney: {
    fontSize: FontSize.size_base,
    letterSpacing: 0,
    lineHeight: 24,
    fontWeight: "700",
    fontFamily: FontFamily.nunitoBold,
    color: Color.bgFbfbfb,
    textAlign: "center",
    justifyContent: "center",
  },
  startJourneyWrapper: {
    position: "absolute",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.darkslategray_100,
    shadowColor: "rgba(46, 142, 255, 0.2)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 40,
    elevation: 40,
    shadowOpacity: 1,
    width: 216,
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_xl,
    alignItems: "center",
    justifyContent: "center",
    left: 75,
    top: 670,
  },
});

export default FrameComponent;
