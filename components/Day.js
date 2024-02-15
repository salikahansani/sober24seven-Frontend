import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Day = ({
  check,
  dayName = "Saturday",
  dayPosition,
  dayMarginTop,
  dayTop,
  dayLeft,
  checkIconWidth,
  checkIconHeight,
  saturdayFontSize,
  saturdayLetterSpacing,
  saturdayColor,
  saturdayMarginLeft,
}) => {
  const dayStyle = useMemo(() => {
    return {
      ...getStyleValue("position", dayPosition),
      ...getStyleValue("marginTop", dayMarginTop),
      ...getStyleValue("top", dayTop),
      ...getStyleValue("left", dayLeft),
    };
  }, [dayPosition, dayMarginTop, dayTop, dayLeft]);

  const checkIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", checkIconWidth),
      ...getStyleValue("height", checkIconHeight),
    };
  }, [checkIconWidth, checkIconHeight]);

  const saturdayStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", saturdayFontSize),
      ...getStyleValue("letterSpacing", saturdayLetterSpacing),
      ...getStyleValue("color", saturdayColor),
      ...getStyleValue("marginLeft", saturdayMarginLeft),
    };
  }, [
    saturdayFontSize,
    saturdayLetterSpacing,
    saturdayColor,
    saturdayMarginLeft,
  ]);

  return (
    <View style={[styles.day, dayStyle]}>
      <Image
        style={[styles.checkIcon, checkIconStyle]}
        contentFit="cover"
        source={check}
      />
      <Text style={[styles.saturday, saturdayStyle]}>{dayName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  checkIcon: {
    width: 48,
    height: 48,
  },
  saturday: {
    fontSize: 36,
    letterSpacing: -0.2,
    textTransform: "capitalize",
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: "#ff7800",
    textAlign: "left",
    marginLeft: 16,
  },
  day: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default Day;
