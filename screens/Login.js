import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import GroupComponent from "../components/GroupComponent";
import RememberMe from "../components/RememberMe";
import ForgotPassword2 from "../components/ForgotPassword2";
import LoginContainer1 from "../components/LoginContainer1";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const Login = () => {
  return (
    <View style={styles.login}>
      <View style={styles.loginChild} />
      <View style={styles.dontHaveAnAccountParent}>
        <Text
          style={[styles.dontHaveAn, styles.signUpTypo]}
        >{`Don’t have an account ? `}</Text>
        <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
      </View>
      <Text style={[styles.helloAgainYouve, styles.signUpTypo]}>
        Hello again, you’ve been missed!
      </Text>
      <Text style={[styles.hiWelcomeBack, styles.signUpTypo]}>
        Hi, Welcome Back! 👋
      </Text>
      <GroupComponent
        email="Phone  Number"
        sophatleatnintrealive="07xxxxxxx"
        groupViewPosition="absolute"
        groupViewTop={351}
        groupViewLeft={29}
        groupViewWidth={359}
        groupViewHeight={67}
        rectangleViewBorderRadius={5}
        rectangleViewBorderColor="#c6c6c6"
        sophatleatnintrealiveColor="#1f1f1f"
      />
      <GroupComponent
        email="Password"
        sophatleatnintrealive="Please Enter Your Password"
        groupViewPosition="absolute"
        groupViewTop={430}
        groupViewLeft={29}
        groupViewWidth={359}
        groupViewHeight={67}
        rectangleViewBorderRadius={5}
        rectangleViewBorderColor="#c6c6c6"
        sophatleatnintrealiveColor="rgba(31, 31, 31, 0.43)"
      />
      <Image
        style={styles.eyefillIcon}
        contentFit="cover"
        source={require("../assets/eyefill.png")}
      />
      <RememberMe
        rememberMePosition="absolute"
        rememberMeTop={514}
        rememberMeLeft={29}
      />
      <ForgotPassword2
        forgotPassword="Forgot Password"
        forgotPasswordPosition="absolute"
        forgotPasswordTop={515}
        forgotPasswordLeft={274}
      />
      <LoginContainer1
        buttonText={require("../assets/iconmonstrgithub1-1.png")}
        actionText="Login"
        componentSize={require("../assets/gitlabseeklogocom-1.png")}
        showGithub={false}
        showGitlab={false}
        showWith={false}
        loginButtonPosition="absolute"
        loginButtonWidth={359}
        loginButtonHeight={204}
        loginButtonTop={654}
        loginButtonRight="unset"
        loginButtonBottom="unset"
        loginButtonLeft={26}
        rectangleViewBackgroundColor="#361a96"
        rectangleViewHeight="22.06%"
        rectangleViewBottom="77.94%"
        githubHeight="22.06%"
        githubTop="57.84%"
        groupViewTop={11}
        groupViewHeight={23}
        gitHubTop="8.7%"
        loginLeft="43.73%"
        loginColor="#fff"
        loginTop="5.39%"
        gitlabHeight="22.06%"
        gitlabTop="57.84%"
        groupViewTop1={11}
        groupViewHeight1={22}
        gitLabTop="9.05%"
        withHeight="9.31%"
        withTop="32.84%"
        withBottom="57.84%"
        lineViewTop="51.58%"
        lineViewBottom="45.79%"
        lineViewTop1="51.58%"
        lineViewBottom1="45.79%"
      />
      <View style={styles.dontHaveAnAccountParent}>
        <Text
          style={[styles.dontHaveAn, styles.signUpTypo]}
        >{`Don’t have an account ? `}</Text>
        <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
      </View>
    
      <GroupComponent
        email="Phone  Number"
        sophatleatnintrealive="07xxxxxxx"
        groupViewPosition="absolute"
        groupViewTop={351}
        groupViewLeft={29}
        groupViewWidth={359}
        groupViewHeight={67}
        rectangleViewBorderRadius={5}
        rectangleViewBorderColor="#c6c6c6"
        sophatleatnintrealiveColor="#1f1f1f"
      />
      <GroupComponent
        email="Password"
        sophatleatnintrealive="Please Enter Your Password"
        groupViewPosition="absolute"
        groupViewTop={430}
        groupViewLeft={29}
        groupViewWidth={359}
        groupViewHeight={67}
        rectangleViewBorderRadius={5}
        rectangleViewBorderColor="#c6c6c6"
        sophatleatnintrealiveColor="rgba(31, 31, 31, 0.43)"
      />
      <Image
        style={styles.eyefillIcon}
        contentFit="cover"
        source={require("../assets/eyefill.png")}
      />
      <RememberMe
        rememberMePosition="absolute"
        rememberMeTop={514}
        rememberMeLeft={29}
      />
      <ForgotPassword2
        forgotPassword="Forgot Password"
        forgotPasswordPosition="absolute"
        forgotPasswordTop={515}
        forgotPasswordLeft={274}
      />
      <LoginContainer1
        buttonText={require("../assets/iconmonstrgithub1-1.png")}
        actionText="Login"
        componentSize={require("../assets/gitlabseeklogocom-1.png")}
        showGithub={false}
        showGitlab={false}
        showWith={false}
        loginButtonPosition="absolute"
        loginButtonWidth={359}
        loginButtonHeight={204}
        loginButtonTop={654}
        loginButtonRight="unset"
        loginButtonBottom="unset"
        loginButtonLeft={26}
        rectangleViewBackgroundColor="#46a5fc"
        rectangleViewHeight="22.06%"
        rectangleViewBottom="77.94%"
        githubHeight="22.06%"
        githubTop="57.84%"
        groupViewTop={11}
        groupViewHeight={23}
        gitHubTop="8.7%"
        loginLeft="43.73%"
        loginColor="#fff"
        loginTop="5.39%"
        gitlabHeight="22.06%"
        gitlabTop="57.84%"
        groupViewTop1={11}
        groupViewHeight1={22}
        gitLabTop="9.05%"
        withHeight="9.31%"
        withTop="32.84%"
        withBottom="57.84%"
        lineViewTop="51.58%"
        lineViewBottom="45.79%"
        lineViewTop1="51.58%"
        lineViewBottom1="45.79%"
      />
      <Image
        style={styles.logoCopy1}
        contentFit="cover"
        source={require("../assets/logo-copy-1.png")}
      />
      <Image
        style={styles.loginItem}
        contentFit="cover"
        source={require("../assets/ellipse-1405.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  signUpTypo: {
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  loginChild: {
    top: 68,
    left: 20,
    borderRadius: Border.br_xs,
    width: 372,
    height: 759,
    position: "absolute",
    backgroundColor: Color.colorAliceblue_300,
  },
  dontHaveAn: {
    left: "0%",
    color: Color.colorDarkgray_200,
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    top: "0%",
  },
  signUp: {
    left: "76.36%",
    color: Color.colorMidnightblue_100,
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    top: "0%",
  },
  dontHaveAnAccountParent: {
    height: "2.12%",
    width: "53.14%",
    top: "93.64%",
    right: "23.43%",
    bottom: "4.24%",
    left: "23.43%",
    position: "absolute",
  },
  helloAgainYouve: {
    top: "37.48%",
    left: "7.97%",
    color: Color.colorDarkgray_200,
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  hiWelcomeBack: {
    top: "30.8%",
    left: "7.49%",
    fontSize: FontSize.size_6xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
  },
  eyefillIcon: {
    top: 413,
    left: 351,
    width: 18,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  logoCopy1: {
    top: 100,
    left: 124,
    width: 150,
    height: 130,
    position: "relative",

  },
  loginItem: {
    top: 756,
    left: -57,
    width: 480,
    height: 329,
    position: "absolute",
  },
  login: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorAliceblue_300,
  },
});

export default Login;
