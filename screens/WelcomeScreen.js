import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import LoginContainer1 from "../components/LoginContainer1";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const WelcomeScreen = () => {
  return (
    <View style={styles.welcomeScreen}>
      <View style={styles.welcomeScreenChild} />
      <LoginContainer1
        buttonText={require("../assets/iconmonstrgithub1-1.png")}
        actionText="Sign Up"
        componentSize={require("../assets/gitlabseeklogocom-1.png")}
        showGithub={false}
        showGitlab={false}
        showWith={false}
        loginButtonPosition="absolute"
        loginButtonWidth="86.71%"
        loginButtonHeight="22.77%"
        loginButtonTop="70.87%"
        loginButtonRight="6.76%"
        loginButtonBottom="6.36%"
        loginButtonLeft="6.52%"
        rectangleViewBackgroundColor="#46a5fc"
        rectangleViewHeight="22.06%"
        rectangleViewBottom="77.94%"
        githubHeight="22.06%"
        githubTop="57.84%"
        groupViewTop={11}
        groupViewHeight={23}
        gitHubTop="8.7%"
        loginLeft="41.23%"
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
      <Text style={styles.sdgp114}>@2024 SDGP 114</Text>
      
      <Text style={styles.quoteText}>
            The only person you are destined to become is the person you decide to be.
          </Text>

      <Text style={[styles.createAccount, styles.createAccountFlexBox]}>
        Create Account
      </Text>
      {/* <Text style={styles.exploreTheApp}>Explore the App</Text> */}
      <Image
        style={styles.logoWithName1}
        contentFit="cover"
        source={require("../assets/logo-with-name-1.png")}
      />
      <Image
        style={[styles.welcomeScreenInner, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1405.png")}
      />
      <Image
        style={[styles.ellipseIcon, styles.ellipseIconLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1405.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  createAccountFlexBox: {
    textAlign: "center",
    color: Color.colorBlack,
    position: "absolute",
  },
  ellipseIconLayout: {
    height: 329,
    width: 480,
    position: "absolute",
  },
  welcomeScreenChild: {
    top: 80,
    left: 20,
    borderRadius: Border.br_xs,
    width: 372,
    height: 759,
    position: "absolute",
    backgroundColor: Color.colorAliceblue_300,
  },
  sdgp114: {
    top: "95.87%",
    left: "33.33%",
    fontSize: FontSize.size_sm,
    color: Color.colorDarkgray_200,
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  createAccount: {
    height: "5.36%",
    width: "48.07%",
    top: "76.9%",
    left: "22.71%",
    fontSize: FontSize.size_mid,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    textAlign: "center",
  },
  theOnlyPerson: {
    top: 350,
    left: 27,
    fontSize: FontSize.size_lg,
    letterSpacing: 0,
    fontFamily: FontFamily.mandali,
    width: 338,
    height: 63,
  },
  exploreTheApp: {
    height: "11.83%",
    width: "84.06%",
    top: "47.99%",
    left: "5.56%",
    fontSize: 51,
    fontFamily: FontFamily.mansalvaRegular,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  logoWithName1: {
    top: 153,
    left: 116,
    width: 159,
    height: 138,
    position: "absolute",
  },
  welcomeScreenInner: {
    top: 732,
    left: -39,
  },
  ellipseIcon: {
    top: 335,
    left: 1711,
  },
  welcomeScreen: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorAliceblue_300,
  },
    quoteText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#777777',
    fontStyle: 'italic',
    top: 350,
    left: 27,
    letterSpacing: 0,
    fontFamily: FontFamily.mandali,
    width: 338,
    height: 63,
  },
});

export default WelcomeScreen;
