import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserGroupImage from "../components/UserGroupImage";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const Notifications = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.notifications}>
      <Image
        style={styles.notificationsChild}
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
      <View style={styles.notificationsItem} />
      <View
        style={[styles.notificationsInner, styles.notificationsChildLayout1]}
      />
      <View style={[styles.rectangleView, styles.notificationsChildLayout]} />
      <Text style={[styles.locationTracker, styles.locationTypo]}>
        Location Tracker
      </Text>
      <Text style={[styles.descriptionDeCatgorie, styles.descriptionTypo]}>
        Description de catégorie ...
      </Text>
      <Image
        style={[styles.contrat1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/contrat-11.png")}
      />
      <View
        style={[styles.notificationsInner, styles.notificationsChildLayout1]}
      />
      <View style={[styles.rectangleView, styles.notificationsChildLayout]} />
      <Text style={[styles.locationTracker, styles.locationTypo]}>
        Location Tracker
      </Text>
      <Text style={[styles.descriptionDeCatgorie, styles.descriptionTypo]}>
        Description de catégorie ...
      </Text>
      <Image
        style={[styles.contrat1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/contrat-11.png")}
      />
      <View style={[styles.notificationsChild3, styles.notificationsChildBg]} />
      <View style={[styles.rectangleView, styles.notificationsChildLayout]} />
      <Text style={[styles.locationTracker, styles.locationTypo]}>
        Location Tracker
      </Text>
      <Text style={[styles.descriptionDeCatgorie2, styles.descriptionTypo]}>
        Description de catégorie ...
      </Text>
      <Image
        style={[styles.contrat1Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/contrat-11.png")}
      />
      <Text style={[styles.locationTracker3, styles.locationTypo]}>
        Location Tracker
      </Text>
      <Text style={[styles.locationTracker3, styles.locationTypo]}>
        Location Tracker
      </Text>
      <View
        style={[styles.notificationsChild5, styles.notificationsChildPosition]}
      />
      <Text style={[styles.locationTracker5, styles.locationTypo]}>
        Location Tracker
      </Text>
      <View
        style={[styles.notificationsChild6, styles.notificationsChildPosition]}
      />
      <View style={[styles.notificationsChild7, styles.notificationsChildBg]} />
      <View
        style={[styles.notificationsChild8, styles.notificationsChildLayout]}
      />
      <Text style={[styles.locationTracker6, styles.locationTypo]}>
        Location Tracker
      </Text>
      <Text style={[styles.descriptionDeCatgorie3, styles.descriptionTypo]}>
        Description de catégorie ...
      </Text>
      <Image
        style={[styles.contrat4Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/contrat-11.png")}
      />
      <View
        style={[styles.notificationsChild9, styles.notificationsChildLayout1]}
      />
      <View
        style={[styles.notificationsChild10, styles.notificationsChildLayout]}
      />
      <Text style={[styles.locationTracker7, styles.locationTypo]}>
        Location Tracker
      </Text>
      <Text style={[styles.descriptionDeCatgorie4, styles.descriptionTypo]}>
        Description de catégorie ...
      </Text>
      <Image
        style={[styles.contrat5Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/contrat-11.png")}
      />
      <Image
        style={[styles.home03Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/home033.png")}
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
      <View style={[styles.notificationsChild11, styles.image44IconLayout]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.image44Icon, styles.image44IconLayout]}
        contentFit="cover"
        source={require("../assets/image-29.png")}
      />
      <Image
        style={styles.contrat7Icon}
        contentFit="cover"
        source={require("../assets/contrat-7.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Text style={styles.notifications1}>{`Notifications
`}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  notificationsChildLayout1: {
    height: 137,
    left: 38,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  notificationsChildLayout: {
    height: 108,
    left: 50,
    width: 106,
    backgroundColor: Color.neutralBackground,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  locationTypo: {
    height: 26,
    width: 172,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.headingsH5,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  descriptionTypo: {
    height: 14,
    width: 153,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    left: 182,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    position: "absolute",
  },
  iconLayout: {
    height: 88,
    left: 60,
    width: 86,
    position: "absolute",
  },
  notificationsChildBg: {
    backgroundColor: Color.colorAliceblue_100,
    width: 339,
  },
  notificationsChildPosition: {
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
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
  vectorIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  notificationsChild: {
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
  notificationsItem: {
    top: 123,
    left: 23,
    backgroundColor: "rgba(171, 225, 255, 0.73)",
    width: 368,
    height: 614,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  notificationsInner: {
    backgroundColor: Color.colorPalegoldenrod_100,
    width: 339,
    height: 137,
    left: 38,
    top: 519,
  },
  rectangleView: {
    top: 534,
  },
  locationTracker: {
    top: 543,
    left: 177,
    height: 26,
    width: 172,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.headingsH5,
  },
  descriptionDeCatgorie: {
    top: 574,
  },
  contrat1Icon: {
    top: 544,
  },
  notificationsChild3: {
    height: 137,
    left: 38,
    borderRadius: Border.br_xs,
    position: "absolute",
    backgroundColor: Color.colorAliceblue_100,
    top: 519,
  },
  descriptionDeCatgorie2: {
    top: 576,
  },
  locationTracker3: {
    top: 700,
    left: 173,
  },
  notificationsChild5: {
    top: 676,
    height: 61,
    left: 34,
    backgroundColor: Color.colorAliceblue_100,
    width: 339,
  },
  locationTracker5: {
    top: 705,
    left: 176,
  },
  notificationsChild6: {
    top: 691,
    left: 46,
    height: 46,
    width: 106,
    backgroundColor: Color.neutralBackground,
    borderTopRightRadius: Border.br_xs,
    borderTopLeftRadius: Border.br_xs,
  },
  notificationsChild7: {
    top: 355,
    height: 137,
    left: 38,
    borderRadius: Border.br_xs,
    position: "absolute",
    backgroundColor: Color.colorAliceblue_100,
  },
  notificationsChild8: {
    top: 370,
  },
  locationTracker6: {
    top: 379,
    left: 177,
    height: 26,
    width: 172,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.headingsH5,
  },
  descriptionDeCatgorie3: {
    top: 410,
  },
  contrat4Icon: {
    top: 380,
  },
  notificationsChild9: {
    top: 191,
    backgroundColor: "#7fbef7",
    width: 339,
    height: 137,
    left: 38,
  },
  notificationsChild10: {
    top: 206,
  },
  locationTracker7: {
    top: 215,
    left: 177,
    height: 26,
    width: 172,
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.headingsH5,
  },
  descriptionDeCatgorie4: {
    top: 246,
  },
  contrat5Icon: {
    top: 216,
  },
  home03Icon: {
    width: 44,
    height: 42,
    left: 34,
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
  notificationsChild11: {
    top: 62,
    left: 21,
    backgroundColor: Color.colorLightskyblue_100,
    borderRadius: Border.br_xs,
  },
  vectorIcon: {
    height: "3.5%",
    width: "7.25%",
    top: "8.41%",
    right: "85.27%",
    bottom: "88.08%",
    left: "7.49%",
  },
  image44Icon: {
    top: 759,
    left: 262,
  },
  contrat7Icon: {
    top: 698,
    left: 56,
    height: 33,
    width: 86,
    position: "absolute",
  },
  vectorIcon1: {
    height: "1.92%",
    width: "3.14%",
    top: "16.36%",
    right: "82.37%",
    bottom: "81.73%",
    left: "14.49%",
  },
  notifications1: {
    marginLeft: -56,
    top: 141,
    left: "50%",
    lineHeight: 18,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorBlack,
    width: 127,
    height: 23,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  notifications: {
    backgroundColor: Color.colorAliceblue_300,
    flex: 1,
    height: 856,
    overflow: "hidden",
    width: "100%",
  },
});

export default Notifications;
