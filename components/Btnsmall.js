import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Btnsmall = ({
  icon,
  textButton,
  chevronRight,
  showIcon,
  showChevronRightIcon,
  btnsmallPosition,
  btnsmallBackgroundColor,
  btnsmallBorderStyle,
  btnsmallBorderColor,
  btnsmallBorderWidth,
  btnsmallBorderRadius,
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
  const btnsmallStyle = useMemo(() => {
    return {
      ...getStyleValue("position", btnsmallPosition),
      ...getStyleValue("backgroundColor", btnsmallBackgroundColor),
      ...getStyleValue("borderStyle", btnsmallBorderStyle),
      ...getStyleValue("borderColor", btnsmallBorderColor),
      ...getStyleValue("borderWidth", btnsmallBorderWidth),
      ...getStyleValue("borderRadius", btnsmallBorderRadius),
      ...getStyleValue("paddingHorizontal", btnsmallPaddingHorizontal),
      ...getStyleValue("paddingVertical", btnsmallPaddingVertical),
    };
  }, [
    btnsmallPosition,
    btnsmallBackgroundColor,
    btnsmallBorderStyle,
    btnsmallBorderColor,
    btnsmallBorderWidth,
    btnsmallBorderRadius,
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
    <View style={[styles.btnsmall, btnsmallStyle]}>
      <View style={styles.elements}>
        {showIcon && (
          <Image
            style={[styles.icon, iconStyle]}
            contentFit="cover"
            source={icon}
          />
        )}
        <Text style={[styles.textButton, textButtonStyle]}>{textButton}</Text>
        {showChevronRightIcon && (
          <Image
            style={[styles.chevronRightIcon, chevronRightIconStyle]}
            contentFit="cover"
            source={chevronRight}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 10,
    height: 10,
  },
  textButton: {
    fontSize: FontSize.buttonSmall_size,
    lineHeight: 10,
    fontWeight: "600",
    fontFamily: FontFamily.headingsH5,
    color: Color.themeDarkDefault,
    textAlign: "left",
    marginLeft: 6,
  },
  chevronRightIcon: {
    width: 8,
    height: 8,
    marginLeft: 6,
  },
  elements: {
    flexDirection: "row",
    alignItems: "center",
  },
  btnsmall: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.themeSecondaryDefault,
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_5xs,
    alignItems: "center",
  },
});

export default Btnsmall;
