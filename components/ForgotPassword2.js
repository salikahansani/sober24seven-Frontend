import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ForgotPassword2 = ({
  forgotPassword,
  forgotPasswordPosition,
  forgotPasswordTop,
  forgotPasswordLeft,
}) => {
  const forgotPasswordStyle = useMemo(() => {
    return {
      ...getStyleValue("position", forgotPasswordPosition),
      ...getStyleValue("top", forgotPasswordTop),
      ...getStyleValue("left", forgotPasswordLeft),
    };
  }, [forgotPasswordPosition, forgotPasswordTop, forgotPasswordLeft]);

  return (
    <View style={[styles.forgotPassword, forgotPasswordStyle]}>
      <Text style={styles.forgotPassword1}>{forgotPassword}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  forgotPassword1: {
    position: "absolute",
    top: "0%",
    left: "0%",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.colorCrimson_100,
    textAlign: "left",
  },
  forgotPassword: {
    width: 111,
    height: 19,
  },
});

export default ForgotPassword2;
