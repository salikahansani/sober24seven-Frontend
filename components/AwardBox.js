import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const AwardBox = ({
  monthStreakBadge,
  congratulationsYouWereDil,
  icon,
  awardBoxPosition,
  awardBoxTop,
  awardBoxLeft,
  awardBoxWidth,
  congratulationsYouWereTop,
  plusFABRoundedBackgroundColor,
}) => {
  const awardBoxStyle = useMemo(() => {
    return {
      ...getStyleValue("position", awardBoxPosition),
      ...getStyleValue("top", awardBoxTop),
      ...getStyleValue("left", awardBoxLeft),
      ...getStyleValue("width", awardBoxWidth),
    };
  }, [awardBoxPosition, awardBoxTop, awardBoxLeft, awardBoxWidth]);

  const congratulationsYouWereStyle = useMemo(() => {
    return {
      ...getStyleValue("top", congratulationsYouWereTop),
    };
  }, [congratulationsYouWereTop]);

  const plusFABRoundedStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", plusFABRoundedBackgroundColor),
    };
  }, [plusFABRoundedBackgroundColor]);

  return (
    <View style={[styles.awardBox, awardBoxStyle]}>
      <View style={styles.monthStreakBadgeParent}>
        <Text style={styles.monthStreakBadge}>{monthStreakBadge}</Text>
        <Text
          style={[styles.congratulationsYouWere, congratulationsYouWereStyle]}
        >
          {congratulationsYouWereDil}
        </Text>
      </View>
      <View
        style={[
          styles.plusFabRounded,
          styles.stateLayerFlexBox,
          plusFABRoundedStyle,
        ]}
      >
        <View style={[styles.stateLayer, styles.stateLayerFlexBox]}>
          <Image style={styles.icon} contentFit="cover" source={icon} />
          <Text style={styles.labelText}>ID</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  stateLayerFlexBox: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  monthStreakBadge: {
    top: 0,
    fontSize: FontSize.m3TitleLarge_size,
    lineHeight: 28,
    textAlign: "left",
    color: Color.textMain,
    fontFamily: FontFamily.m3BodyLarge,
    left: 0,
    position: "absolute",
  },
  congratulationsYouWere: {
    top: 59,
    fontSize: FontSize.body1Normal_size,
    letterSpacing: 1,
    lineHeight: 24,
    display: "flex",
    alignItems: "center",
    textAlign: "left",
    color: Color.textMain,
    fontFamily: FontFamily.m3BodyLarge,
    left: 0,
    position: "absolute",
    width: 248,
  },
  monthStreakBadgeParent: {
    height: 179,
    zIndex: 0,
    width: 248,
  },
  icon: {
    width: 24,
    height: 24,
  },
  labelText: {
    fontSize: FontSize.size_lg_7,
    letterSpacing: 0,
    lineHeight: 27,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.m3SysLightPrimary,
    textAlign: "center",
    display: "none",
    marginLeft: 10.67,
  },
  stateLayer: {
    paddingHorizontal: 0,
    paddingVertical: 13,
  },
  plusFabRounded: {
    top: -26,
    left: 262,
    borderRadius: 13,
    backgroundColor: Color.accentColorPink,
    width: 60,
    height: 60,
    overflow: "hidden",
    zIndex: 1,
    position: "absolute",
    flexDirection: "row",
  },
  awardBox: {
    borderRadius: Border.br_13xl,
    backgroundColor: Color.neutralBackground,
    shadowColor: "#dadada",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 3,
    elevation: 3,
    shadowOpacity: 1,
    width: 308,
    padding: Padding.p_11xl,
  },
});

export default AwardBox;
