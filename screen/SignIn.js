import React, {useState, useEffect} from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Pressable, SafeAreaView} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color, Padding, FontFamily, FontSize, Border } from "../GlobalStyles";

const SignIn = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); 
  const navigation = useNavigation();

  return (
    <View style={[styles.registerActive, styles.registerBg]}>
      <View style={[styles.registerActiveChild, styles.wrapperShadowBox]} />
      <View style={styles.buatAkunmuParent}>
        <Text style={[styles.buatAkunmu, styles.buatPosition]}>
            Ayo Masuk
        </Text>
        <Text style={[styles.buatAkunmuUntuk, styles.buatPosition]}>
            Masukkan akunmu, nikmati rencana perjalananmu
        </Text>
      </View>
      <SafeAreaView>
        <View style = {[styles.formRegister, styles.formRegisterPosition]}>
          <TextInput style={[styles.emailFocus]}
            value={email}
            keyboardType="email-address"
            onChangeText={text => setEmail(text)}
            placeholder="Masukkan Email Anda"
          />
          <TextInput style={[styles.passwordFocus]}
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            placeholder="Masukkan Password Anda"
          />
        </View>
      </SafeAreaView>
      <View style={styles.alreadyHaveAnAccountLoginParent}>
        <Pressable onPress={() => navigation.navigate("SignIn")}>
          <Text style={[styles.text, styles.textFlexBox]}>
            <Text
              style={styles.alreadyHaveAn}
            >{`Belum Mempunyai Akun? `}</Text>
            <Text style={[styles.loginNow, styles.loginNowTypo]}>
              Daftar Sekarang
            </Text>
          </Text>
        </Pressable>
        <Pressable
          style={[styles.registerWrapper, styles.wrapperSpaceBlock]}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={[styles.register, styles.loginNowTypo]}>Masuk</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  registerBg: {
    overflow: "hidden",
    backgroundColor: Color.bgFbfbfb,
  },
  wrapperShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -10,
    },
  },
  buatPosition: {
    textAlign: "left",
    color: Color.black,
    left: 2,
    position: "absolute",
  },
  wrapperSpaceBlock: {
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
  },
  textFlexBox: {
    letterSpacing: 0,
    textAlign: "left",
  },
  loginNowTypo: {
    fontFamily: FontFamily.nunitoBold,
    fontWeight: "700",
  },
  registerActiveChild: {
    top: 730,
    shadowColor: "rgba(0, 0, 0, 0.08)",
    width: 360,
    height: 70,
    elevation: 40,
    shadowRadius: 40,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    left: 0,
    position: "absolute",
    overflow: "hidden",
    backgroundColor: Color.bgFbfbfb,
  },
  buatAkunmu: {
    top: 0,
    fontSize: FontSize.size_17xl,
    fontFamily: FontFamily.poppinsSemibold,
    fontWeight: "600",
  },
  buatAkunmuUntuk: {
    top: 66,
    fontSize: FontSize.size_lg,
    lineHeight: 29,
    fontFamily: FontFamily.poppinsRegular,
    height: 74,
    width: 295,
  },
  formRegisterPosition: {
    shadowColor: "rgba(40, 165, 255, 0.05)",
    shadowRadius: 50,
    width: 294,
    borderWidth: 1,
    borderColor: "#29544a",
    borderStyle: "solid",
    backgroundColor: Color.white,
    borderRadius: Border.br_3xs,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_3xs,
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -10,
    },
    marginTop: 10000,
  },
  formRegisterPosition: {
    top: 200,
  },
  namaFocus: {
    marginHorizontal: 25,
    backgroundColor: Color.whitesmoke_100,
    marginTop: 15,
    borderRadius: 9,
    elevation: 2,
    paddingLeft: 10,
    paddingVertical: 10,
  },
  emailFocus: {
    marginHorizontal: 25,
    backgroundColor: Color.whitesmoke_100,
    marginTop: 15,
    borderRadius: 9,
    elevation: 2,
    paddingLeft: 10,
    paddingVertical: 10,
  },
  passwordFocus: {
    marginHorizontal: 25,
    backgroundColor: Color.whitesmoke_100,
    marginTop: 15,
    borderRadius: 9,
    elevation: 2,
    paddingLeft: 10,
    paddingVertical: 10,
  },
  buatAkunmuParent: {
    top: 70,
    left: 30,
    width: 297,
    height: 382,
    position: "absolute",
  },
  alreadyHaveAn: {
    fontFamily: FontFamily.nunitoSemibold,
    color: Color.subTextBgWhite,
    fontWeight: "600",
  },
  loginNow: {
    color: Color.darkslategray_100,
  },
  text: {
    lineHeight: 21,
    fontSize: FontSize.size_sm,
  },
  register: {
    fontSize: FontSize.size_base,
    lineHeight: 24,
    color: Color.bgFbfbfb,
    letterSpacing: 0,
    textAlign: "left",
  },
  registerWrapper: {
    borderRadius: Border.br_8xs,
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
  alreadyHaveAnAccountLoginParent: {
    top: 660,
    left: 33,
    alignItems: "center",
    position: "absolute",
  },
  registerActive: {
    flex: 1,
    width: "100%",
    height: 800,
  },
});

export default SignIn;
