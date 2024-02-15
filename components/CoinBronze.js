import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { Color, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CoinBronze = ({
  group981,
  coinBronzePosition,
  coinBronzeWidth,
  coinBronzeHeight,
  coinBronzeTop,
  coinBronzeLeft,
  groupIconHeight,
  groupIconWidth,
  groupIconTop,
  groupIconRight,
  groupIconBottom,
  groupIconLeft,
  numberAwardTitleHeight,
  numberAwardTitleWidth,
  numberAwardTitleTop,
  numberAwardTitleRight,
  numberAwardTitleBottom,
  numberAwardTitleLeft,
  weekTop,
  weekFontSize,
  weekLineHeight,
  textLeft,
  textFontSize,
  textLineHeight,
}) => {
  const coinBronzeStyle = useMemo(() => {
    return {
      ...getStyleValue("position", coinBronzePosition),
      ...getStyleValue("width", coinBronzeWidth),
      ...getStyleValue("height", coinBronzeHeight),
      ...getStyleValue("top", coinBronzeTop),
      ...getStyleValue("left", coinBronzeLeft),
    };
  }, [
    coinBronzePosition,
    coinBronzeWidth,
    coinBronzeHeight,
    coinBronzeTop,
    coinBronzeLeft,
  ]);

  const groupIconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", groupIconHeight),
      ...getStyleValue("width", groupIconWidth),
      ...getStyleValue("top", groupIconTop),
      ...getStyleValue("right", groupIconRight),
      ...getStyleValue("bottom", groupIconBottom),
      ...getStyleValue("left", groupIconLeft),
    };
  }, [
    groupIconHeight,
    groupIconWidth,
    groupIconTop,
    groupIconRight,
    groupIconBottom,
    groupIconLeft,
  ]);

  const numberAwardTitleStyle = useMemo(() => {
    return {
      ...getStyleValue("height", numberAwardTitleHeight),
      ...getStyleValue("width", numberAwardTitleWidth),
      ...getStyleValue("top", numberAwardTitleTop),
      ...getStyleValue("right", numberAwardTitleRight),
      ...getStyleValue("bottom", numberAwardTitleBottom),
      ...getStyleValue("left", numberAwardTitleLeft),
    };
  }, [
    numberAwardTitleHeight,
    numberAwardTitleWidth,
    numberAwardTitleTop,
    numberAwardTitleRight,
    numberAwardTitleBottom,
    numberAwardTitleLeft,
  ]);

  const weekStyle = useMemo(() => {
    return {
      ...getStyleValue("top", weekTop),
      ...getStyleValue("fontSize", weekFontSize),
      ...getStyleValue("lineHeight", weekLineHeight),
    };
  }, [weekTop, weekFontSize, weekLineHeight]);

  const text1Style = useMemo(() => {
    return {
      ...getStyleValue("left", textLeft),
      ...getStyleValue("fontSize", textFontSize),
      ...getStyleValue("lineHeight", textLineHeight),
    };
  }, [textLeft, textFontSize, textLineHeight]);

  return (
    <View style={[styles.coinBronze, coinBronzeStyle]}>
      <Image
        style={[styles.coinBronzeChild, groupIconStyle]}
        contentFit="cover"
        source={group981}
      />
      <View style={[styles.numberAwardTitle, numberAwardTitleStyle]}>
        <Text style={[styles.week, styles.weekTypo, weekStyle]}>Week</Text>
        <Text style={[styles.text, styles.weekTypo, text1Style]}>1</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  weekTypo: {
    textAlign: "center",
    color: Color.colorSandybrown,
    fontFamily: FontFamily.modak,
    letterSpacing: 0,
    position: "absolute",
  },
  coinBronzeChild: {
    height: "88.33%",
    width: "86.85%",
    top: "4.81%",
    right: "6.48%",
    bottom: "6.85%",
    left: "6.67%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  week: {
    width: "100%",
    top: "59.71%",
    left: "0%",
    fontSize: 6,
    lineHeight: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    top: "0%",
    left: "30.73%",
    fontSize: 20,
    lineHeight: 25,
  },
  numberAwardTitle: {
    height: "50.56%",
    width: "37.96%",
    top: "22.22%",
    right: "32.41%",
    bottom: "27.22%",
    left: "29.63%",
    position: "absolute",
  },
  coinBronze: {
    width: 54,
    height: 54,
    overflow: "hidden",
  },
});

export default CoinBronze;
