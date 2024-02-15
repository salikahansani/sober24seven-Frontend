import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { Border, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const OnOffTrueDisabledFalse = ({
  onOffTrueDisabledFalsePosition,
  onOffTrueDisabledFalseWidth,
  onOffTrueDisabledFalseTop,
  onOffTrueDisabledFalseLeft,
  onOffTrueDisabledFalseHeight,
  onOffTrueDisabledFalseBorderRadius,
  containerBorderColor,
  circleBackgroundColor,
}) => {
  const onOffTrueDisabledFalseStyle = useMemo(() => {
    return {
      ...getStyleValue("position", onOffTrueDisabledFalsePosition),
      ...getStyleValue("width", onOffTrueDisabledFalseWidth),
      ...getStyleValue("top", onOffTrueDisabledFalseTop),
      ...getStyleValue("left", onOffTrueDisabledFalseLeft),
      ...getStyleValue("height", onOffTrueDisabledFalseHeight),
      ...getStyleValue("borderRadius", onOffTrueDisabledFalseBorderRadius),
    };
  }, [
    onOffTrueDisabledFalsePosition,
    onOffTrueDisabledFalseWidth,
    onOffTrueDisabledFalseTop,
    onOffTrueDisabledFalseLeft,
    onOffTrueDisabledFalseHeight,
    onOffTrueDisabledFalseBorderRadius,
  ]);

  const containerStyle = useMemo(() => {
    return {
      ...getStyleValue("borderColor", containerBorderColor),
    };
  }, [containerBorderColor]);

  const circleStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", circleBackgroundColor),
    };
  }, [circleBackgroundColor]);

  return (
    <View style={[styles.onOfftrueDisabledfalse, onOffTrueDisabledFalseStyle]}>
      <View style={[styles.container, containerStyle]}>
        <View style={[styles.circle, circleStyle]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    marginTop: -5,
    marginLeft: -5,
    top: "50%",
    left: "50%",
    borderRadius: Border.br_8xs,
    backgroundColor: Color.userAccentColorUACLight,
    width: 10,
    height: 10,
    position: "absolute",
  },
  container: {
    top: 2,
    left: 2,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    borderColor: Color.userAccentColorUACLight,
    borderWidth: 2,
    width: 20,
    height: 20,
    overflow: "hidden",
    position: "absolute",
  },
  onOfftrueDisabledfalse: {
    borderRadius: Border.br_xs,
    width: 24,
    height: 24,
  },
});

export default OnOffTrueDisabledFalse;
