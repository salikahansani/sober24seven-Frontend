import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";
import { Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const ColorClearImage = ({
  colorClearImageColorClear,
  colorClearIconPosition,
  colorClearIconTop,
  colorClearIconLeft,
  colorClearIconBorderRadius,
  colorClearIconWidth,
  colorClearIconHeight,
}) => {
  const colorClearIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", colorClearIconPosition),
      ...getStyleValue("top", colorClearIconTop),
      ...getStyleValue("left", colorClearIconLeft),
      ...getStyleValue("borderRadius", colorClearIconBorderRadius),
      ...getStyleValue("width", colorClearIconWidth),
      ...getStyleValue("height", colorClearIconHeight),
    };
  }, [
    colorClearIconPosition,
    colorClearIconTop,
    colorClearIconLeft,
    colorClearIconBorderRadius,
    colorClearIconWidth,
    colorClearIconHeight,
  ]);

  return (
    <Image
      style={[styles.colorclearIcon, colorClearIconStyle]}
      contentFit="cover"
      source={colorClearImageColorClear}
    />
  );
};

const styles = StyleSheet.create({
  colorclearIcon: {
    borderRadius: Border.br_xl,
    width: 54,
    height: 21,
    overflow: "hidden",
  },
});

export default ColorClearImage;
