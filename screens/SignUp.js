import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import GroupComponent from "../components/GroupComponent";
import RememberMe from "../components/RememberMe";
import ForgotPassword2 from "../components/ForgotPassword2";
import PhoneNumber from "../components/PhoneNumber";
import LoginContainer1 from "../components/LoginContainer1";
import OnOffTrueDisabledFalse from "../components/OnOffTrueDisabledFalse";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signup}>
      <View style={styles.signupChild} />
      <View style={styles.alreadyHaveAnAccountParent}>
        <Text style={[styles.alreadyHaveAn, styles.login1Typo]}>
          Already have an account ?
        </Text>
        <Pressable
          style={styles.login}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
        </Pressable>
      </View>
      <Image
        style={[styles.signupItem, styles.signupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1405.png")}
      />
      <Text style={[styles.connectWithYour, styles.login1Typo]}>
        Connect with your friends today!
      </Text>
      <Text style={styles.createAnAccount}>Create an account</Text>
      <GroupComponent
        email="Email​ Address"
        sophatleatnintrealive="Enter your email"
        groupViewPosition="absolute"
        groupViewTop={419}
        groupViewLeft={23}
        groupViewWidth={359}
        groupViewHeight={67}
        rectangleViewBorderRadius={5}
        rectangleViewBorderColor="#c6c6c6"
        sophatleatnintrealiveColor="#9e9e9e"
      />
      <GroupComponent
        email="Password"
        sophatleatnintrealive="Please Enter Your Password"
        groupViewPosition="absolute"
        groupViewTop={577}
        groupViewLeft={23}
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
        rememberMeTop={662}
        rememberMeLeft={23}
      />
      <ForgotPassword2
        forgotPassword="Forgot Password"
        forgotPasswordPosition="absolute"
        forgotPasswordTop={663}
        forgotPasswordLeft={268}
      />
      <PhoneNumber
        phoneNumberPosition="absolute"
        phoneNumberTop={495}
        phoneNumberLeft={24}
        textColor="#000"
      />
      <View style={styles.alreadyHaveAnAccountParent}>
        <Text style={[styles.alreadyHaveAn, styles.login1Typo]}>
          Already have an account ?
        </Text>
        <Pressable
          style={styles.login}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
        </Pressable>
      </View>
      <Text style={[styles.connectWithYour, styles.login1Typo]}>
        Connect with your friends today!
      </Text>
      <Text style={styles.createAnAccount}>Create an account</Text>
      <GroupComponent
        email="Email​ Address"
        sophatleatnintrealive="Enter your email"
        groupViewPosition="absolute"
        groupViewTop={419}
        groupViewLeft={23}
        groupViewWidth={359}
        groupViewHeight={67}
        rectangleViewBorderRadius={5}
        rectangleViewBorderColor="#c6c6c6"
        sophatleatnintrealiveColor="#9e9e9e"
      />
      <GroupComponent
        email="Password"
        sophatleatnintrealive="Please Enter Your Password"
        groupViewPosition="absolute"
        groupViewTop={577}
        groupViewLeft={23}
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
        rememberMeTop={662}
        rememberMeLeft={23}
      />
      <ForgotPassword2
        forgotPassword="Forgot Password"
        forgotPasswordPosition="absolute"
        forgotPasswordTop={663}
        forgotPasswordLeft={268}
      />
      <PhoneNumber
        phoneNumberPosition="absolute"
        phoneNumberTop={495}
        phoneNumberLeft={24}
        textColor="#000"
      />
      <View style={styles.alreadyHaveAnAccountParent}>
        <Text style={[styles.alreadyHaveAn, styles.login1Typo]}>
          Already have an account ?
        </Text>
        <Pressable
          style={styles.login}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
        </Pressable>
      </View>
      <Text style={[styles.connectWithYour, styles.login1Typo]}>
        Connect with your friends today!
      </Text>
      <Text style={styles.createAnAccount}>Create an account</Text>
      <GroupComponent
        email="Email​ Address"
        sophatleatnintrealive="Enter your email"
        groupViewPosition="absolute"
        groupViewTop={419}
        groupViewLeft={23}
        groupViewWidth={359}
        groupViewHeight={67}
        rectangleViewBorderRadius={5}
        rectangleViewBorderColor="#c6c6c6"
        sophatleatnintrealiveColor="#9e9e9e"
      />
      <GroupComponent
        email="Password"
        sophatleatnintrealive="Please Enter Your Password"
        groupViewPosition="absolute"
        groupViewTop={577}
        groupViewLeft={23}
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
        rememberMeTop={662}
        rememberMeLeft={23}
      />
      <ForgotPassword2
        forgotPassword="Forgot Password"
        forgotPasswordPosition="absolute"
        forgotPasswordTop={663}
        forgotPasswordLeft={268}
      />
      <PhoneNumber
        phoneNumberPosition="absolute"
        phoneNumberTop={495}
        phoneNumberLeft={24}
        textColor="#000"
      />
      <View style={styles.alreadyHaveAnAccountParent}>
        <Text style={[styles.alreadyHaveAn, styles.login1Typo]}>
          Already have an account ?
        </Text>
        <Pressable
          style={styles.login}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
        </Pressable>
      </View>
      <Text style={[styles.connectWithYour, styles.login1Typo]}>
        Connect with your friends today!
      </Text>
      <Text style={styles.createAnAccount}>Create an account</Text>
      <GroupComponent
        email="Email​ Address"
        sophatleatnintrealive="Enter your email"
        groupViewPosition="absolute"
        groupViewTop={419}
        groupViewLeft={23}
        groupViewWidth={359}
        groupViewHeight={67}
        rectangleViewBorderRadius={5}
        rectangleViewBorderColor="#c6c6c6"
        sophatleatnintrealiveColor="#9e9e9e"
      />
      <GroupComponent
        email="Password"
        sophatleatnintrealive="Please Enter Your Password"
        groupViewPosition="absolute"
        groupViewTop={577}
        groupViewLeft={23}
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
      <Text style={[styles.rememberMe, styles.login1Typo]}>Remember Me</Text>
      <ForgotPassword2
        forgotPassword="Forgot Password"
        forgotPasswordPosition="absolute"
        forgotPasswordTop={663}
        forgotPasswordLeft={268}
      />
      <PhoneNumber
        phoneNumberPosition="absolute"
        phoneNumberTop={495}
        phoneNumberLeft={24}
        textColor="#000"
      />
      <View style={styles.alreadyHaveAnAccountParent}>
        <Text style={[styles.alreadyHaveAn, styles.login1Typo]}>
          Already have an account ?
        </Text>
        <Pressable
          style={styles.login}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
        </Pressable>
      </View>
      <Text style={[styles.connectWithYour, styles.login1Typo]}>
        Connect with your friends today!
      </Text>
      <Text style={styles.createAnAccount}>Create an account</Text>
      <GroupComponent
        email="Email​ Address"
        sophatleatnintrealive="Enter your email"
        groupViewPosition="absolute"
        groupViewTop={419}
        groupViewLeft={23}
        groupViewWidth={359}
        groupViewHeight={67}
        rectangleViewBorderRadius={5}
        rectangleViewBorderColor="#c6c6c6"
        sophatleatnintrealiveColor="#9e9e9e"
      />
      <GroupComponent
        email="Password"
        sophatleatnintrealive="Please Enter Your Password"
        groupViewPosition="absolute"
        groupViewTop={577}
        groupViewLeft={23}
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
      <Text style={[styles.rememberMe, styles.login1Typo]}>Remember Me</Text>
      <ForgotPassword2
        forgotPassword="Forgot Password"
        forgotPasswordPosition="absolute"
        forgotPasswordTop={663}
        forgotPasswordLeft={268}
      />
      <LoginContainer1
        loginButtonPosition="absolute"
        loginButtonWidth="unset"
        loginButtonHeight="unset"
        loginButtonTop={737}
        loginButtonRight="unset"
        loginButtonBottom="unset"
        loginButtonLeft={24}
      />
      <PhoneNumber
        phoneNumberPosition="absolute"
        phoneNumberTop={495}
        phoneNumberLeft={24}
        textColor="#000"
      />
      <View style={styles.alreadyHaveAnAccountParent}>
        <Text style={[styles.alreadyHaveAn, styles.login1Typo]}>
          Already have an account ?
        </Text>
        <Pressable
          style={styles.login}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.login1, styles.login1Typo]}>Login</Text>
        </Pressable>
      </View>
      <Text style={[styles.connectWithYour, styles.login1Typo]}>
        Connect with your friends today!
      </Text>
      <Text style={styles.createAnAccount}>Create an account</Text>
      <GroupComponent
        email="Email​ Address"
        sophatleatnintrealive="Enter your email"
        groupViewPosition="absolute"
        groupViewTop={419}
        groupViewLeft={23}
        groupViewWidth={359}
        groupViewHeight={67}
        rectangleViewBorderRadius={5}
        rectangleViewBorderColor="#c6c6c6"
        sophatleatnintrealiveColor="#9e9e9e"
      />
      <GroupComponent
        email="Password"
        sophatleatnintrealive="Please Enter Your Password"
        groupViewPosition="absolute"
        groupViewTop={577}
        groupViewLeft={23}
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
      <Text style={[styles.rememberMe, styles.login1Typo]}>Remember Me</Text>
      <ForgotPassword2
        forgotPassword="Forgot Password"
        forgotPasswordPosition="absolute"
        forgotPasswordTop={663}
        forgotPasswordLeft={268}
      />
      <PhoneNumber
        phoneNumberPosition="absolute"
        phoneNumberTop={495}
        phoneNumberLeft={24}
        textColor="#000"
      />
      <OnOffTrueDisabledFalse
        onOffTrueDisabledFalsePosition="absolute"
        onOffTrueDisabledFalseWidth={22}
        onOffTrueDisabledFalseTop={322}
        onOffTrueDisabledFalseLeft={32}
        onOffTrueDisabledFalseHeight={20}
        onOffTrueDisabledFalseBorderRadius={12}
        containerBorderColor="#351a96"
        circleBackgroundColor="#351a96"
      />
      <OnOffTrueDisabledFalse
        onOffTrueDisabledFalsePosition="absolute"
        onOffTrueDisabledFalseWidth={84}
        onOffTrueDisabledFalseTop={371}
        onOffTrueDisabledFalseLeft={33}
        onOffTrueDisabledFalseHeight={37}
        onOffTrueDisabledFalseBorderRadius={10}
        containerBorderColor="#8e8e93"
        circleBackgroundColor="#8e8e93"
      />
      <Text style={[styles.person1, styles.personTypo]}>Person 1</Text>
      <Text style={[styles.person2, styles.personTypo]}>Person 2</Text>
      <Image
        style={styles.logoCopy2}
        contentFit="cover"
        source={require("../assets/logo-copy-1.png")}
      />
      <Image
        style={[styles.signupInner, styles.signupLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-1405.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginButtonBtn: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "600",
    fontFamily: "Manrope-SemiBold",
  },
  loginButtonBtn1: {
    height: 204,
    width: 359,
  },
  login1Typo: {
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  signupLayout: {
    height: 329,
    width: 480,
    position: "absolute",
  },
  personTypo: {
    height: 33,
    width: 310,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    fontSize: FontSize.size_mid,
    color: Color.colorBlack,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  signupChild: {
    top: 66,
    left: 21,
    borderRadius: Border.br_xs,
    width: 372,
    height: 759,
    position: "absolute",
    backgroundColor: Color.colorAliceblue_300,
  },
  alreadyHaveAn: {
    left: "0%",
    color: Color.colorDarkgray_200,
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    position: "absolute",
    top: "0%",
  },
  login1: {
    color: Color.colorMidnightblue_100,
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
  },
  login: {
    left: "82.79%",
    top: "0%",
    position: "absolute",
  },
  alreadyHaveAnAccountParent: {
    height: "2.12%",
    width: "51.93%",
    top: "93.64%",
    right: "24.15%",
    bottom: "4.24%",
    left: "23.91%",
    position: "absolute",
  },
  signupItem: {
    top: -36,
    left: 590,
  },
  connectWithYour: {
    top: "30.58%",
    left: "8.7%",
    color: Color.colorDarkgray_200,
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  createAnAccount: {
    top: "26.9%",
    left: "8.21%",
    fontSize: FontSize.size_6xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  eyefillIcon: {
    top: 615,
    left: 347,
    width: 18,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  rememberMe: {
    top: "73.88%",
    left: "12.08%",
    color: Color.colorGray_600,
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  person1: {
    top: 316,
    left: -10,
  },
  person2: {
    top: 367,
    left: -11,
  },
  logoCopy2: {
    top: 81,
    left: 127,
    width: 150,
    height: 130,
    position: "absolute",
  },
  signupInner: {
    top: 760,
    left: -38,
  },
  signup: {
    flex: 1,
    width: "100%",
    height: 896,
    overflow: "hidden",
    backgroundColor: Color.colorAliceblue_300,
  },
});

export default SignUp;
