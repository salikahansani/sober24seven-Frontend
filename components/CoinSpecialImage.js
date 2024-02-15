import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CoinSpecialImage = ({
  coinSpecialImageCoinSpeci,
  coinSpecialIconPosition,
  coinSpecialIconWidth,
  coinSpecialIconHeight,
  coinSpecialIconTop,
  coinSpecialIconLeft,
}) => {
  const coinSpecialIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", coinSpecialIconPosition),
      ...getStyleValue("width", coinSpecialIconWidth),
      ...getStyleValue("height", coinSpecialIconHeight),
      ...getStyleValue("top", coinSpecialIconTop),
      ...getStyleValue("left", coinSpecialIconLeft),
    };
  }, [
    coinSpecialIconPosition,
    coinSpecialIconWidth,
    coinSpecialIconHeight,
    coinSpecialIconTop,
    coinSpecialIconLeft,
  ]);

  return (
    <Image
      style={[styles.coinSpecialIcon, coinSpecialIconStyle]}
      contentFit="cover"
      source={coinSpecialImageCoinSpeci}
    />
  );
};

const styles = StyleSheet.create({
  coinSpecialIcon: {
    width: 54,
    height: 54,
    overflow: "hidden",
  },
});

export default CoinSpecialImage;
