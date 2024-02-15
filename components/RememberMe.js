import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const RememberMe = ({ rememberMePosition, rememberMeTop, rememberMeLeft }) => {
  const rememberMeStyle = useMemo(() => {
    return {
      ...getStyleValue("position", rememberMePosition),
      ...getStyleValue("top", rememberMeTop),
      ...getStyleValue("left", rememberMeLeft),
    };
  }, [rememberMePosition, rememberMeTop, rememberMeLeft]);

  return (
    <View style={[styles.rememberMe, rememberMeStyle]}>
      <Text style={styles.rememberMe1}>Remember Me</Text>
      <View style={styles.checkPosition}>
        <View style={[styles.checkChild, styles.checkPosition]} />
        <Image
          style={styles.checkItem}
          contentFit="cover"
          source={require("../assets/vector-3.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  checkPosition: {
    left: "0%",
    bottom: "0%",
    right: "0%",
    width: "100%",
    height: "100%",
    top: "0%",
    position: "absolute",
  },
  rememberMe1: {
    left: "135%",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.colorGray_600,
    textAlign: "left",
    top: "0%",
    position: "absolute",
  },
  checkChild: {
    borderRadius: Border.br_8xs,
    backgroundColor: Color.neutralBackground,
    borderStyle: "solid",
    borderColor: Color.colorLightgray_100,
    borderWidth: 1,
  },
  checkItem: {
    height: "45%",
    width: "60%",
    top: "30%",
    right: "20%",
    bottom: "25%",
    left: "20%",
    borderRadius: Border.br_12xs,
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  rememberMe: {
    width: 20,
    height: 20,
  },
});

export default RememberMe;
