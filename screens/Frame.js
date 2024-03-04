import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import StatusBarContainer from "../components/StatusBarContainer";
import ForgotPassword2 from "../components/ForgotPassword2";
import LoginContainer1 from "../components/LoginContainer1";
import { useNavigation } from "@react-navigation/native";
import LoginButton from "../components/LoginButton";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const passwordChange = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.forgotPasswordParent}>
      <View style={[styles.forgotPassword, styles.forgotBg]}>
        <StatusBarContainer />
        <View style={[styles.forgotPasswordChild, styles.forgotBg]} />
        <Text style={styles.yourPasswordHasContainer}>
          <Text style={styles.yourPasswordHas}>
            Your password has been changed successfully
          </Text>
          <Text style={styles.text}>.</Text>
        </Text>
        <Text style={styles.passwordChanged}>Password Changed</Text>
        <ForgotPassword2
          forgotPasswordPosition="absolute"
          forgotPasswordTop={539}
          forgotPasswordLeft={273}
        />
        <LoginContainer1
          buttonText={require("../assets/iconmonstrgithub1-1.png")}
          actionText="Back to Login"
          componentSize={require("../assets/gitlabseeklogocom-11.png")}
          showGithub={false}
          showGitlab={false}
          showWith={false}
          loginButtonPosition="absolute"
          loginButtonWidth={359}
          loginButtonHeight={204}
          loginButtonTop={-5963}
          loginButtonRight="unset"
          loginButtonBottom="unset"
          loginButtonLeft={4311}
          rectangleViewBackgroundColor="#361a96"
          rectangleViewHeight="22.06%"
          rectangleViewBottom="77.94%"
          githubHeight="22.06%"
          githubTop="57.84%"
          groupViewTop={11}
          groupViewHeight={23}
          gitHubTop="8.7%"
          loginLeft="34.82%"
          loginColor="#e6f6ff"
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
        <View style={[styles.sdgp114Wrapper, styles.sdgp114Layout]}>
          <Pressable
            style={styles.sdgp114}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.sdgp1141, styles.sdgpTypo]}>
              @2024 SDGP 114
            </Text>
          </Pressable>
        </View>
        <LoginButton />
        <Image
          style={styles.forgotPasswordItem}
          contentFit="cover"
          source={require("../assets/ellipse-1405.png")}
        />
      </View>
      <View style={[styles.forgotPassword, styles.forgotBg]}>
        <StatusBarContainer />
        <View style={[styles.forgotPasswordChild, styles.forgotBg]} />
        <Text style={styles.yourPasswordHasContainer}>
          <Text style={styles.yourPasswordHas}>
            Your password has been changed successfully
          </Text>
          <Text style={styles.text}>.</Text>
        </Text>
        <Text style={styles.passwordChanged}>Password Changed</Text>
        <ForgotPassword2
          forgotPasswordPosition="absolute"
          forgotPasswordTop={539}
          forgotPasswordLeft={273}
        />
        <LoginContainer1
          buttonText={require("../assets/iconmonstrgithub1-1.png")}
          actionText="Back to Login"
          componentSize={require("../assets/gitlabseeklogocom-11.png")}
          showGithub={false}
          showGitlab={false}
          showWith={false}
          loginButtonPosition="absolute"
          loginButtonWidth={359}
          loginButtonHeight={204}
          loginButtonTop={-5963}
          loginButtonRight="unset"
          loginButtonBottom="unset"
          loginButtonLeft={4311}
          rectangleViewBackgroundColor="#361a96"
          rectangleViewHeight="22.06%"
          rectangleViewBottom="77.94%"
          githubHeight="22.06%"
          githubTop="57.84%"
          groupViewTop={11}
          groupViewHeight={23}
          gitHubTop="8.7%"
          loginLeft="34.82%"
          loginColor="#e6f6ff"
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
        <View style={[styles.sdgp114Wrapper, styles.sdgp114Layout]}>
          <Pressable
            style={styles.sdgp114}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.sdgp1141, styles.sdgpTypo]}>
              @2024 SDGP 114
            </Text>
          </Pressable>
        </View>
        <LoginButton />
        <Image
          style={styles.forgotPasswordItem}
          contentFit="cover"
          source={require("../assets/ellipse-1405.png")}
        />
        <View style={[styles.sdgp114Frame, styles.sdgp114Layout]}>
          <Pressable
            style={styles.sdgp114}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.sdgp1145, styles.sdgpTypo]}>
              @2024 SDGP 114
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotBg: {
    backgroundColor: Color.colorAliceblue_300,
    position: "absolute",
  },
  sdgp114Layout: {
    height: "2.13%",
    position: "absolute",
  },
  sdgpTypo: {
    fontSize: FontSize.size_sm,
    height: "100%",
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    width: "100%",
  },
  forgotPasswordChild: {
    top: 63,
    left: 24,
    borderRadius: Border.br_xs,
    width: 372,
    height: 759,
  },
  yourPasswordHas: {
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
  },
  text: {
    fontFamily: FontFamily.maliSemiBold,
    fontWeight: "600",
  },
  yourPasswordHasContainer: {
    height: "14.6%",
    width: "85.04%",
    top: "39.84%",
    left: "10.39%",
    fontSize: FontSize.sfProText24400_size,
    textAlign: "center",
    color: Color.colorAliceblue_300,
    position: "absolute",
  },
  passwordChanged: {
    height: "14.72%",
    width: "84.05%",
    top: "35.28%",
    left: "12.29%",
    fontSize: FontSize.size_18xl,
    fontFamily: FontFamily.manjariRegular,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  sdgp1141: {
    color: Color.colorAliceblue_300,
  },
  sdgp114: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  sdgp114Wrapper: {
    width: "26.58%",
    top: "97.9%",
    right: "39.37%",
    bottom: "-0.02%",
    left: "34.05%",
  },
  forgotPasswordItem: {
    top: 689,
    left: -28,
    width: 480,
    height: 329,
    position: "absolute",
  },
  forgotPassword: {
    top: 0,
    left: 0,
    width: 415,
    overflow: "hidden",
    height: 856,
  },
  sdgp1145: {
    color: Color.colorDarkgray_200,
  },
  sdgp114Frame: {
    width: "26.51%",
    top: "94.98%",
    right: "39.52%",
    bottom: "2.9%",
    left: "33.98%",
  },
  forgotPasswordParent: {
    flex: 1,
    height: 856,
    width: "100%",
  },
});

export default passwordChange;
