import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color, Border, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TypeNoteSizeNormalColor = ({
  a,
  note,
  label,
  leaveANiceThoughtForSomeo,
  showLabel = false,
  showFavicon = false,
  showA,
  typeNoteSizeNormalColorPosition,
  typeNoteSizeNormalColorBackgroundColor,
  typeNoteSizeNormalColorWidth,
  typeNoteSizeNormalColorTop,
  typeNoteSizeNormalColorLeft,
  bigFavBackgroundColor,
  bigFavPaddingHorizontal,
  bigFavPaddingVertical,
  noteColor,
  noteOpacity,
  labelOpacity,
  leaveANiceFontSize,
  leaveANiceColor,
}) => {
  const typeNoteSizeNormalColorStyle = useMemo(() => {
    return {
      ...getStyleValue("position", typeNoteSizeNormalColorPosition),
      ...getStyleValue(
        "backgroundColor",
        typeNoteSizeNormalColorBackgroundColor
      ),
      ...getStyleValue("width", typeNoteSizeNormalColorWidth),
      ...getStyleValue("top", typeNoteSizeNormalColorTop),
      ...getStyleValue("left", typeNoteSizeNormalColorLeft),
    };
  }, [
    typeNoteSizeNormalColorPosition,
    typeNoteSizeNormalColorBackgroundColor,
    typeNoteSizeNormalColorWidth,
    typeNoteSizeNormalColorTop,
    typeNoteSizeNormalColorLeft,
  ]);

  const bigFavStyle = useMemo(() => {
    return {
      ...getStyleValue("backgroundColor", bigFavBackgroundColor),
      ...getStyleValue("paddingHorizontal", bigFavPaddingHorizontal),
      ...getStyleValue("paddingVertical", bigFavPaddingVertical),
    };
  }, [bigFavBackgroundColor, bigFavPaddingHorizontal, bigFavPaddingVertical]);

  const noteStyle = useMemo(() => {
    return {
      ...getStyleValue("color", noteColor),
      ...getStyleValue("opacity", noteOpacity),
    };
  }, [noteColor, noteOpacity]);

  const label1Style = useMemo(() => {
    return {
      ...getStyleValue("opacity", labelOpacity),
    };
  }, [labelOpacity]);

  const leaveANiceStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", leaveANiceFontSize),
      ...getStyleValue("color", leaveANiceColor),
    };
  }, [leaveANiceFontSize, leaveANiceColor]);

  return (
    <View
      style={[styles.typenoteSizenormalColor, typeNoteSizeNormalColorStyle]}
    >
      {showFavicon && (
        <View style={[styles.bigFav, bigFavStyle]}>
          {showA && <Text style={styles.a}>{a}</Text>}
        </View>
      )}
      <View style={styles.frameParent}>
        <View style={styles.noteParent}>
          <Text style={[styles.note, noteStyle]}>{note}</Text>
          {showLabel && (
            <Text style={[styles.label, styles.labelTypo, label1Style]}>
              {label}
            </Text>
          )}
        </View>
        <Text style={[styles.leaveANice, styles.labelTypo, leaveANiceStyle]}>
          {leaveANiceThoughtForSomeo}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelTypo: {
    textAlign: "left",
    fontSize: FontSize.m3TitleLarge_size,
    fontFamily: FontFamily.interRegular,
  },
  a: {
    fontSize: FontSize.size_7xl,
    color: Color.neutralBackground,
    textAlign: "right",
    fontFamily: FontFamily.interRegular,
  },
  bigFav: {
    borderRadius: Border.br_81xl,
    backgroundColor: "#ef5f00",
    width: 50,
    height: 50,
    overflow: "hidden",
    paddingHorizontal: 14,
    paddingVertical: Padding.p_5xs,
    display: "none",
    alignItems: "center",
    justifyContent: "center",
  },
  note: {
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.colorBlack,
    fontSize: FontSize.m3TitleLarge_size,
    textAlign: "right",
  },
  label: {
    color: Color.colorDimgray_100,
    marginLeft: 8,
    display: "none",
  },
  noteParent: {
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
  },
  leaveANice: {
    marginTop: 4,
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  frameParent: {
    flex: 1,
    alignItems: "flex-end",
    marginLeft: 16,
  },
  typenoteSizenormalColor: {
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    borderBottomRightRadius: Border.br_base,
    backgroundColor: Color.green,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 459,
    paddingLeft: Padding.p_9xl,
    paddingTop: Padding.p_5xl,
    paddingRight: Padding.p_3xl,
    paddingBottom: Padding.p_5xl,
    justifyContent: "center",
    flexDirection: "row",
  },
});

export default TypeNoteSizeNormalColor;
