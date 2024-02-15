import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDefaultLabelyesSele = ({
  label,
  stateDefaultLabelyesSelePosition,
  stateDefaultLabelyesSeleAlignSelf,
  stateDefaultLabelyesSeleWidth,
  labelFontSize,
  labelLineHeight,
}) => {
  const stateDefaultLabelyesSeleStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateDefaultLabelyesSelePosition),
      ...getStyleValue("alignSelf", stateDefaultLabelyesSeleAlignSelf),
      ...getStyleValue("width", stateDefaultLabelyesSeleWidth),
    };
  }, [
    stateDefaultLabelyesSelePosition,
    stateDefaultLabelyesSeleAlignSelf,
    stateDefaultLabelyesSeleWidth,
  ]);

  const labelStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", labelFontSize),
      ...getStyleValue("lineHeight", labelLineHeight),
    };
  }, [labelFontSize, labelLineHeight]);

  return (
    <View
      style={[
        styles.statedefaultLabelyesSele,
        styles.radioWrapperFlexBox,
        stateDefaultLabelyesSeleStyle,
      ]}
    >
      <View style={[styles.radioWrapper, styles.radioWrapperFlexBox]}>
        <Image
          style={styles.controllerIcon}
          contentFit="cover"
          source={require("../assets/controller.png")}
        />
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  radioWrapperFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  controllerIcon: {
    width: 24,
    height: 24,
  },
  label: {
    flex: 1,
    fontSize: FontSize.body1Normal_size,
    lineHeight: 24,
    fontFamily: FontFamily.body1Normal,
    color: Color.gray700,
    textAlign: "left",
    marginLeft: 8,
  },
  radioWrapper: {
    alignSelf: "stretch",
    borderRadius: Border.br_5xs,
    flexDirection: "row",
    padding: Padding.p_5xs,
  },
  statedefaultLabelyesSele: {
    alignSelf: "stretch",
  },
});

export default StateDefaultLabelyesSele;
