import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, ImageSourcePropType } from "react-native";
import { FontSize, FontFamily, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Tagbase = ({
  tagindicator,
  tagName,
  tagbasePosition,
  tagbasePaddingHorizontal,
  tagbasePaddingVertical,
  tagindicatorIconWidth,
  tagindicatorIconHeight,
  tagNameFontSize,
  tagNameLineHeight,
  tagNameMarginLeft,
}) => {
  const tagbaseStyle = useMemo(() => {
    return {
      ...getStyleValue("position", tagbasePosition),
      ...getStyleValue("paddingHorizontal", tagbasePaddingHorizontal),
      ...getStyleValue("paddingVertical", tagbasePaddingVertical),
    };
  }, [tagbasePosition, tagbasePaddingHorizontal, tagbasePaddingVertical]);

  const tagindicatorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("width", tagindicatorIconWidth),
      ...getStyleValue("height", tagindicatorIconHeight),
    };
  }, [tagindicatorIconWidth, tagindicatorIconHeight]);

  const tagNameStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", tagNameFontSize),
      ...getStyleValue("lineHeight", tagNameLineHeight),
      ...getStyleValue("marginLeft", tagNameMarginLeft),
    };
  }, [tagNameFontSize, tagNameLineHeight, tagNameMarginLeft]);

  return (
    <View style={[styles.tagbase, tagbaseStyle]}>
      <View style={styles.elements}>
        <Image
          style={[styles.tagindicatorIcon, tagindicatorIconStyle]}
          contentFit="cover"
          source={tagindicator}
        />
        <Text style={[styles.tagName, tagNameStyle]}>{tagName}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tagindicatorIcon: {
    width: 8,
    height: 8,
  },
  tagName: {
    fontSize: FontSize.size_xs,
    lineHeight: 12,
    fontWeight: "500",
    fontFamily: FontFamily.interMedium,
    color: Color.tableBodyStrong,
    textAlign: "left",
    marginLeft: 10,
  },
  elements: {
    flexDirection: "row",
    alignItems: "center",
  },
  tagbase: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_10xs,
    alignItems: "center",
  },
});

export default Tagbase;
