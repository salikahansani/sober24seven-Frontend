import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NumberNotificationBadge = ({
  numberNotificationBadgeBackgroundColor,
  numberNotificationBadgeHeight,
  numberNotificationBadgeWidth,
  textColor,
  textLeft,
  textFontSize,
  textLineHeight,
}) => {
  const numberNotificationBadgeStyle = useMemo(() => {
    return {
      ...getStyleValue(
        "backgroundColor",
        numberNotificationBadgeBackgroundColor
      ),
      ...getStyleValue("height", numberNotificationBadgeHeight),
      ...getStyleValue("width", numberNotificationBadgeWidth),
    };
  }, [
    numberNotificationBadgeBackgroundColor,
    numberNotificationBadgeHeight,
    numberNotificationBadgeWidth,
  ]);

  const text2Style = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
      ...getStyleValue("left", textLeft),
      ...getStyleValue("fontSize", textFontSize),
      ...getStyleValue("lineHeight", textLineHeight),
    };
  }, [textColor, textLeft, textFontSize, textLineHeight]);

  return (
    <View
      style={[styles.numberNotificationBadge, numberNotificationBadgeStyle]}
    >
      <Text style={[styles.text, text2Style]}>1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    position: "absolute",
    top: -2,
    left: 9,
    fontSize: FontSize.size_smi,
    lineHeight: 29,
    fontFamily: FontFamily.m3BodyLarge,
    color: "#333f49",
    textAlign: "left",
  },
  numberNotificationBadge: {
    borderRadius: Border.br_9xs,
    backgroundColor: "rgba(207, 232, 252, 0.46)",
    width: 24,
    height: 24,
    overflow: "hidden",
  },
});

export default NumberNotificationBadge;
