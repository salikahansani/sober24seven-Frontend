import React, { useMemo } from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Component = ({
  image33,
  component23Position,
  component23Width,
  component23Height,
  component23Top,
  component23Left,
  component23Elevation,
  pieHeight,
  pieWidth,
  pieTop,
  pieLeft,
  pieFontSize,
  pieColor,
  image33IconHeight,
  image33IconWidth,
  image33IconTop,
  image33IconRight,
  image33IconBottom,
  image33IconLeft,
}) => {
  const component23Style = useMemo(() => {
    return {
      ...getStyleValue("position", component23Position),
      ...getStyleValue("width", component23Width),
      ...getStyleValue("height", component23Height),
      ...getStyleValue("top", component23Top),
      ...getStyleValue("left", component23Left),
      ...getStyleValue("elevation", component23Elevation),
    };
  }, [
    component23Position,
    component23Width,
    component23Height,
    component23Top,
    component23Left,
    component23Elevation,
  ]);

  const pieStyle = useMemo(() => {
    return {
      ...getStyleValue("height", pieHeight),
      ...getStyleValue("width", pieWidth),
      ...getStyleValue("top", pieTop),
      ...getStyleValue("left", pieLeft),
      ...getStyleValue("fontSize", pieFontSize),
      ...getStyleValue("color", pieColor),
    };
  }, [pieHeight, pieWidth, pieTop, pieLeft, pieFontSize, pieColor]);

  const image33IconStyle = useMemo(() => {
    return {
      ...getStyleValue("height", image33IconHeight),
      ...getStyleValue("width", image33IconWidth),
      ...getStyleValue("top", image33IconTop),
      ...getStyleValue("right", image33IconRight),
      ...getStyleValue("bottom", image33IconBottom),
      ...getStyleValue("left", image33IconLeft),
    };
  }, [
    image33IconHeight,
    image33IconWidth,
    image33IconTop,
    image33IconRight,
    image33IconBottom,
    image33IconLeft,
  ]);

  return (
    <View style={[styles.component23, component23Style]}>
      <View style={styles.component23Child} />
      <Text style={[styles.pie, pieStyle]}>Pie</Text>
      <Image
        style={[styles.image33Icon, image33IconStyle]}
        contentFit="cover"
        source={image33}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  component23Child: {
    height: "100%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderRadius: Border.br_xs,
    backgroundColor: Color.neutralBackground,
    position: "absolute",
  },
  pie: {
    height: "30.8%",
    width: "50.84%",
    top: "11.35%",
    left: "31.28%",
    fontSize: 40,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.colorDarkslateblue_200,
    textAlign: "left",
    position: "absolute",
  },
  image33Icon: {
    height: "41.5%",
    width: "45.81%",
    top: "42%",
    right: "26.82%",
    bottom: "16.5%",
    left: "27.37%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  component23: {
    width: 179,
    height: 200,
  },
});

export default Component;
