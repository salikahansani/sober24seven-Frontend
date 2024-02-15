import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import Btnoutlinesmall from "./Btnoutlinesmall";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const SizeSmallIconNoneStateD = ({
  icon,
  textButton,
  chevronRight,
  sizeSmallIconNoneStateDPosition,
  btnsmallBorderRadius,
  btnsmallBorderWidth,
  btnsmallPaddingHorizontal,
  btnsmallPaddingVertical,
  iconWidth,
  iconHeight,
  textButtonFontSize,
  textButtonLineHeight,
  textButtonMarginLeft,
  chevronRightIconWidth,
  chevronRightIconHeight,
  chevronRightIconMarginLeft,
}) => {
  const sizeSmallIconNoneStateDStyle = useMemo(() => {
    return {
      ...getStyleValue("position", sizeSmallIconNoneStateDPosition),
    };
  }, [sizeSmallIconNoneStateDPosition]);

  const btnsmallStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", btnsmallBorderRadius),
      ...getStyleValue("borderWidth", btnsmallBorderWidth),
      ...getStyleValue("paddingHorizontal", btnsmallPaddingHorizontal),
      ...getStyleValue("paddingVertical", btnsmallPaddingVertical),
    };
  }, [
    btnsmallBorderRadius,
    btnsmallBorderWidth,
    btnsmallPaddingHorizontal,
    btnsmallPaddingVertical,
  ]);

  const iconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", iconWidth),
      ...getStyleValue("height", iconHeight),
    };
  }, [iconWidth, iconHeight]);

  const textButtonStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", textButtonFontSize),
      ...getStyleValue("lineHeight", textButtonLineHeight),
      ...getStyleValue("marginLeft", textButtonMarginLeft),
    };
  }, [textButtonFontSize, textButtonLineHeight, textButtonMarginLeft]);

  const chevronRightIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", chevronRightIconWidth),
      ...getStyleValue("height", chevronRightIconHeight),
      ...getStyleValue("marginLeft", chevronRightIconMarginLeft),
    };
  }, [
    chevronRightIconWidth,
    chevronRightIconHeight,
    chevronRightIconMarginLeft,
  ]);

  return (
    <View>
      <Btnoutlinesmall
        icon={require("../assets/icon4.png")}
        textButton="Small"
        chevronRight={require("../assets/chevronright1.png")}
        showIcon={false}
        btnoutlinesmallPosition="unset"
        btnsmallBorderColor="#edf2f7"
        btnsmallBorderRadius={4}
        btnsmallBorderWidth={1}
        btnsmallPaddingHorizontal="unset"
        btnsmallPaddingVertical="unset"
        iconWidth={10}
        iconHeight={10}
        textButtonColor="#16192c"
        textButtonFontSize={10}
        textButtonLineHeight={10}
        textButtonMarginLeft={6}
        chevronRightIconWidth={8}
        chevronRightIconHeight={8}
        chevronRightIconMarginLeft={6}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SizeSmallIconNoneStateD;
