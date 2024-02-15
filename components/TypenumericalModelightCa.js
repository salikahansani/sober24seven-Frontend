import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import Modelight from "./Modelight";
import ContainerForm from "./ContainerForm";
import { Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypenumericalModelightCa = ({
  vec,
  typenumericalModelightCaPosition,
  typenumericalModelightCaWidth,
  typenumericalModelightCaHeight,
  typenumericalModelightCaTop,
  typenumericalModelightCaLeft,
  typenumericalModelightCaBorderRadius,
}) => {
  const typenumericalModelightCaStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typenumericalModelightCaPosition),
      ...getStyleValue("width", typenumericalModelightCaWidth),
      ...getStyleValue("height", typenumericalModelightCaHeight),
      ...getStyleValue("top", typenumericalModelightCaTop),
      ...getStyleValue("left", typenumericalModelightCaLeft),
      ...getStyleValue("borderRadius", typenumericalModelightCaBorderRadius),
    };
  }, [
    typenumericalModelightCaPosition,
    typenumericalModelightCaWidth,
    typenumericalModelightCaHeight,
    typenumericalModelightCaTop,
    typenumericalModelightCaLeft,
    typenumericalModelightCaBorderRadius,
  ]);

  return (
    <View
      style={[styles.typenumericalModelightCa, typenumericalModelightCaStyle]}
    >
      <View style={styles.sec}>
        <Modelight
          prop="1"
          aBC=" "
          showABC
          modelightPosition="unset"
          modelightMarginLeft="unset"
        />
        <Modelight
          prop="2"
          aBC="ABC"
          showABC
          modelightPosition="unset"
          modelightMarginLeft={6}
        />
        <Modelight
          prop="3"
          aBC="DEF"
          showABC
          modelightPosition="unset"
          modelightMarginLeft={6}
        />
      </View>
      <View style={[styles.sec1, styles.secFlexBox]}>
        <Modelight
          prop="4"
          aBC="GHI"
          showABC
          modelightPosition="unset"
          modelightMarginLeft="unset"
        />
        <Modelight
          prop="5"
          aBC="JKL"
          showABC
          modelightPosition="unset"
          modelightMarginLeft={6}
        />
        <Modelight
          prop="6"
          aBC="MNO"
          showABC
          modelightPosition="unset"
          modelightMarginLeft={6}
        />
      </View>
      <View style={[styles.sec1, styles.secFlexBox]}>
        <Modelight
          prop="7"
          aBC="PQRS"
          showABC
          modelightPosition="unset"
          modelightMarginLeft="unset"
        />
        <Modelight
          prop="8"
          aBC="TUV"
          showABC
          modelightPosition="unset"
          modelightMarginLeft={6}
        />
        <Modelight
          prop="9"
          aBC="WXYZ"
          showABC
          modelightPosition="unset"
          modelightMarginLeft={6}
        />
      </View>
      <ContainerForm packageDimensions={require("../assets/vec1.png")} />
      <View style={styles.secFlexBox} />
    </View>
  );
};

const styles = StyleSheet.create({
  secFlexBox: {
    marginTop: 6,
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  sec: {
    flexDirection: "row",
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
  },
  sec1: {
    flexDirection: "row",
  },
  typenumericalModelightCa: {
    backgroundColor: Color.lightBGDefault,
    width: 375,
    height: 300,
    padding: Padding.p_7xs,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default TypenumericalModelightCa;
