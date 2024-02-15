import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import TypenumericalModelightCa from "../components/TypenumericalModelightCa";
import LoginContainer1 from "../components/LoginContainer1";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const ForgotPassword1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotPassword}>
      <View style={styles.forgotPasswordChild} />
      <View style={styles.sdgp114Wrapper}>
        <Pressable
          style={styles.sdgp114}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.sdgp1141}>@2024 SDGP 114</Text>
        </Pressable>
      </View>
      <Image
        style={styles.forgotPasswordItem}
        contentFit="cover"
        source={require("../assets/ellipse-1405.png")}
      />
      <TypenumericalModelightCa
        vec={require("../assets/vec.png")}
        typenumericalModelightCaPosition="absolute"
        typenumericalModelightCaWidth={359}
        typenumericalModelightCaHeight={286}
        typenumericalModelightCaTop={532}
        typenumericalModelightCaLeft={26}
        typenumericalModelightCaBorderRadius={5}
      />
      <Text style={styles.weveSentA}>We’ve sent a code to 07xxxxxxx</Text>
      <LoginContainer1
        buttonText={require("../assets/iconmonstrgithub1-12.png")}
        actionText="Verify"
        componentSize={require("../assets/gitlabseeklogocom-12.png")}
        showGithub={false}
        showGitlab={false}
        showWith={false}
        loginButtonPosition="absolute"
        loginButtonWidth={359}
        loginButtonHeight={210}
        loginButtonTop={427}
        loginButtonRight="unset"
        loginButtonBottom="unset"
        loginButtonLeft={24}
        rectangleViewBackgroundColor="#46a5fc"
        rectangleViewHeight="22.05%"
        rectangleViewBottom="77.95%"
        githubHeight="22.05%"
        githubTop="57.86%"
        groupViewTop={8}
        groupViewHeight={25}
        gitHubTop="23.69%"
        loginLeft="43.45%"
        loginColor="#fff"
        loginTop="5.38%"
        gitlabHeight="22.05%"
        gitlabTop="57.86%"
        groupViewTop1={8}
        groupViewHeight1={25}
        gitLabTop="23.69%"
        withHeight="9.05%"
        withTop="32.86%"
        withBottom="58.1%"
        lineViewTop="52.63%"
        lineViewBottom="44.74%"
        lineViewTop1="52.63%"
        lineViewBottom1="44.74%"
      />
      <Image
        style={styles.forgotPasswordInner}
        contentFit="cover"
        source={require("../assets/logo-copy-1.png")}
      />
      <Text style={styles.sendCodeAgain}>Send Code Again 00:20</Text>
      <Image
        style={[styles.rectangleIcon, styles.forgotChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Image
        style={[styles.forgotPasswordChild1, styles.forgotChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Image
        style={[styles.forgotPasswordChild2, styles.forgotChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <View style={styles.wrapper}>
        <Text style={[styles.text, styles.textTypo]}>2</Text>
      </View>
      <Text style={[styles.text1, styles.textTypo]}>2</Text>
      <Text style={[styles.text2, styles.textTypo]}>9</Text>
      <Image
        style={[styles.forgotPasswordChild3, styles.forgotChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-19.png")}
      />
      <Text style={[styles.text3, styles.textTypo]}>2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotChildLayout: {
    height: 59,
    width: 66,
    top: 302,
    position: "absolute",
  },
  textTypo: {
    textAlign: "center",
    fontFamily: FontFamily.manjariBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_29xl,
    height: 128,
    width: 154,
    color: Color.colorBlack,
    position: "absolute",
  },
  forgotPasswordChild: {
    top: 67,
    left: 19,
    borderRadius: Border.br_xs,
    width: 372,
    height: 759,
    position: "absolute",
    backgroundColor: Color.colorAliceblue_300,
  },
  sdgp1141: {
    height: "100%",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemiBold,
    textAlign: "left",
    color: Color.colorDarkgray_200,
    width: "100%",
  },
  sdgp114: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  sdgp114Wrapper: {
    height: "2.13%",
    width: "26.57%",
    top: "97.9%",
    right: "39.37%",
    bottom: "-0.02%",
    left: "34.06%",
    position: "absolute",
  },
  forgotPasswordItem: {
    top: 654,
    left: -37,
    width: 480,
    height: 329,
    position: "absolute",
  },
  weveSentA: {
    height: "2.57%",
    width: "59.18%",
    top: "27.08%",
    left: "8.94%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.mako,
    textAlign: "left",
    color: Color.colorDarkgray_200,
    position: "absolute",
  },
  forgotPasswordInner: {
    top: 75,
    left: 136,
    width: 150,
    height: 130,
    position: "absolute",
  },
  sendCodeAgain: {
    top: 478,
    left: 105,
    fontSize: FontSize.size_lg,
    width: 247,
    height: 26,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    color: Color.colorBlack,
    fontFamily: FontFamily.mako,
    textAlign: "left",
    position: "absolute",
  },
  rectangleIcon: {
    left: 132,
  },
  forgotPasswordChild1: {
    left: 209,
  },
  forgotPasswordChild2: {
    left: 286,
  },
  text: {
    top: 0,
    left: 0,
  },
  wrapper: {
    left: 88,
    height: 128,
    width: 154,
    top: 317,
    position: "absolute",
  },
  text1: {
    left: 241,
    top: 317,
    textAlign: "center",
    fontFamily: FontFamily.manjariBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_29xl,
  },
  text2: {
    left: 167,
    top: 317,
    textAlign: "center",
    fontFamily: FontFamily.manjariBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_29xl,
  },
  forgotPasswordChild3: {
    left: 55,
  },
  text3: {
    left: 12,
    top: 317,
    textAlign: "center",
    fontFamily: FontFamily.manjariBold,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_29xl,
  },
  forgotPassword: {
    flex: 1,
    height: 856,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorAliceblue_300,
  },
});

export default ForgotPassword1;
