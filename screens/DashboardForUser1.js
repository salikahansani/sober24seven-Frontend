import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import ForgotPassword2 from "../components/ForgotPassword2";
import { useNavigation } from "@react-navigation/native";
import UserGroupImage from "../components/UserGroupImage";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const DashboardForUser1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboardForUser2}>
      <ForgotPassword2
        forgotPasswordPosition="absolute"
        forgotPasswordTop={554}
        forgotPasswordLeft={272}
      />
      <Image
        style={styles.dashboardForUser2Child}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <View style={[styles.dashboardForUser2Item, styles.dashboardLayout]} />
      <View style={[styles.dashboardForUser2Inner, styles.dashboardLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View
        style={[styles.dashboardForUser2Child1, styles.rectangleViewLayout]}
      />
      <View
        style={[styles.dashboardForUser2Child2, styles.dashboardChildLayout]}
      />
      <View style={styles.dashboardForUser2Child3} />
      <View
        style={[styles.dashboardForUser2Child4, styles.dashboardChildLayout]}
      />
      <View
        style={[styles.dashboardForUser2Child5, styles.dashboardChildLayout]}
      />
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
        style={[styles.contrat1Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/contrat-11.png")}
      />
      <Image
        style={[styles.hotel11, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/hotel-1-1.png")}
      />
      <Image
        style={[styles.distribution1Icon, styles.iconLayout2]}
        contentFit="cover"
        source={require("../assets/distribution-1.png")}
      />
      <View style={styles.sdgp114Wrapper}>
        <Pressable
          style={styles.sdgp114}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.sdgp1141}>@2024 SDGP 114</Text>
        </Pressable>
      </View>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={styles.home03Icon}
        contentFit="cover"
        source={require("../assets/home031.png")}
      />
      <UserGroupImage
        userGroupImageUserGroup={require("../assets/usergroup1.png")}
        userGroupIconPosition="absolute"
        userGroupIconWidth={56}
        userGroupIconHeight={54}
        userGroupIconTop={756}
        userGroupIconLeft={207}
      />
      <Image
        style={[styles.analyticsIcon, styles.iconLayout1]}
        contentFit="cover"
        source={require("../assets/analytics1.png")}
      />
      <Image
        style={[styles.fileIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/file.png")}
      />
      <Image
        style={[styles.image28Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-28.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dashboardLayout: {
    width: 368,
    borderRadius: Border.br_xs,
    left: 23,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 137,
    width: 368,
    borderRadius: Border.br_xs,
    left: 23,
    position: "absolute",
  },
  dashboardChildLayout: {
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
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    left: 158,
    position: "absolute",
  },
  communityTypo: {
    height: 25,
    width: 172,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.headingsH5,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    left: 158,
    position: "absolute",
  },
  descriptionTypo: {
    height: 14,
    width: 153,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    left: 158,
    position: "absolute",
  },
  iconLayout2: {
    height: 88,
    position: "absolute",
  },
  iconLayout1: {
    width: 47,
    top: 758,
  },
  iconLayout: {
    height: 45,
    position: "absolute",
  },
  dashboardForUser2Child: {
    top: 67,
    left: 349,
    width: 34,
    height: 34,
    position: "absolute",
  },
  dashboardForUser2Item: {
    top: 129,
    backgroundColor: Color.colorLightblue_100,
    height: 136,
  },
  dashboardForUser2Inner: {
    top: 282,
    backgroundColor: Color.colorPlum_100,
    height: 138,
  },
  rectangleView: {
    top: 436,
    backgroundColor: Color.colorLightgoldenrodyellow,
  },
  dashboardForUser2Child1: {
    top: 590,
    backgroundColor: Color.colorPalegoldenrod_100,
  },
  dashboardForUser2Child2: {
    top: 143,
  },
  dashboardForUser2Child3: {
    top: 298,
    height: 107,
    width: 106,
    backgroundColor: Color.neutralBackground,
    left: 41,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  dashboardForUser2Child4: {
    top: 451,
  },
  dashboardForUser2Child5: {
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
  image1Icon: {
    left: 44,
    width: 100,
    height: 100,
    top: 153,
    position: "absolute",
  },
  home03Icon: {
    left: 67,
    width: 44,
    height: 42,
    top: 758,
    position: "absolute",
    overflow: "hidden",
  },
  analyticsIcon: {
    left: 143,
    height: 46,
    position: "absolute",
    overflow: "hidden",
  },
  fileIcon: {
    top: 756,
    left: 327,
    width: 42,
    overflow: "hidden",
  },
  image28Icon: {
    left: 269,
    width: 47,
    top: 758,
  },
  vectorIcon: {
    height: "3.5%",
    width: "7.25%",
    top: "7.83%",
    right: "87.2%",
    bottom: "88.67%",
    left: "5.56%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  dashboardForUser2: {
    backgroundColor: Color.colorAliceblue_300,
    flex: 1,
    height: 856,
    overflow: "hidden",
    width: "100%",
  },
});

export default DashboardForUser1;
