import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ForgotPassword2 from "../components/ForgotPassword2";
import UserGroupImage from "../components/UserGroupImage";
import StateDefaultIconTrueBadg from "../components/StateDefaultIconTrueBadg";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Sidebar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.sidebar}>
      <Image
        style={styles.sidebarChild}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <View style={styles.sdgp114Wrapper}>
        <Pressable
          style={styles.sdgp114}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.sdgp1141}>@2024 SDGP 114</Text>
        </Pressable>
      </View>
      <ForgotPassword2
        forgotPasswordPosition="absolute"
        forgotPasswordTop={554}
        forgotPasswordLeft={272}
      />
      <View style={[styles.sidebarItem, styles.sidebarLayout]} />
      <View style={[styles.sidebarInner, styles.sidebarLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.sidebarChild1, styles.rectangleViewLayout]} />
      <View style={[styles.sidebarChild2, styles.sidebarChildLayout]} />
      <View style={styles.sidebarChild3} />
      <View style={[styles.sidebarChild4, styles.sidebarChildLayout]} />
      <View style={[styles.sidebarChild5, styles.sidebarChildLayout]} />
      <Text style={[styles.routingSchedule, styles.routingScheduleTypo]}>
        Routing schedule
      </Text>
      <Text style={[styles.descriptionDeCatgorie, styles.descriptionTypo1]}>
        Description de catégorie ...
      </Text>
      <Text style={[styles.progressChart, styles.communityTypo]}>
        Progress Chart
      </Text>
      <Text style={[styles.descriptionDeCatgorie1, styles.descriptionTypo1]}>
        Description de catégorie ...
      </Text>
      <Text style={[styles.community, styles.communityTypo]}>Community</Text>
      <Text style={[styles.locationTracker, styles.routingScheduleTypo]}>
        Location Tracker
      </Text>
      <Text style={[styles.descriptionDeCatgorie2, styles.descriptionTypo]}>
        Description de catégorie ...
      </Text>
      <Text style={[styles.descriptionDeCatgorie3, styles.descriptionTypo]}>
        Description de catégorie ...
      </Text>
      <Image
        style={[styles.contrat1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/contrat-11.png")}
      />
      <Image
        style={[styles.hotel11, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/hotel-1-1.png")}
      />
      <Image
        style={[styles.distribution1Icon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/distribution-1.png")}
      />
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={[styles.home03Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/home032.png")}
      />
      <UserGroupImage
        userGroupImageUserGroup={require("../assets/usergroup3.png")}
        userGroupIconPosition="absolute"
        userGroupIconWidth={56}
        userGroupIconHeight={54}
        userGroupIconTop={759}
        userGroupIconLeft={179}
      />
      <Image
        style={[styles.analyticsIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/analytics1.png")}
      />
      <Image
        style={[styles.fileIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/file.png")}
      />
      <View style={[styles.sidebarChild6, styles.image44IconLayout]} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.image44Icon, styles.image44IconLayout]}
        contentFit="cover"
        source={require("../assets/image-29.png")}
      />
      <View style={[styles.sidebarChild7, styles.logoCopy1Position]} />
      <StateDefaultIconTrueBadg
        home={require("../assets/chat.png")}
        dashboard="Notifications"
        trailingIcon={require("../assets/trailing-icon.png")}
        showHomeIcon={false}
        showTrailingIconBadge
        showNumberNotificationBadge
        trailingIcon1={false}
        stateDefaultIconTrueBadgPosition="absolute"
        stateDefaultIconTrueBadgWidth={260}
        stateDefaultIconTrueBadgTop={328}
        stateDefaultIconTrueBadgLeft={14}
        stateDefaultIconTrueBadgBackgroundColor="unset"
        homeIconWidth={30}
        homeIconHeight={30}
        dashboardFontSize={15}
        dashboardLineHeight={23}
        dashboardLetterSpacing={0.2}
        dashboardFontFamily="Poppins-Regular"
        dashboardColor="#eff2f4"
        numberNotificationBadgeWidth={23}
        numberNotificationBadgeHeight={23}
        numberNotificationBadgeBackgroundColor="#eff2f4"
        textLeft={8}
        textFontSize={12}
        textLineHeight={27}
        textColor="#0c7fda"
        trailingIconWidth={23}
        trailingIconHeight={23}
      />
      <StateDefaultIconTrueBadg
        home={require("../assets/chat.png")}
        dashboard="About us"
        trailingIcon={require("../assets/trailing-icon1.png")}
        showHomeIcon
        showTrailingIconBadge
        showNumberNotificationBadge={false}
        trailingIcon1={false}
        stateDefaultIconTrueBadgPosition="absolute"
        stateDefaultIconTrueBadgWidth={260}
        stateDefaultIconTrueBadgTop={759}
        stateDefaultIconTrueBadgLeft={17}
        stateDefaultIconTrueBadgBackgroundColor="unset"
        homeIconWidth={30}
        homeIconHeight={30}
        dashboardFontSize={15}
        dashboardLineHeight={23}
        dashboardLetterSpacing={0.2}
        dashboardFontFamily="Poppins-Regular"
        dashboardColor="#eff2f4"
        numberNotificationBadgeWidth={23}
        numberNotificationBadgeHeight={23}
        numberNotificationBadgeBackgroundColor="#eff2f4"
        textLeft={8}
        textFontSize={12}
        textLineHeight={27}
        textColor="#0c7fda"
        trailingIconWidth={23}
        trailingIconHeight={23}
      />
      <StateDefaultIconTrueBadg
        home={require("../assets/document.png")}
        dashboard="Profile"
        trailingIcon={require("../assets/trailing-icon2.png")}
        showHomeIcon={false}
        showTrailingIconBadge={false}
        showNumberNotificationBadge
        trailingIcon1
        stateDefaultIconTrueBadgPosition="absolute"
        stateDefaultIconTrueBadgWidth={260}
        stateDefaultIconTrueBadgTop={242}
        stateDefaultIconTrueBadgLeft={20}
        stateDefaultIconTrueBadgBackgroundColor="unset"
        homeIconWidth={30}
        homeIconHeight={30}
        dashboardFontSize={15}
        dashboardFontFamily="Inter-Regular"
        dashboardColor="#fff"
        numberNotificationBadgeWidth={23}
        numberNotificationBadgeHeight={23}
        numberNotificationBadgeBackgroundColor="#e9f5fe"
        textLeft={8}
        textFontSize={12}
        textLineHeight={27}
        textColor="#1e252b"
        trailingIconWidth={23}
        trailingIconHeight={23}
      />
      <StateDefaultIconTrueBadg
        home={require("../assets/home.png")}
        dashboard="Dashboard"
        trailingIcon={require("../assets/trailing-icon2.png")}
        showHomeIcon
        showTrailingIconBadge={false}
        showNumberNotificationBadge
        trailingIcon1
        stateDefaultIconTrueBadgPosition="absolute"
        stateDefaultIconTrueBadgWidth={260}
        stateDefaultIconTrueBadgTop={160}
        stateDefaultIconTrueBadgLeft={17}
        stateDefaultIconTrueBadgBackgroundColor="#667a8a"
        homeIconWidth={30}
        homeIconHeight={30}
        dashboardFontSize={15}
        dashboardLineHeight={23}
        dashboardLetterSpacing={0.2}
        dashboardFontFamily="Poppins-Regular"
        dashboardColor="#fff"
        numberNotificationBadgeWidth={23}
        numberNotificationBadgeHeight={23}
        numberNotificationBadgeBackgroundColor="#e9f5fe"
        textLeft={8}
        textFontSize={12}
        textLineHeight={27}
        textColor="#1e252b"
        trailingIconWidth={23}
        trailingIconHeight={23}
      />
      <View style={styles.sidebarChild8} />
      <StateDefaultIconTrueBadg
        home={require("../assets/setting.png")}
        dashboard="Settings"
        trailingIcon={require("../assets/trailing-icon2.png")}
        showHomeIcon
        showTrailingIconBadge={false}
        showNumberNotificationBadge
        trailingIcon1
        stateDefaultIconTrueBadgPosition="absolute"
        stateDefaultIconTrueBadgWidth={260}
        stateDefaultIconTrueBadgTop={413}
        stateDefaultIconTrueBadgLeft={14}
        stateDefaultIconTrueBadgBackgroundColor="unset"
        homeIconWidth={30}
        homeIconHeight={30}
        dashboardFontSize={15}
        dashboardLineHeight={23}
        dashboardLetterSpacing={0.2}
        dashboardFontFamily="Poppins-Regular"
        dashboardColor="#eff2f4"
        numberNotificationBadgeWidth={23}
        numberNotificationBadgeHeight={23}
        numberNotificationBadgeBackgroundColor="#e9f5fe"
        textLeft={8}
        textFontSize={12}
        textLineHeight={27}
        textColor="#1e252b"
        trailingIconWidth={23}
        trailingIconHeight={23}
      />
      <Image
        style={[styles.image48Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-48.png")}
      />
      <Image
        style={[styles.image49Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-49.png")}
      />
      <Image
        style={[styles.image50Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-50.png")}
      />
      <Text style={styles.help}>Help</Text>
      <Image
        style={[styles.logoCopy1, styles.logoCopy1Position]}
        contentFit="cover"
        source={require("../assets/logo-copy-11.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sidebarLayout: {
    width: 368,
    left: 23,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 137,
    width: 368,
    borderRadius: Border.br_xs,
    left: 23,
    position: "absolute",
  },
  sidebarChildLayout: {
    height: 108,
    width: 106,
    backgroundColor: Color.neutralBackground,
    left: 41,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  routingScheduleTypo: {
    width: 172,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.headingsH5,
    fontSize: FontSize.size_xl,
    left: 158,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  descriptionTypo1: {
    height: 15,
    width: 153,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_100,
    left: 158,
    textAlign: "left",
    position: "absolute",
  },
  communityTypo: {
    height: 25,
    width: 172,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.headingsH5,
    fontSize: FontSize.size_xl,
    left: 158,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  descriptionTypo: {
    height: 14,
    width: 153,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    color: Color.colorDarkslategray_100,
    left: 158,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout1: {
    height: 88,
    position: "absolute",
  },
  iconPosition: {
    top: 763,
    position: "absolute",
    overflow: "hidden",
  },
  image44IconLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  logoCopy1Position: {
    left: 5,
    position: "absolute",
  },
  iconLayout: {
    height: 30,
    width: 30,
    position: "absolute",
  },
  sidebarChild: {
    top: 67,
    left: 349,
    width: 34,
    height: 34,
    position: "absolute",
  },
  sdgp1141: {
    height: "100%",
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.colorDarkgray_200,
    textAlign: "left",
    fontWeight: "600",
    width: "100%",
  },
  sdgp114: {
    left: "0%",
    top: "0%",
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
  sidebarItem: {
    top: 129,
    backgroundColor: Color.colorLightblue_100,
    height: 136,
  },
  sidebarInner: {
    top: 282,
    backgroundColor: Color.colorPlum_100,
    height: 138,
  },
  rectangleView: {
    top: 436,
    backgroundColor: Color.colorLightgoldenrodyellow,
  },
  sidebarChild1: {
    top: 590,
    backgroundColor: Color.colorPalegoldenrod_100,
  },
  sidebarChild2: {
    top: 143,
  },
  sidebarChild3: {
    top: 298,
    height: 107,
    width: 106,
    left: 41,
    backgroundColor: Color.neutralBackground,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  sidebarChild4: {
    top: 451,
  },
  sidebarChild5: {
    top: 604,
  },
  routingSchedule: {
    height: 24,
    top: 153,
  },
  descriptionDeCatgorie: {
    top: 183,
  },
  progressChart: {
    top: 307,
  },
  descriptionDeCatgorie1: {
    top: 337,
  },
  community: {
    top: 460,
  },
  locationTracker: {
    top: 613,
    height: 26,
  },
  descriptionDeCatgorie2: {
    top: 492,
  },
  descriptionDeCatgorie3: {
    top: 645,
  },
  contrat1Icon: {
    top: 614,
    width: 86,
    left: 51,
    height: 88,
  },
  hotel11: {
    top: 461,
    left: 52,
    width: 85,
  },
  distribution1Icon: {
    top: 308,
    width: 86,
    left: 51,
    height: 88,
  },
  image1Icon: {
    left: 44,
    width: 100,
    height: 100,
    top: 153,
    position: "absolute",
  },
  home03Icon: {
    left: 34,
    width: 44,
    height: 42,
  },
  analyticsIcon: {
    left: 105,
    width: 47,
    height: 46,
  },
  fileIcon: {
    left: 339,
    width: 42,
    height: 45,
  },
  sidebarChild6: {
    top: 62,
    left: 21,
    backgroundColor: Color.colorLightskyblue_100,
    borderRadius: Border.br_xs,
    width: 50,
  },
  vectorIcon: {
    height: "3.5%",
    width: "7.25%",
    top: "8.41%",
    right: "85.27%",
    bottom: "88.08%",
    left: "7.49%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  image44Icon: {
    top: 759,
    left: 262,
  },
  sidebarChild7: {
    top: 0,
    backgroundColor: Color.colorCornflowerblue_100,
    width: 304,
    height: 856,
  },
  sidebarChild8: {
    top: 18,
    left: 18,
    width: 103,
    height: 103,
    backgroundColor: Color.neutralBackground,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  image48Icon: {
    top: 334,
    left: 31,
  },
  image49Icon: {
    top: 250,
    left: 33,
  },
  image50Icon: {
    top: 702,
    left: 32,
  },
  help: {
    top: 705,
    left: 86,
    fontSize: FontSize.size_mini,
    letterSpacing: 0.2,
    lineHeight: 23,
    fontFamily: FontFamily.m3BodyLarge,
    color: Color.neutralBackground,
    width: 121,
    height: 27,
    textAlign: "left",
    position: "absolute",
  },
  logoCopy1: {
    top: 26,
    width: 125,
    height: 109,
  },
  sidebar: {
    backgroundColor: Color.colorAliceblue_300,
    flex: 1,
    overflow: "hidden",
    height: 856,
    width: "100%",
  },
});

export default Sidebar;
