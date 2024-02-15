import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const VisibleNOImage = ({
  visibleNOImageVisibleNO,
  visibleNOIconPosition,
  visibleNOIconTop,
  visibleNOIconRight,
  visibleNOIconLeft,
  visibleNOIconOverflow,
  visibleNOIconHeight,
}) => {
  const visibleNOIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", visibleNOIconPosition),
      ...getStyleValue("top", visibleNOIconTop),
      ...getStyleValue("right", visibleNOIconRight),
      ...getStyleValue("left", visibleNOIconLeft),
      ...getStyleValue("overflow", visibleNOIconOverflow),
      ...getStyleValue("height", visibleNOIconHeight),
    };
  }, [
    visibleNOIconPosition,
    visibleNOIconTop,
    visibleNOIconRight,
    visibleNOIconLeft,
    visibleNOIconOverflow,
    visibleNOIconHeight,
  ]);

  return (
    <Image
      style={[styles.visiblenoIcon, visibleNOIconStyle]}
      contentFit="cover"
      source={visibleNOImageVisibleNO}
    />
  );
};

const styles = StyleSheet.create({
  visiblenoIcon: {
    height: 30,
  },
});

export default VisibleNOImage;
