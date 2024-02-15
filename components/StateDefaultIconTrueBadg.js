import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import NumberNotificationBadge from "./NumberNotificationBadge";
import { Padding, FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const StateDefaultIconTrueBadg = ({
  home,
  dashboard,
  trailingIcon,
  showHomeIcon,
  showTrailingIconBadge,
  showNumberNotificationBadge,
  trailingIcon1,
  stateDefaultIconTrueBadgPosition,
  stateDefaultIconTrueBadgWidth,
  stateDefaultIconTrueBadgTop,
  stateDefaultIconTrueBadgLeft,
  stateDefaultIconTrueBadgBackgroundColor,
  homeIconWidth,
  homeIconHeight,
  dashboardFontSize,
  dashboardLineHeight,
  dashboardLetterSpacing,
  dashboardFontFamily,
  dashboardColor,
  numberNotificationBadgeWidth,
  numberNotificationBadgeHeight,
  numberNotificationBadgeBackgroundColor,
  textLeft,
  textFontSize,
  textLineHeight,
  textColor,
  trailingIconWidth,
  trailingIconHeight,
}) => {
  const stateDefaultIconTrueBadgStyle = useMemo(() => {
    return {
      ...getStyleValue("position", stateDefaultIconTrueBadgPosition),
      ...getStyleValue("width", stateDefaultIconTrueBadgWidth),
      ...getStyleValue("top", stateDefaultIconTrueBadgTop),
      ...getStyleValue("left", stateDefaultIconTrueBadgLeft),
      ...getStyleValue(
        "backgroundColor",
        stateDefaultIconTrueBadgBackgroundColor
      ),
    };
  }, [
    stateDefaultIconTrueBadgPosition,
    stateDefaultIconTrueBadgWidth,
    stateDefaultIconTrueBadgTop,
    stateDefaultIconTrueBadgLeft,
    stateDefaultIconTrueBadgBackgroundColor,
  ]);

  const homeIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", homeIconWidth),
      ...getStyleValue("height", homeIconHeight),
    };
  }, [homeIconWidth, homeIconHeight]);

  const dashboardStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", dashboardFontSize),
      ...getStyleValue("lineHeight", dashboardLineHeight),
      ...getStyleValue("letterSpacing", dashboardLetterSpacing),
      ...getStyleValue("fontFamily", dashboardFontFamily),
      ...getStyleValue("color", dashboardColor),
    };
  }, [
    dashboardFontSize,
    dashboardLineHeight,
    dashboardLetterSpacing,
    dashboardFontFamily,
    dashboardColor,
  ]);

  const numberNotificationBadgeStyle = useMemo(() => {
    return {
      ...getStyleValue("width", numberNotificationBadgeWidth),
      ...getStyleValue("height", numberNotificationBadgeHeight),
      ...getStyleValue(
        "backgroundColor",
        numberNotificationBadgeBackgroundColor
      ),
    };
  }, [
    numberNotificationBadgeWidth,
    numberNotificationBadgeHeight,
    numberNotificationBadgeBackgroundColor,
  ]);

  const text2Style = useMemo(() => {
    return {
      ...getStyleValue("left", textLeft),
      ...getStyleValue("fontSize", textFontSize),
      ...getStyleValue("lineHeight", textLineHeight),
      ...getStyleValue("color", textColor),
    };
  }, [textLeft, textFontSize, textLineHeight, textColor]);

  const trailingIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", trailingIconWidth),
      ...getStyleValue("height", trailingIconHeight),
    };
  }, [trailingIconWidth, trailingIconHeight]);

  return (
    <View
      style={[styles.statedefaultIcontrueBadg, stateDefaultIconTrueBadgStyle]}
    >
      <View style={styles.leadingIconFlexBox}>
        <View style={[styles.leadingIcon, styles.leadingIconFlexBox]}>
          {showHomeIcon && (
            <Image
              style={[styles.homeIcon, homeIconStyle]}
              contentFit="cover"
              source={home}
            />
          )}
        </View>
        <View style={[styles.leadingIcon, styles.leadingIconFlexBox]}>
          <Text style={[styles.dashboard, dashboardStyle]}>{dashboard}</Text>
        </View>
      </View>
      {showTrailingIconBadge && (
        <View style={styles.trailingIconBadge}>
          <View style={styles.trailingIconBadge}>
            <NumberNotificationBadge
              numberNotificationBadgeBackgroundColor="#eff2f4"
              numberNotificationBadgeHeight={24}
              numberNotificationBadgeWidth={24}
              textColor="#0c7fda"
              textLeft={9}
              textFontSize={13}
              textLineHeight={29}
            />
          </View>
          {!trailingIcon1 && (
            <Image
              style={[styles.trailingIcon, trailingIconStyle]}
              contentFit="cover"
              source={trailingIcon}
            />
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  leadingIconFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  homeIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  leadingIcon: {
    padding: Padding.p_5xs,
  },
  dashboard: {
    fontSize: FontSize.body1Normal_size,
    letterSpacing: 0.2,
    lineHeight: 24,
    fontFamily: FontFamily.m3BodyLarge,
    color: Color.colorWhitesmoke_200,
    textAlign: "left",
  },
  trailingIconBadge: {
    flexDirection: "row",
  },
  trailingIcon: {
    width: 24,
    height: 24,
    display: "none",
  },
  statedefaultIcontrueBadg: {
    borderRadius: Border.br_9xs,
    width: 277,
    justifyContent: "space-between",
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: 0,
    alignItems: "center",
    flexDirection: "row",
  },
});

export default StateDefaultIconTrueBadg;
