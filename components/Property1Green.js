import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Property1Green = ({
  letter = "A",
  property1GreenPosition,
  property1GreenBackgroundColor,
}) => {
  const property1GreenStyle = useMemo(() => {
    return {
      ...getStyleValue("position", property1GreenPosition),
      ...getStyleValue("backgroundColor", property1GreenBackgroundColor),
    };
  }, [property1GreenPosition, property1GreenBackgroundColor]);

  return (
    <View style={[styles.property1green, property1GreenStyle]}>
      <Text style={styles.a}>{letter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  a: {
    fontSize: FontSize.size_7xl,
    fontFamily: FontFamily.interRegular,
    color: Color.neutralBackground,
    textAlign: "right",
  },
  property1green: {
    borderRadius: Border.br_81xl,
    backgroundColor: "#2b9a66",
    width: 50,
    height: 50,
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
  },
});

export default Property1Green;
