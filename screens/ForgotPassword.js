import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import GroupComponent from "../components/GroupComponent";
import ForgotPassword2 from "../components/ForgotPassword2";
import LoginContainer1 from "../components/LoginContainer1";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Border, Color, FontSize } from "../GlobalStyles";

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotPassword}>
      <View style={styles.forgotPasswordChild} />
      <Text style={[styles.enterYourEmail, styles.sdgp1141Typo]}>
        Enter your Email and send the code.
      </Text>
      <Text style={[styles.forgotPassword1, styles.sdgp1141Typo]}>
        Forgot password
      </Text>
      <GroupComponent
        email="Phone number"
        sophatleatnintrealive="Enter your email"
        groupViewPosition="absolute"
        groupViewTop={295}
        groupViewLeft={27}
        groupViewWidth={359}
        groupViewHeight={67}
        rectangleViewBorderRadius={5}
        rectangleViewBorderColor="#c6c6c6"
        sophatleatnintrealiveColor="#9e9e9e"
      />
      <ForgotPassword2
        forgotPasswordPosition="absolute"
        forgotPasswordTop={539}
        forgotPasswordLeft={272}
      />
      <LoginContainer1
        buttonText={require("../assets/iconmonstrgithub1-1.png")}
        actionText="Send Code"
        componentSize={require("../assets/gitlabseeklogocom-1.png")}
        showGithub={false}
        showGitlab={false}
        showWith={false}
        loginButtonPosition="absolute"
        loginButtonWidth={310}
        loginButtonHeight={204}
        loginButtonTop={417}
        loginButtonRight="unset"
        loginButtonBottom="unset"
        loginButtonLeft={27}
        rectangleViewBackgroundColor="#46a5fc"
        rectangleViewHeight="22.06%"
        rectangleViewBottom="77.94%"
        githubHeight="22.06%"
        githubTop="57.84%"
        groupViewTop={11}
        groupViewHeight={23}
        gitHubTop="8.7%"
        loginLeft="37.6%"
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
      <View style={[styles.sdgp114Wrapper, styles.enterYourEmailLayout]}>
        <Pressable
          style={styles.sdgp114}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.sdgp1141, styles.sdgp1141Typo]}>
            @2024 SDGP 114
          </Text>
        </Pressable>
      </View>
      <Image
        style={styles.forgotPasswordItem}
        contentFit="cover"
        source={require("../assets/ellipse-1407.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sdgp1141Typo: {
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
  },
  enterYourEmailLayout: {
    height: "2.13%",
    position: "absolute",
  },
  forgotPasswordChild: {
    top: 71,
    left: 20,
    borderRadius: Border.br_xs,
    width: 372,
    height: 759,
    position: "absolute",
    backgroundColor: Color.colorAliceblue_300,
  },
  enterYourEmail: {
    width: "57.73%",
    top: "27.23%",
    left: "7.49%",
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    height: "2.13%",
    position: "absolute",
  },
  forgotPassword1: {
    height: "3.8%",
    width: "47.83%",
    top: "22.99%",
    left: "6.52%",
    fontSize: FontSize.size_6xl,
    color: Color.colorBlack,
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  sdgp1141: {
    height: "100%",
    color: Color.colorDarkgray_200,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    width: "100%",
  },
  sdgp114: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  sdgp114Wrapper: {
    width: "26.57%",
    top: "97.9%",
    right: "39.37%",
    bottom: "-0.02%",
    left: "34.06%",
  },
  forgotPasswordItem: {
    top: 671,
    left: 0,
    width: 414,
    height: 182,
    position: "absolute",
  },
  forgotPassword: {
    flex: 1,
    height: 856,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.colorAliceblue_300,
  },
});

export default ForgotPassword;
