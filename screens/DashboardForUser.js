import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import ForgotPassword2 from "../components/ForgotPassword2";
import { useNavigation } from "@react-navigation/native";
import UserGroupImage from "../components/UserGroupImage";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const DashboardForUser = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.dashboardForUser1}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <ForgotPassword2
        forgotPasswordPosition="absolute"
        forgotPasswordTop={593}
        forgotPasswordLeft={272}
      />
      <Image
        style={styles.dashboardForUser1Child}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <View style={[styles.dashboardForUser1Item, styles.dashboardLayout]} />
      <View style={[styles.dashboardForUser1Inner, styles.dashboardLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View
        style={[styles.dashboardForUser1Child1, styles.rectangleViewLayout]}
      />
      <View
        style={[styles.dashboardForUser1Child2, styles.dashboardChildLayout]}
      />
      <View style={styles.dashboardForUser1Child3} />
      <View
        style={[styles.dashboardForUser1Child4, styles.dashboardChildLayout]}
      />
      <View
        style={[styles.dashboardForUser1Child5, styles.dashboardChildLayout]}
      />
      <Text style={[styles.routingSchedule, styles.rewardsTypo]}>
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
      <Text style={[styles.rewards, styles.rewardsTypo]}>Rewards</Text>
      <Text style={[styles.descriptionDeCatgorie2, styles.descriptionTypo]}>
        Description de catégorie ...
      </Text>
      <Text style={[styles.descriptionDeCatgorie3, styles.descriptionTypo]}>
        Description de catégorie ...
      </Text>
      <Image
        style={[styles.contrat1Icon, styles.hotel11Layout]}
        contentFit="cover"
        source={require("../assets/contrat-1.png")}
      />
      <Image
        style={[styles.hotel11, styles.hotel11Layout]}
        contentFit="cover"
        source={require("../assets/hotel-1-1.png")}
      />
      <Image
        style={[styles.livraisonRapide1Icon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/livraisonrapide-1.png")}
      />
      <View style={[styles.sdgp114Wrapper, styles.sdgp114Layout]}>
        <Pressable
          style={styles.sdgp114}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.sdgp1141, styles.sdgpTypo]}>@2024 SDGP 114</Text>
        </Pressable>
      </View>
      <Image
        style={[styles.image2Icon, styles.image2IconPosition]}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <View
        style={[styles.dashboardForUser1Child6, styles.image2IconPosition]}
      />
      <Image
        style={[styles.home03Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/home03.png")}
      />
      <UserGroupImage
        userGroupImageUserGroup={require("../assets/usergroup.png")}
        userGroupIconPosition="absolute"
        userGroupIconWidth={56}
        userGroupIconHeight={54}
        userGroupIconTop={760}
        userGroupIconLeft={206}
      />
      <Image
        style={[styles.analyticsIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/analytics.png")}
      />
      <Image
        style={styles.fileIcon}
        contentFit="cover"
        source={require("../assets/file.png")}
      />
      <Image
        style={styles.image29Icon}
        contentFit="cover"
        source={require("../assets/image-29.png")}
      />
      <View style={[styles.sdgp114Container, styles.sdgp114Layout]}>
        <Pressable
          style={styles.sdgp114}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={[styles.sdgp1143, styles.sdgpTypo]}>@2024 SDGP 114</Text>
        </Pressable>
      </View>
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
  rewardsTypo: {
    width: 172,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.headingsH5,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    left: 158,
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
  hotel11Layout: {
    height: 88,
    position: "absolute",
  },
  iconPosition1: {
    left: 51,
    width: 86,
  },
  sdgp114Layout: {
    width: "26.57%",
    height: "2.13%",
    position: "absolute",
  },
  sdgpTypo: {
    fontFamily: FontFamily.manropeSemiBold,
    fontSize: FontSize.size_sm,
    height: "100%",
    textAlign: "left",
    fontWeight: "600",
    width: "100%",
  },
  image2IconPosition: {
    left: 41,
    position: "absolute",
  },
  iconPosition: {
    top: 758,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "3.5%",
    width: "7.25%",
    top: "7.83%",
    right: "86.47%",
    bottom: "88.67%",
    left: "6.28%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  dashboardForUser1Child: {
    top: 67,
    left: 349,
    width: 34,
    height: 34,
    position: "absolute",
  },
  dashboardForUser1Item: {
    top: 129,
    backgroundColor: Color.colorLightblue_100,
    height: 136,
  },
  dashboardForUser1Inner: {
    top: 282,
    backgroundColor: Color.colorPlum_100,
    height: 138,
  },
  rectangleView: {
    top: 436,
    backgroundColor: Color.colorLightgoldenrodyellow,
  },
  dashboardForUser1Child1: {
    top: 590,
    backgroundColor: Color.colorPalegoldenrod_100,
  },
  dashboardForUser1Child2: {
    top: 143,
  },
  dashboardForUser1Child3: {
    top: 298,
    height: 107,
    width: 106,
    backgroundColor: Color.neutralBackground,
    left: 41,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  dashboardForUser1Child4: {
    top: 451,
  },
  dashboardForUser1Child5: {
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
  rewards: {
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
  },
  hotel11: {
    top: 461,
    left: 52,
    width: 85,
  },
  livraisonRapide1Icon: {
    height: 86,
    width: 86,
    top: 153,
    position: "absolute",
  },
  sdgp1141: {
    color: Color.colorAliceblue_300,
  },
  sdgp114: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  sdgp114Wrapper: {
    top: "97.2%",
    right: "36.71%",
    bottom: "0.68%",
    left: "36.71%",
  },
  image2Icon: {
    top: 308,
    width: 100,
    height: 100,
  },
  dashboardForUser1Child6: {
    top: 747,
    borderRadius: Border.br_131xl,
    backgroundColor: Color.colorLightskyblue_100,
    height: 66,
    width: 86,
  },
  home03Icon: {
    left: 62,
    width: 44,
    height: 42,
  },
  analyticsIcon: {
    left: 138,
    width: 47,
    height: 46,
  },
  fileIcon: {
    top: 756,
    left: 322,
    width: 42,
    height: 45,
    position: "absolute",
    overflow: "hidden",
  },
  image29Icon: {
    top: 754,
    left: 262,
    width: 50,
    height: 50,
    position: "absolute",
  },
  sdgp1143: {
    color: Color.colorDarkgray_200,
  },
  sdgp114Container: {
    top: "95.79%",
    right: "38.89%",
    bottom: "2.08%",
    left: "34.54%",
  },
  dashboardForUser1: {
    backgroundColor: Color.colorAliceblue_300,
    flex: 1,
    height: 856,
    overflow: "hidden",
    width: "100%",
  },
});

export default DashboardForUser;
