import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const LoginButton = () => {
  return (
    <View style={styles.loginButton}>
      <View style={styles.loginButtonChild} />
      <View style={[styles.github, styles.withPosition1]}>
        <View style={[styles.githubChild, styles.childBorder]} />
        <View style={[styles.iconmonstrGithub11Parent, styles.parentPosition]}>
          <Image
            style={[
              styles.iconmonstrGithub11,
              styles.iconmonstrGithub11Position,
            ]}
            contentFit="cover"
            source={require("../assets/iconmonstrgithub1-11.png")}
          />
          <Text style={[styles.github1, styles.orWithTypo]}>GitHub</Text>
        </View>
      </View>
      <Text style={styles.login}>Back to Login</Text>
      <View style={[styles.gitlab, styles.withPosition1]}>
        <View style={[styles.gitlabChild, styles.childBorder]} />
        <View style={[styles.gitlabSeeklogocom1Parent, styles.parentPosition]}>
          <Image
            style={[
              styles.gitlabSeeklogocom1Icon,
              styles.iconmonstrGithub11Position,
            ]}
            contentFit="cover"
            source={require("../assets/gitlabseeklogocom-1.png")}
          />
          <Text style={[styles.gitlab1, styles.orWithTypo]}>GitLab</Text>
        </View>
      </View>
      <View style={[styles.with, styles.withPosition1]}>
        <Text style={[styles.orWith, styles.orWithTypo]}>Or With</Text>
        <View style={[styles.withChild, styles.withPosition]} />
        <View style={[styles.withItem, styles.withPosition]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  withPosition1: {
    display: "none",
    position: "absolute",
  },
  childBorder: {
    borderWidth: 1,
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    backgroundColor: Color.neutralBackground,
    marginLeft: -86.5,
    width: 173,
    left: "50%",
    borderRadius: Border.br_8xs,
    top: "0%",
    position: "absolute",
  },
  parentPosition: {
    height: 37,
    top: 11,
    position: "absolute",
  },
  iconmonstrGithub11Position: {
    overflow: "hidden",
    left: 0,
    top: 14,
    position: "absolute",
  },
  orWithTypo: {
    textAlign: "left",
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    top: "0%",
    position: "absolute",
  },
  withPosition: {
    borderTopWidth: 0.5,
    borderColor: Color.colorBlack,
    bottom: "46.84%",
    top: "50.53%",
    width: "37.74%",
    height: "2.63%",
    borderStyle: "solid",
    position: "absolute",
  },
  loginButtonChild: {
    height: "22.06%",
    bottom: "77.94%",
    backgroundColor: Color.colorCornflowerblue_100,
    borderRadius: Border.br_8xs,
    top: "0%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  githubChild: {
    height: "82.88%",
    bottom: "17.12%",
  },
  iconmonstrGithub11: {
    width: 23,
    height: 23,
  },
  github1: {
    left: "43.91%",
  },
  iconmonstrGithub11Parent: {
    left: 31,
    width: 84,
  },
  github: {
    height: "26.61%",
    marginLeft: -180,
    bottom: "15.56%",
    width: 173,
    left: "50%",
    top: "57.83%",
    display: "none",
  },
  login: {
    top: "4.83%",
    left: "35.3%",
    fontSize: FontSize.size_mid,
    color: Color.colorAliceblue_300,
    textAlign: "center",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  gitlabChild: {
    height: "84.47%",
    bottom: "15.53%",
  },
  gitlabSeeklogocom1Icon: {
    width: 24,
    height: 22,
  },
  gitlab1: {
    left: "49.13%",
  },
  gitlabSeeklogocom1Parent: {
    left: 33,
    width: 86,
  },
  gitlab: {
    height: "26.11%",
    marginLeft: 6,
    bottom: "16.06%",
    width: 173,
    left: "50%",
    top: "57.83%",
    display: "none",
  },
  orWith: {
    left: "42.91%",
  },
  withChild: {
    right: "62.31%",
    left: "-0.05%",
  },
  withItem: {
    right: "-0.08%",
    left: "62.34%",
  },
  with: {
    height: "10.56%",
    top: "32.28%",
    bottom: "57.17%",
    display: "none",
    left: "0%",
    right: "0%",
    width: "100%",
  },
  loginButton: {
    top: 464,
    left: 28,
    width: 368,
    height: 180,
    position: "absolute",
  },
});

export default LoginButton;
