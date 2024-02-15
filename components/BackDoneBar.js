import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BackDoneBar = ({
  iconsarrowBack24px,
  showDone,
  backDoneBarPosition,
  backDoneBarTop,
  backDoneBarLeft,
  backDoneBarHeight,
}) => {
  const backDoneBarStyle = useMemo(() => {
    return {
      ...getStyleValue("position", backDoneBarPosition),
      ...getStyleValue("top", backDoneBarTop),
      ...getStyleValue("left", backDoneBarLeft),
      ...getStyleValue("height", backDoneBarHeight),
    };
  }, [backDoneBarPosition, backDoneBarTop, backDoneBarLeft, backDoneBarHeight]);

  return (
    <View style={[styles.backDoneBar, backDoneBarStyle]}>
      <Image
        style={styles.iconsarrowBack24px}
        contentFit="cover"
        source={iconsarrowBack24px}
      />
      {showDone && <Text style={styles.done}>Done</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  iconsarrowBack24px: {
    height: "93.75%",
    width: "9.74%",
    top: "0%",
    right: "90.26%",
    bottom: "6.25%",
    left: "0%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  done: {
    top: 0,
    left: 247,
    fontSize: FontSize.body1Normal_size,
    letterSpacing: 0,
    lineHeight: 24,
    textTransform: "uppercase",
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.m3RefNeutralNeutral5,
    textAlign: "right",
    display: "flex",
    alignItems: "center",
    width: 61,
    position: "absolute",
    height: 32,
  },
  backDoneBar: {
    width: 308,
    height: 32,
  },
});

export default BackDoneBar;
