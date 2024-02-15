import React, { useMemo } from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import SizeSmallIconNoneStateD from "./SizeSmallIconNoneStateD";
import Tagbase from "./Tagbase";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const CardChartline = ({
  statistics,
  icon,
  chevronRight,
  tagindicator,
  iconLeft,
  iconRight,
  tagindicator1,
  iconLeft1,
  iconRight1,
  charts,
  showHeader,
  showTagbase,
  showXTag,
  cardChartline1Position,
  cardChartline1BorderRadius,
  cardChartline1Elevation,
  cardChartline1Width,
  cardChartline1Height,
  cardChartline1Padding,
  cardChartline1Top,
  cardChartline1Left,
  statisticsFontSize,
  statisticsLineHeight,
  statisticsWidth,
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
  bodyTextWidth,
  bodyTextMarginTop,
  tagindicatorIconWidth,
  tagindicatorIconHeight,
  tagNameFontSize,
  tagNameLineHeight,
  tagNameMarginLeft,
  xBadgeMarginLeft,
  badgebaseBorderRadius,
  badgebasePaddingHorizontal,
  iconLeftWidth,
  iconLeftHeight,
  badgeFontSize,
  badgeLineHeight,
  badgeMarginLeft,
  iconRightWidth,
  iconRightHeight,
  iconRightMarginLeft,
  tagWidth,
  tagMarginLeft,
  tagbasePaddingVertical,
  tagindicatorIconWidth1,
  tagindicatorIconHeight1,
  tagNameFontSize1,
  tagNameLineHeight1,
  tagNameMarginLeft1,
  xBadgeMarginLeft1,
  badgebaseBorderRadius1,
  badgebasePaddingHorizontal1,
  iconLeftWidth1,
  iconLeftHeight1,
  badgeFontSize1,
  badgeLineHeight1,
  badgeMarginLeft1,
  iconRightWidth1,
  iconRightHeight1,
  iconRightMarginLeft1,
  chartStatsMarginTop,
  verticalStatsPaddingRight,
  verticalStatsPaddingBottom,
  kFontSize,
  kLineHeight,
  kWidth,
  kHeight,
  kFontSize1,
  kLineHeight1,
  kWidth1,
  kHeight1,
  kFontSize2,
  kLineHeight2,
  kWidth2,
  kHeight2,
  kFontSize3,
  kLineHeight3,
  kWidth3,
  kHeight3,
  kFontSize4,
  kLineHeight4,
  kWidth4,
  kHeight4,
  chartHorizontalStatsMarginLeft,
  underlineSatsMarginTop,
  kFontSize5,
  kLineHeight5,
  kFontSize6,
  kLineHeight6,
  kFontSize7,
  kLineHeight7,
  kFontSize8,
  kLineHeight8,
  kFontSize9,
  kLineHeight9,
  kFontSize10,
  kLineHeight10,
  kFontSize11,
  kLineHeight11,
  kFontSize12,
  kLineHeight12,
  kFontSize13,
  kLineHeight13,
  kFontSize14,
  kLineHeight14,
  kFontSize15,
  kLineHeight15,
  kFontSize16,
  kLineHeight16,
}) => {
  const cardChartline1Style = useMemo(() => {
    return {
      ...getStyleValue("position", cardChartline1Position),
      ...getStyleValue("borderRadius", cardChartline1BorderRadius),
      ...getStyleValue("elevation", cardChartline1Elevation),
      ...getStyleValue("width", cardChartline1Width),
      ...getStyleValue("height", cardChartline1Height),
      ...getStyleValue("padding", cardChartline1Padding),
      ...getStyleValue("top", cardChartline1Top),
      ...getStyleValue("left", cardChartline1Left),
    };
  }, [
    cardChartline1Position,
    cardChartline1BorderRadius,
    cardChartline1Elevation,
    cardChartline1Width,
    cardChartline1Height,
    cardChartline1Padding,
    cardChartline1Top,
    cardChartline1Left,
  ]);

  const statisticsStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", statisticsFontSize),
      ...getStyleValue("lineHeight", statisticsLineHeight),
      ...getStyleValue("width", statisticsWidth),
    };
  }, [statisticsFontSize, statisticsLineHeight, statisticsWidth]);

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

  const bodyTextStyle = useMemo(() => {
    return {
      ...getStyleValue("width", bodyTextWidth),
      ...getStyleValue("marginTop", bodyTextMarginTop),
    };
  }, [bodyTextWidth, bodyTextMarginTop]);

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

  const xBadgeStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", xBadgeMarginLeft),
    };
  }, [xBadgeMarginLeft]);

  const badgebaseStyle = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", badgebaseBorderRadius),
      ...getStyleValue("paddingHorizontal", badgebasePaddingHorizontal),
    };
  }, [badgebaseBorderRadius, badgebasePaddingHorizontal]);

  const iconLeftStyle = useMemo(() => {
    return {
      ...getStyleValue("width", iconLeftWidth),
      ...getStyleValue("height", iconLeftHeight),
    };
  }, [iconLeftWidth, iconLeftHeight]);

  const badgeStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", badgeFontSize),
      ...getStyleValue("lineHeight", badgeLineHeight),
      ...getStyleValue("marginLeft", badgeMarginLeft),
    };
  }, [badgeFontSize, badgeLineHeight, badgeMarginLeft]);

  const iconRightStyle = useMemo(() => {
    return {
      ...getStyleValue("width", iconRightWidth),
      ...getStyleValue("height", iconRightHeight),
      ...getStyleValue("marginLeft", iconRightMarginLeft),
    };
  }, [iconRightWidth, iconRightHeight, iconRightMarginLeft]);

  const tagStyle = useMemo(() => {
    return {
      ...getStyleValue("width", tagWidth),
      ...getStyleValue("marginLeft", tagMarginLeft),
    };
  }, [tagWidth, tagMarginLeft]);

  const tagbaseStyle = useMemo(() => {
    return {
      ...getStyleValue("paddingVertical", tagbasePaddingVertical),
    };
  }, [tagbasePaddingVertical]);

  const tagindicatorIconStyle1 = useMemo(() => {
    return {
      ...getStyleValue("width", tagindicatorIconWidth1),
      ...getStyleValue("height", tagindicatorIconHeight1),
    };
  }, [tagindicatorIconWidth1, tagindicatorIconHeight1]);

  const tagNameStyle1 = useMemo(() => {
    return {
      ...getStyleValue("fontSize", tagNameFontSize1),
      ...getStyleValue("lineHeight", tagNameLineHeight1),
      ...getStyleValue("marginLeft", tagNameMarginLeft1),
    };
  }, [tagNameFontSize1, tagNameLineHeight1, tagNameMarginLeft1]);

  const xBadge1Style = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", xBadgeMarginLeft1),
    };
  }, [xBadgeMarginLeft1]);

  const badgebase1Style = useMemo(() => {
    return {
      ...getStyleValue("borderRadius", badgebaseBorderRadius1),
      ...getStyleValue("paddingHorizontal", badgebasePaddingHorizontal1),
    };
  }, [badgebaseBorderRadius1, badgebasePaddingHorizontal1]);

  const iconLeft1Style = useMemo(() => {
    return {
      ...getStyleValue("width", iconLeftWidth1),
      ...getStyleValue("height", iconLeftHeight1),
    };
  }, [iconLeftWidth1, iconLeftHeight1]);

  const badge1Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", badgeFontSize1),
      ...getStyleValue("lineHeight", badgeLineHeight1),
      ...getStyleValue("marginLeft", badgeMarginLeft1),
    };
  }, [badgeFontSize1, badgeLineHeight1, badgeMarginLeft1]);

  const iconRight1Style = useMemo(() => {
    return {
      ...getStyleValue("width", iconRightWidth1),
      ...getStyleValue("height", iconRightHeight1),
      ...getStyleValue("marginLeft", iconRightMarginLeft1),
    };
  }, [iconRightWidth1, iconRightHeight1, iconRightMarginLeft1]);

  const chartStatsStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", chartStatsMarginTop),
    };
  }, [chartStatsMarginTop]);

  const verticalStatsStyle = useMemo(() => {
    return {
      ...getStyleValue("paddingRight", verticalStatsPaddingRight),
      ...getStyleValue("paddingBottom", verticalStatsPaddingBottom),
    };
  }, [verticalStatsPaddingRight, verticalStatsPaddingBottom]);

  const kStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", kFontSize),
      ...getStyleValue("lineHeight", kLineHeight),
      ...getStyleValue("width", kWidth),
      ...getStyleValue("height", kHeight),
    };
  }, [kFontSize, kLineHeight, kWidth, kHeight]);

  const k1Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", kFontSize1),
      ...getStyleValue("lineHeight", kLineHeight1),
      ...getStyleValue("width", kWidth1),
      ...getStyleValue("height", kHeight1),
    };
  }, [kFontSize1, kLineHeight1, kWidth1, kHeight1]);

  const k2Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", kFontSize2),
      ...getStyleValue("lineHeight", kLineHeight2),
      ...getStyleValue("width", kWidth2),
      ...getStyleValue("height", kHeight2),
    };
  }, [kFontSize2, kLineHeight2, kWidth2, kHeight2]);

  const k3Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", kFontSize3),
      ...getStyleValue("lineHeight", kLineHeight3),
      ...getStyleValue("width", kWidth3),
      ...getStyleValue("height", kHeight3),
    };
  }, [kFontSize3, kLineHeight3, kWidth3, kHeight3]);

  const k4Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", kFontSize4),
      ...getStyleValue("lineHeight", kLineHeight4),
      ...getStyleValue("width", kWidth4),
      ...getStyleValue("height", kHeight4),
    };
  }, [kFontSize4, kLineHeight4, kWidth4, kHeight4]);

  const chartHorizontalStatsStyle = useMemo(() => {
    return {
      ...getStyleValue("marginLeft", chartHorizontalStatsMarginLeft),
    };
  }, [chartHorizontalStatsMarginLeft]);

  const underlineSatsStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", underlineSatsMarginTop),
    };
  }, [underlineSatsMarginTop]);

  const k5Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", kFontSize5),
      ...getStyleValue("lineHeight", kLineHeight5),
    };
  }, [kFontSize5, kLineHeight5]);

  const k6Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", kFontSize6),
      ...getStyleValue("lineHeight", kLineHeight6),
    };
  }, [kFontSize6, kLineHeight6]);

  const k7Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", kFontSize7),
      ...getStyleValue("lineHeight", kLineHeight7),
    };
  }, [kFontSize7, kLineHeight7]);

  const k8Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", kFontSize8),
      ...getStyleValue("lineHeight", kLineHeight8),
    };
  }, [kFontSize8, kLineHeight8]);

  const k9Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", kFontSize9),
      ...getStyleValue("lineHeight", kLineHeight9),
    };
  }, [kFontSize9, kLineHeight9]);

  const k10Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", kFontSize10),
      ...getStyleValue("lineHeight", kLineHeight10),
    };
  }, [kFontSize10, kLineHeight10]);

  const k11Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", kFontSize11),
      ...getStyleValue("lineHeight", kLineHeight11),
    };
  }, [kFontSize11, kLineHeight11]);

  const k12Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", kFontSize12),
      ...getStyleValue("lineHeight", kLineHeight12),
    };
  }, [kFontSize12, kLineHeight12]);

  const k13Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", kFontSize13),
      ...getStyleValue("lineHeight", kLineHeight13),
    };
  }, [kFontSize13, kLineHeight13]);

  const k14Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", kFontSize14),
      ...getStyleValue("lineHeight", kLineHeight14),
    };
  }, [kFontSize14, kLineHeight14]);

  const k15Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", kFontSize15),
      ...getStyleValue("lineHeight", kLineHeight15),
    };
  }, [kFontSize15, kLineHeight15]);

  const k16Style = useMemo(() => {
    return {
      ...getStyleValue("fontSize", kFontSize16),
      ...getStyleValue("lineHeight", kLineHeight16),
    };
  }, [kFontSize16, kLineHeight16]);

  return (
    <View style={[styles.cardChartline1, cardChartline1Style]}>
      {showHeader && (
        <View style={styles.header}>
          <View style={styles.header1}>
            <Text style={[styles.statistics, statisticsStyle]}>
              {statistics}
            </Text>
            <SizeSmallIconNoneStateD
              icon={require("../assets/icon4.png")}
              textButton="Export"
              chevronRight={require("../assets/chevronright1.png")}
              sizeSmallIconNoneStateDPosition="unset"
              btnsmallBorderRadius={4}
              btnsmallBorderWidth={1}
              btnsmallPaddingHorizontal="unset"
              btnsmallPaddingVertical="unset"
              iconWidth={10}
              iconHeight={10}
              textButtonFontSize={10}
              textButtonLineHeight={10}
              textButtonMarginLeft={6}
              chevronRightIconWidth={8}
              chevronRightIconHeight={8}
              chevronRightIconMarginLeft={6}
            />
          </View>
          <View style={[styles.bodyText, bodyTextStyle]}>
            <View style={styles.tag}>
              <Tagbase
                tagindicator={require("../assets/tagindicator2.png")}
                tagName="Something"
                tagbasePosition="unset"
                tagbasePaddingHorizontal="unset"
                tagbasePaddingVertical="unset"
                tagindicatorIconWidth={8}
                tagindicatorIconHeight={8}
                tagNameFontSize={12}
                tagNameLineHeight={12}
                tagNameMarginLeft={10}
              />
              <View style={[styles.xBadge, xBadgeStyle]}>
                <View style={[styles.badgebase, badgebaseStyle]}>
                  <View style={styles.elements}>
                    <Image
                      style={[styles.iconLayout, iconLeftStyle]}
                      contentFit="cover"
                      source={iconLeft}
                    />
                    <Text style={[styles.badge, badgeStyle]}>+12%</Text>
                    <Image
                      style={[
                        styles.iconRight,
                        styles.iconLayout,
                        iconRightStyle,
                      ]}
                      contentFit="cover"
                      source={iconRight}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={[styles.tag1, tagStyle]}>
              {showXTag && (
                <View style={styles.xTag}>
                  <Tagbase
                    tagindicator={require("../assets/tagindicator3.png")}
                    tagName="Romania"
                    tagbasePosition="unset"
                    tagbasePaddingHorizontal="unset"
                    tagbasePaddingVertical="unset"
                    tagindicatorIconWidth={8}
                    tagindicatorIconHeight={8}
                    tagNameFontSize={12}
                    tagNameLineHeight={12}
                    tagNameMarginLeft={10}
                  />
                </View>
              )}
              <View style={[styles.xBadge, xBadge1Style]}>
                <View style={[styles.badgebase, badgebase1Style]}>
                  <View style={styles.elements}>
                    <Image
                      style={[styles.iconLayout, iconLeft1Style]}
                      contentFit="cover"
                      source={iconLeft1}
                    />
                    <Text style={[styles.badge, badge1Style]}>+142%</Text>
                    <Image
                      style={[
                        styles.iconRight,
                        styles.iconLayout,
                        iconRight1Style,
                      ]}
                      contentFit="cover"
                      source={iconRight1}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
      <View style={[styles.chartStats, chartStatsStyle]}>
        <View style={[styles.verticalStats, verticalStatsStyle]}>
          <View style={styles.statistics1}>
            <Text style={[styles.k, styles.kTypo, kStyle]}>5k</Text>
            <Text style={[styles.k1, styles.k1Typo, k1Style]}>4k</Text>
            <Text style={[styles.k2, styles.k1Typo, k2Style]}>3k</Text>
            <Text style={[styles.k, styles.kTypo, k3Style]}>2k</Text>
            <Text style={[styles.k4, styles.kTypo, k4Style]}>1k</Text>
          </View>
        </View>
        <View style={[styles.chartHorizontalStats, chartHorizontalStatsStyle]}>
          <Image style={styles.chartsIcon} contentFit="cover" source={charts} />
          <View style={[styles.underlineSats, underlineSatsStyle]}>
            <Text style={[styles.k5, k5Style]}>1k</Text>
            <Text style={[styles.k5, k6Style]}>2k</Text>
            <Text style={[styles.k5, k7Style]}>3k</Text>
            <Text style={[styles.k5, k8Style]}>4k</Text>
            <Text style={[styles.k5, k9Style]}>5k</Text>
            <Text style={[styles.k5, k10Style]}>6k</Text>
            <Text style={[styles.k5, k11Style]}>7k</Text>
            <Text style={[styles.k5, k12Style]}>8k</Text>
            <Text style={[styles.k5, k13Style]}>9k</Text>
            <Text style={[styles.k5, k14Style]}>10k</Text>
            <Text style={[styles.k5, k15Style]}>11k</Text>
            <Text style={[styles.k5, k16Style]}>12k</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    height: 10,
    width: 10,
    display: "none",
  },
  kTypo: {
    alignItems: "flex-end",
    display: "flex",
    color: Color.tableBodyStrong,
    height: 16,
    lineHeight: 10,
    fontSize: FontSize.buttonSmall_size,
    textAlign: "left",
    fontFamily: FontFamily.headingsH5,
    fontWeight: "600",
  },
  k1Typo: {
    width: 18,
    alignItems: "flex-end",
    display: "flex",
    color: Color.tableBodyStrong,
    lineHeight: 10,
    fontSize: FontSize.buttonSmall_size,
    textAlign: "left",
    fontFamily: FontFamily.headingsH5,
    fontWeight: "600",
  },
  statistics: {
    fontSize: FontSize.body1Normal_size,
    lineHeight: 25,
    color: Color.themeDarkDefault,
    width: 195,
    textAlign: "left",
    fontFamily: FontFamily.headingsH5,
    fontWeight: "600",
  },
  header1: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  badge: {
    lineHeight: 16,
    fontWeight: "700",
    fontFamily: FontFamily.interBold,
    color: Color.themeSuccessDefault,
    marginLeft: 6,
    fontSize: FontSize.buttonSmall_size,
    textAlign: "left",
  },
  iconRight: {
    marginLeft: 6,
  },
  elements: {
    padding: Padding.p_11xs,
    alignItems: "center",
    flexDirection: "row",
  },
  badgebase: {
    borderRadius: Border.br_7xs,
    backgroundColor: Color.themeSuccessSoft,
    paddingHorizontal: Padding.p_5xs,
    paddingVertical: Padding.p_11xs,
    alignItems: "center",
  },
  xBadge: {
    marginLeft: 24,
    display: "none",
  },
  tag: {
    alignItems: "center",
    flexDirection: "row",
  },
  xTag: {
    flex: 1,
  },
  tag1: {
    width: 150,
    marginLeft: 24,
    alignItems: "center",
    flexDirection: "row",
  },
  bodyText: {
    width: 442,
    marginTop: 16,
    alignItems: "center",
    flexDirection: "row",
  },
  header: {
    alignSelf: "stretch",
  },
  k: {
    width: 17,
    height: 16,
  },
  k1: {
    height: 16,
  },
  k2: {
    height: 15,
  },
  k4: {
    width: 15,
    height: 16,
  },
  statistics1: {
    flex: 1,
    justifyContent: "space-between",
  },
  verticalStats: {
    justifyContent: "flex-end",
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_5xl,
    alignSelf: "stretch",
  },
  chartsIcon: {
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    width: "100%",
    flex: 1,
    alignSelf: "stretch",
  },
  k5: {
    color: Color.tableHeadText,
    lineHeight: 10,
    fontSize: FontSize.buttonSmall_size,
    textAlign: "left",
    fontFamily: FontFamily.headingsH5,
    fontWeight: "600",
  },
  underlineSats: {
    marginTop: 12,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    alignSelf: "stretch",
  },
  chartHorizontalStats: {
    marginLeft: 18,
    flex: 1,
    alignSelf: "stretch",
  },
  chartStats: {
    marginTop: 30,
    flex: 1,
    flexDirection: "row",
    alignSelf: "stretch",
  },
  cardChartline1: {
    borderRadius: Border.br_base,
    backgroundColor: Color.neutralBackground,
    shadowColor: "rgba(12, 26, 75, 0.24)",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    width: 815,
    height: 390,
    padding: Padding.p_5xl,
  },
});

export default CardChartline;
