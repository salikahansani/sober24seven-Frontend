import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const LoginContainer1 = ({
  buttonText,
  actionText,
  componentSize,
  showGithub,
  showGitlab,
  showWith,
  loginButtonPosition,
  loginButtonWidth,
  loginButtonHeight,
  loginButtonTop,
  loginButtonRight,
  loginButtonBottom,
  loginButtonLeft,
  rectangleViewBackgroundColor,
  rectangleViewHeight,
  rectangleViewBottom,
  githubHeight,
  githubTop,
  groupViewTop,
  groupViewHeight,
  gitHubTop,
  loginLeft,
  loginColor,
  loginTop,
  gitlabHeight,
  gitlabTop,
  groupViewTop1,
  groupViewHeight1,
  gitLabTop,
  withHeight,
  withTop,
  withBottom,
  lineViewTop,
  lineViewBottom,
  lineViewTop1,
  lineViewBottom1,
}) => {
  const loginButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("position", loginButtonPosition),
      ...getStyleValue("width", loginButtonWidth),
      ...getStyleValue("height", loginButtonHeight),
      ...getStyleValue("top", loginButtonTop),
      ...getStyleValue("right", loginButtonRight),
      ...getStyleValue("bottom", loginButtonBottom),
      ...getStyleValue("left", loginButtonLeft),
    };
  }, [
    loginButtonPosition,
    loginButtonWidth,
    loginButtonHeight,
    loginButtonTop,
    loginButtonRight,
    loginButtonBottom,
    loginButtonLeft,
  ]);

  const rectangleViewStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", rectangleViewBackgroundColor),
      ...getStyleValue("height", rectangleViewHeight),
      ...getStyleValue("bottom", rectangleViewBottom),
    };
  }, [rectangleViewBackgroundColor, rectangleViewHeight, rectangleViewBottom]);

  const githubStyle = useMemo(() => {
    return {
      ...getStyleValue("height", githubHeight),
      ...getStyleValue("top", githubTop),
    };
  }, [githubHeight, githubTop]);

  const groupViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", groupViewTop),
      ...getStyleValue("height", groupViewHeight),
    };
  }, [groupViewTop, groupViewHeight]);

  const gitHubStyle = useMemo(() => {
    return {
      ...getStyleValue("top", gitHubTop),
    };
  }, [gitHubTop]);

  const loginStyle = useMemo(() => {
    return {
      ...getStyleValue("left", loginLeft),
      ...getStyleValue("color", loginColor),
      ...getStyleValue("top", loginTop),
    };
  }, [loginLeft, loginColor, loginTop]);

  const gitlabStyle = useMemo(() => {
    return {
      ...getStyleValue("height", gitlabHeight),
      ...getStyleValue("top", gitlabTop),
    };
  }, [gitlabHeight, gitlabTop]);

  const groupView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", groupViewTop1),
      ...getStyleValue("height", groupViewHeight1),
    };
  }, [groupViewTop1, groupViewHeight1]);

  const gitLabStyle = useMemo(() => {
    return {
      ...getStyleValue("top", gitLabTop),
    };
  }, [gitLabTop]);

  const withStyle = useMemo(() => {
    return {
      ...getStyleValue("height", withHeight),
      ...getStyleValue("top", withTop),
      ...getStyleValue("bottom", withBottom),
    };
  }, [withHeight, withTop, withBottom]);

  const lineViewStyle = useMemo(() => {
    return {
      ...getStyleValue("top", lineViewTop),
      ...getStyleValue("bottom", lineViewBottom),
    };
  }, [lineViewTop, lineViewBottom]);

  const lineView1Style = useMemo(() => {
    return {
      ...getStyleValue("top", lineViewTop1),
      ...getStyleValue("bottom", lineViewBottom1),
    };
  }, [lineViewTop1, lineViewBottom1]);

  return (
    <View style={[styles.loginButton, loginButtonStyle]}>
      <View style={[styles.loginButtonChild, rectangleViewStyle]} />
      {showGithub && (
        <View style={[styles.github, styles.githubPosition, githubStyle]}>
          <View style={styles.githubChild} />
          <View
            style={[
              styles.iconmonstrGithub11Parent,
              styles.iconmonstrLayout,
              groupViewStyle,
            ]}
          >
            <Image
              style={[
                styles.iconmonstrGithub11,
                styles.iconmonstrGithub11Position,
              ]}
              contentFit="cover"
              source={buttonText}
            />
            <Text style={[styles.github1, styles.orWithTypo, gitHubStyle]}>
              GitHub
            </Text>
          </View>
        </View>
      )}
      <Text style={[styles.login, loginStyle]}>{actionText}</Text>
      {showGitlab && (
        <View style={[styles.gitlab, styles.githubPosition, gitlabStyle]}>
          <View style={styles.githubChild} />
          <View
            style={[
              styles.gitlabSeeklogocom1Parent,
              styles.gitlabLayout,
              groupView1Style,
            ]}
          >
            <Image
              style={[styles.gitlabSeeklogocom1Icon, styles.gitlabLayout]}
              contentFit="cover"
              source={componentSize}
            />
            <Text style={[styles.gitlab1, styles.orWithTypo, gitLabStyle]}>
              GitLab
            </Text>
          </View>
        </View>
      )}
      {showWith && (
        <View style={[styles.with, withStyle]}>
          <Text style={[styles.orWith, styles.orWithTypo]}>Or With</Text>
          <View
            style={[styles.withChild, styles.withPosition, lineViewStyle]}
          />
          <View
            style={[styles.withItem, styles.withPosition, lineView1Style]}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  githubPosition: {
    width: 173,
    left: "50%",
    bottom: "20.1%",
    top: "57.84%",
    height: "22.06%",
    position: "absolute",
  },
  iconmonstrLayout: {
    height: 23,
    position: "absolute",
  },
  iconmonstrGithub11Position: {
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  orWithTypo: {
    textAlign: "left",
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  gitlabLayout: {
    height: 22,
    position: "absolute",
  },
  withPosition: {
    borderTopWidth: 0.5,
    borderColor: Color.colorBlack,
    bottom: "45.79%",
    top: "51.58%",
    width: "37.74%",
    height: "2.63%",
    borderStyle: "solid",
    position: "absolute",
  },
  loginButtonChild: {
    bottom: "77.94%",
    backgroundColor: Color.colorNavy_100,
    borderRadius: Border.br_8xs,
    height: "22.06%",
    left: "0%",
    right: "0%",
    top: "0%",
    width: "100%",
    position: "absolute",
  },
  githubChild: {
    height: "100%",
    marginLeft: -86.5,
    bottom: "0%",
    backgroundColor: Color.neutralBackground,
    borderColor: Color.colorLightgray_100,
    borderWidth: 1,
    borderStyle: "solid",
    width: 173,
    left: "50%",
    borderRadius: Border.br_8xs,
    top: "0%",
    position: "absolute",
  },
  iconmonstrGithub11: {
    width: 23,
    height: 23,
    position: "absolute",
  },
  github1: {
    top: "8.7%",
    left: "42.68%",
  },
  iconmonstrGithub11Parent: {
    left: 35,
    width: 82,
    top: 11,
  },
  github: {
    marginLeft: -179.5,
  },
  login: {
    top: "5.39%",
    left: "43.73%",
    fontSize: FontSize.size_mid,
    color: Color.neutralBackground,
    textAlign: "center",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  gitlabSeeklogocom1Icon: {
    width: 24,
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  gitlab1: {
    top: "9.05%",
    left: "45%",
  },
  gitlabSeeklogocom1Parent: {
    left: 37,
    width: 80,
    top: 11,
  },
  gitlab: {
    marginLeft: 6.5,
  },
  orWith: {
    left: "42.9%",
    top: "0%",
    color: Color.colorGray_200,
    fontSize: FontSize.size_sm,
  },
  withChild: {
    right: "62.31%",
    left: "-0.06%",
  },
  withItem: {
    right: "-0.06%",
    left: "62.31%",
  },
  with: {
    height: "9.31%",
    top: "32.84%",
    bottom: "57.84%",
    left: "0%",
    right: "0%",
    width: "100%",
    position: "absolute",
  },
  loginButton: {
    width: 359,
    height: 204,
  },
});

export default LoginContainer1;
