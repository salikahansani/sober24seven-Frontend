import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const GroupComponent = ({
  email,
  sophatleatnintrealive,
  groupViewPosition,
  groupViewTop,
  groupViewLeft,
  groupViewWidth,
  groupViewHeight,
  rectangleViewBorderRadius,
  rectangleViewBorderColor,
  sophatleatnintrealiveColor,
}) => {
  const groupView2Style = useMemo(() => {
    return {
      ...getStyleValue("position", groupViewPosition),
      ...getStyleValue("top", groupViewTop),
      ...getStyleValue("left", groupViewLeft),
      ...getStyleValue("width", groupViewWidth),
      ...getStyleValue("height", groupViewHeight),
    };
  }, [
    groupViewPosition,
    groupViewTop,
    groupViewLeft,
    groupViewWidth,
    groupViewHeight,
  ]);

  const rectangleView1Style = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", rectangleViewBorderRadius),
      ...getStyleValue("borderColor", rectangleViewBorderColor),
    };
  }, [rectangleViewBorderRadius, rectangleViewBorderColor]);

  const sophatleatnintrealiveStyle = useMemo(() => {
    return {
      ...getStyleValue("color", sophatleatnintrealiveColor),
    };
  }, [sophatleatnintrealiveColor]);

  return (
    <View style={[styles.emailParent, groupView2Style]}>
      <Text style={[styles.email, styles.emailTypo]}>{email}</Text>
      <View style={[styles.componentChild, rectangleView1Style]} />
      <Text
        style={[
          styles.sophatleatnintrealive,
          styles.emailTypo,
          sophatleatnintrealiveStyle,
        ]}
      >
        {sophatleatnintrealive}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  emailTypo: {
    textAlign: "left",
    color: Color.colorMidnightblue_200,
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  email: {
    top: "0%",
    left: "0%",
  },
  componentChild: {
    height: "61.19%",
    width: "100%",
    top: "38.81%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_10xs,
    backgroundColor: Color.neutralBackground,
    borderStyle: "solid",
    borderColor: Color.colorLightgray_100,
    borderWidth: 1,
    left: "0%",
    position: "absolute",
  },
  sophatleatnintrealive: {
    top: "53.73%",
    left: "3.62%",
  },
  emailParent: {
    width: 359,
    height: 67,
  },
});

export default GroupComponent;
