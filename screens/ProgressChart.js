import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Component from "../components/Component";
import UserGroupImage from "../components/UserGroupImage";
import CardChartline from "../components/CardChartline";
import { Border, FontFamily, FontSize, Color } from "../GlobalStyles";

const ProgressChart = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.progressChart}>
      <Image
        style={styles.progressChartChild}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <View style={styles.sdgp114Wrapper}>
        <Pressable
          style={styles.sdgp114}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.sdgp1141, styles.sdgp1141Typo]}>
            @2024 SDGP 114
          </Text>
        </Pressable>
      </View>
      <View style={styles.progressChartItem} />
      <Text style={[styles.weekly, styles.weeklyLayout]}>Weekly</Text>
      <Image
        style={styles.image43Icon}
        contentFit="cover"
        source={require("../assets/image-43.png")}
      />
      <View style={[styles.progressChartInner, styles.rectangleViewLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.weekly1, styles.weekly1Typo]}>Weekly</Text>
      <Text style={[styles.monthly, styles.weekly1Typo]}>Monthly</Text>
      <Component
        image33={require("../assets/image-33.png")}
        component23Position="absolute"
        component23Width={102}
        component23Height={116}
        component23Top={443}
        component23Left={37}
        component23Elevation={4}
        pieHeight="30.78%"
        pieWidth="50.88%"
        pieTop="11.38%"
        pieLeft="31.27%"
        pieFontSize={27}
        pieColor="#333163"
        image33IconHeight="41.47%"
        image33IconWidth="45.78%"
        image33IconTop="41.98%"
        image33IconRight="26.86%"
        image33IconBottom="16.55%"
        image33IconLeft="27.35%"
      />
      <View style={[styles.component21, styles.componentLayout]}>
        <View style={[styles.component21Child, styles.childPosition]} />
        <Text style={[styles.bubble, styles.barTypo]}>Bubble</Text>
        <Image
          style={[styles.image41Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-41.png")}
        />
      </View>
      <View style={[styles.component24, styles.componentLayout]}>
        <View style={[styles.component21Child, styles.childPosition]} />
        <Text style={[styles.bar, styles.barTypo]}>Bar</Text>
        <Image
          style={[styles.image32Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-32.png")}
        />
      </View>
      <View style={[styles.component25, styles.componentPosition]}>
        <View style={[styles.component25Child, styles.childPosition]} />
        <Image
          style={[styles.image45Icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/image-45.png")}
        />
        <Text style={[styles.line, styles.lineTypo]}>Line</Text>
      </View>
      <View style={[styles.component20, styles.componentLayout]}>
        <View style={[styles.component21Child, styles.childPosition]} />
        <Text style={[styles.donut, styles.barTypo]}>Donut</Text>
        <Image
          style={[styles.image40Icon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/image-40.png")}
        />
      </View>
      <View style={[styles.component22, styles.componentPosition]}>
        <View style={[styles.component21Child, styles.childPosition]} />
        <Text style={[styles.scatter, styles.lineTypo]}>Scatter</Text>
        <Image
          style={[styles.image42Icon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/image-42.png")}
        />
      </View>
      <Text style={[styles.progressChart1, styles.sdgp1141Typo]}>
        Progress Chart
      </Text>
      <Image
        style={[styles.home03Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/home033.png")}
      />
      <UserGroupImage
        userGroupImageUserGroup={require("../assets/usergroup1.png")}
        userGroupIconPosition="absolute"
        userGroupIconWidth={56}
        userGroupIconHeight={54}
        userGroupIconTop={768}
        userGroupIconLeft={197}
      />
      <Image
        style={styles.fileIcon}
        contentFit="cover"
        source={require("../assets/file.png")}
      />
      <Image
        style={[styles.image30Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-29.png")}
      />
      <View style={styles.progressChartChild1} />
      <Image
        style={[styles.analyticsIcon, styles.weeklyLayout]}
        contentFit="cover"
        source={require("../assets/analytics2.png")}
      />
      <CardChartline
        icon={require("../assets/icon3.png")}
        chevronRight={require("../assets/chevronright.png")}
        tagindicator={require("../assets/tagindicator.png")}
        iconLeft={require("../assets/iconleft.png")}
        iconRight={require("../assets/iconright.png")}
        tagindicator1={require("../assets/tagindicator1.png")}
        iconLeft1={require("../assets/iconleft1.png")}
        iconRight1={require("../assets/iconright1.png")}
        charts={require("../assets/charts.png")}
        showHeader={false}
        showTagbase={false}
        showXTag={false}
        cardChartline1Position="absolute"
        cardChartline1BorderRadius={12}
        cardChartline1Elevation={0.78}
        cardChartline1Width={304}
        cardChartline1Height={149}
        cardChartline1Padding={19}
        cardChartline1Top={238}
        cardChartline1Left={56}
        statisticsFontSize={12}
        statisticsLineHeight={19}
        statisticsWidth={152}
        btnsmallBorderRadius={3}
        btnsmallBorderWidth={0.8}
        btnsmallPaddingHorizontal="unset"
        btnsmallPaddingVertical="unset"
        iconWidth={8}
        iconHeight={8}
        textButtonFontSize={8}
        textButtonLineHeight={8}
        textButtonMarginLeft={4.67}
        chevronRightIconWidth={6}
        chevronRightIconHeight={6}
        chevronRightIconMarginLeft={4.67}
        bodyTextWidth={344}
        bodyTextMarginTop={12.45}
        tagindicatorIconWidth={6}
        tagindicatorIconHeight={6}
        tagNameFontSize={9}
        tagNameLineHeight={9}
        tagNameMarginLeft={7.78}
        xBadgeMarginLeft={18.67}
        badgebaseBorderRadius={5}
        badgebasePaddingHorizontal="unset"
        iconLeftWidth={8}
        iconLeftHeight={8}
        badgeFontSize={8}
        badgeLineHeight={12}
        badgeMarginLeft={4.67}
        iconRightWidth={8}
        iconRightHeight={8}
        iconRightMarginLeft={4.67}
        tagWidth={117}
        tagMarginLeft={18.67}
        tagbasePaddingVertical="unset"
        tagindicatorIconWidth1={6}
        tagindicatorIconHeight1={6}
        tagNameFontSize1={9}
        tagNameLineHeight1={9}
        tagNameMarginLeft1={7.78}
        xBadgeMarginLeft1={18.67}
        badgebaseBorderRadius1={5}
        badgebasePaddingHorizontal1="unset"
        iconLeftWidth1={8}
        iconLeftHeight1={8}
        badgeFontSize1={8}
        badgeLineHeight1={12}
        badgeMarginLeft1={4.67}
        iconRightWidth1={8}
        iconRightHeight1={8}
        iconRightMarginLeft1={4.67}
        chartStatsMarginTop={23.34}
        verticalStatsPaddingRight={6}
        verticalStatsPaddingBottom={19}
        kFontSize={8}
        kLineHeight={8}
        kWidth={13}
        kHeight={12}
        kFontSize1={8}
        kLineHeight1={8}
        kWidth1={14}
        kHeight1={12}
        kFontSize2={8}
        kLineHeight2={8}
        kWidth2={14}
        kHeight2={12}
        kFontSize3={8}
        kLineHeight3={8}
        kWidth3={13}
        kHeight3={12}
        kFontSize4={8}
        kLineHeight4={8}
        kWidth4={12}
        kHeight4={12}
        chartHorizontalStatsMarginLeft={14}
        underlineSatsMarginTop={9.33}
        kFontSize5={8}
        kLineHeight5={8}
        kFontSize6={8}
        kLineHeight6={8}
        kFontSize7={8}
        kLineHeight7={8}
        kFontSize8={8}
        kLineHeight8={8}
        kFontSize9={8}
        kLineHeight9={8}
        kFontSize10={8}
        kLineHeight10={8}
        kFontSize11={8}
        kLineHeight11={8}
        kFontSize12={8}
        kLineHeight12={8}
        kFontSize13={8}
        kLineHeight13={8}
        kFontSize14={8}
        kLineHeight14={8}
        kFontSize15={8}
        kLineHeight15={8}
        kFontSize16={8}
        kLineHeight16={8}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sdgp1141Typo: {
    textAlign: "left",
    fontWeight: "600",
  },
  weeklyLayout: {
    height: 46,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 23,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  weekly1Typo: {
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  componentLayout: {
    height: 116,
    width: 102,
    position: "absolute",
  },
  childPosition: {
    bottom: "0%",
    left: "0%",
  },
  barTypo: {
    fontSize: FontSize.size_8xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  componentPosition: {
    left: 275,
    height: 116,
    width: 102,
    position: "absolute",
  },
  lineTypo: {
    height: "31.03%",
    fontSize: FontSize.size_8xl,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  iconPosition1: {
    left: "29.8%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    top: 768,
    position: "absolute",
  },
  progressChartChild: {
    top: 67,
    left: 349,
    width: 34,
    height: 34,
    position: "absolute",
  },
  sdgp1141: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.colorDarkgray_200,
    height: "100%",
    textAlign: "left",
    fontWeight: "600",
    width: "100%",
  },
  sdgp114: {
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  sdgp114Wrapper: {
    height: "2.13%",
    width: "26.57%",
    top: "97.2%",
    right: "36.71%",
    bottom: "0.68%",
    left: "36.71%",
    position: "absolute",
  },
  progressChartItem: {
    top: 133,
    left: 23,
    backgroundColor: Color.colorPlum_100,
    width: 368,
    height: 614,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  weekly: {
    left: 45,
    fontSize: FontSize.size_19xl,
    color: "#5b5b7b",
    width: 324,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    height: 46,
    top: 190,
    textAlign: "left",
  },
  image43Icon: {
    left: 336,
    width: 33,
    top: 190,
    height: 34,
    position: "absolute",
  },
  progressChartInner: {
    top: 398,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 57,
    backgroundColor: Color.colorSlategray_100,
    left: 111,
  },
  rectangleView: {
    left: 238,
    width: 58,
    backgroundColor: Color.neutralBackground,
    top: 401,
  },
  weekly1: {
    left: 121,
    width: 65,
    height: 13,
    color: Color.neutralBackground,
    top: 401,
  },
  monthly: {
    top: 405,
    left: 247,
    color: Color.colorBlack,
    width: 51,
    height: 8,
  },
  component21Child: {
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_xs,
    height: "100%",
    top: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.neutralBackground,
  },
  bubble: {
    width: "95.59%",
    left: "5.29%",
    color: Color.colorDarkslateblue_200,
    top: "10.34%",
    height: "30.95%",
    fontSize: FontSize.size_8xl,
  },
  image41Icon: {
    width: "49.51%",
    right: "22.16%",
    left: "28.33%",
    bottom: "11.9%",
    height: "47.59%",
    top: "40.52%",
  },
  component21: {
    left: 156,
    height: 116,
    width: 102,
    top: 595,
  },
  bar: {
    height: "30.78%",
    width: "50.88%",
    color: Color.colorDarkslateblue_100,
    top: "9.48%",
    left: "28.33%",
  },
  image32Icon: {
    height: "41.03%",
    width: "45.29%",
    right: "27.35%",
    bottom: "18.45%",
    left: "27.35%",
    top: "40.52%",
    maxWidth: "100%",
  },
  component24: {
    top: 443,
    left: 156,
    height: 116,
    width: 102,
  },
  component25Child: {
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_xs,
    height: "100%",
    top: "0%",
    position: "absolute",
    width: "100%",
    backgroundColor: Color.colorSlategray_100,
  },
  image45Icon: {
    height: "86.21%",
    width: "98.04%",
    top: "13.79%",
    right: "1.96%",
    bottom: "0%",
    left: "0%",
  },
  line: {
    width: "87.25%",
    left: "26.47%",
    color: Color.neutralBackground,
    top: "0%",
  },
  component25: {
    top: 446,
  },
  donut: {
    width: "81.57%",
    left: "14.9%",
    color: Color.colorDarkslateblue_200,
    top: "10.34%",
    height: "30.95%",
    fontSize: FontSize.size_8xl,
  },
  image40Icon: {
    height: "43.62%",
    width: "49.12%",
    top: "42.07%",
    right: "21.08%",
    bottom: "14.31%",
  },
  component20: {
    left: 37,
    top: 595,
  },
  scatter: {
    width: "120.59%",
    left: "4.9%",
    top: "9.48%",
    color: Color.colorDarkslateblue_200,
  },
  image42Icon: {
    width: "50%",
    right: "20.2%",
    bottom: "11.9%",
    height: "47.59%",
    top: "40.52%",
  },
  component22: {
    top: 595,
  },
  progressChart1: {
    top: 147,
    left: 138,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.headingsH5,
    color: Color.colorDarkslategray_100,
    width: 172,
    height: 25,
    position: "absolute",
  },
  home03Icon: {
    left: 33,
    width: 44,
    height: 42,
    overflow: "hidden",
  },
  fileIcon: {
    top: 772,
    left: 337,
    width: 42,
    height: 45,
    position: "absolute",
    overflow: "hidden",
  },
  image30Icon: {
    left: 268,
    width: 50,
    height: 50,
  },
  progressChartChild1: {
    top: 761,
    left: 91,
    borderRadius: Border.br_131xl,
    backgroundColor: Color.colorLightskyblue_100,
    width: 86,
    height: 66,
    position: "absolute",
  },
  analyticsIcon: {
    top: 771,
    width: 47,
    left: 111,
    overflow: "hidden",
  },
  vectorIcon: {
    height: "3.5%",
    width: "7.25%",
    top: "8.29%",
    right: "87.2%",
    bottom: "88.2%",
    left: "5.56%",
  },
  progressChart: {
    backgroundColor: Color.colorAliceblue_300,
    flex: 1,
    height: 856,
    overflow: "hidden",
    width: "100%",
  },
});

export default ProgressChart;
