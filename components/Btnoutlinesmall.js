import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import Btnsmall from "./Btnsmall";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Btnoutlinesmall = ({
  icon,
  textButton,
  chevronRight,
  showIcon,
  btnoutlinesmallPosition,
  btnsmallBorderColor,
  btnsmallBorderRadius,
  btnsmallBorderWidth,
  btnsmallPaddingHorizontal,
  btnsmallPaddingVertical,
  iconWidth,
  iconHeight,
  textButtonColor,
  textButtonFontSize,
  textButtonLineHeight,
  textButtonMarginLeft,
  chevronRightIconWidth,
  chevronRightIconHeight,
  chevronRightIconMarginLeft,
}) => {
  const btnoutlinesmallStyle = useMemo(() => {
    return {
      ...getStyleValue("position", btnoutlinesmallPosition),
    };
  }, [btnoutlinesmallPosition]);

  const btnsmallStyle = useMemo(() => {
    return {
      ...getStyleValue("borderColor", btnsmallBorderColor),
      ...getStyleValue("borderRadius", btnsmallBorderRadius),
      ...getStyleValue("borderWidth", btnsmallBorderWidth),
      ...getStyleValue("paddingHorizontal", btnsmallPaddingHorizontal),
      ...getStyleValue("paddingVertical", btnsmallPaddingVertical),
    };
  }, [
    btnsmallBorderColor,
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
      ...getStyleValue("color", textButtonColor),
      ...getStyleValue("fontSize", textButtonFontSize),
      ...getStyleValue("lineHeight", textButtonLineHeight),
      ...getStyleValue("marginLeft", textButtonMarginLeft),
    };
  }, [
    textButtonColor,
    textButtonFontSize,
    textButtonLineHeight,
    textButtonMarginLeft,
  ]);

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
      <Btnsmall
        icon={require("../assets/icon5.png")}
        textButton="Small"
        chevronRight={require("../assets/chevronright1.png")}
        showIcon
        showChevronRightIcon={false}
        btnsmallPosition="unset"
        btnsmallBackgroundColor="unset"
        btnsmallBorderStyle="solid"
        btnsmallBorderColor="#3754db"
        btnsmallBorderWidth={1}
        btnsmallBorderRadius={4}
        btnsmallPaddingHorizontal="unset"
        btnsmallPaddingVertical="unset"
        iconWidth={10}
        iconHeight={10}
        textButtonColor="#3754db"
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

export default Btnoutlinesmall;
