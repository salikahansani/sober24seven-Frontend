import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserGroupImage from "../components/UserGroupImage";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Settings = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.settings}>
      <Image
        style={styles.settingsChild}
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
      {/* <Image
        style={[styles.home03Icon, styles.iconPosition3]}
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
        style={[styles.analyticsIcon, styles.iconPosition3]}
        contentFit="cover"
        source={require("../assets/analytics1.png")}
      />
      <Image
        style={[styles.fileIcon, styles.iconPosition3]}
        contentFit="cover"
        source={require("../assets/file.png")}
      />
      <View style={[styles.settingsItem, styles.image44IconLayout]} />
      <Image
        style={[styles.vectorIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.image44Icon, styles.image44IconLayout]}
        contentFit="cover"
        source={require("../assets/image-29.png")}
      />
      <View style={styles.settingsInner} />
      <Text style={[styles.enablesFlashingLight, styles.allowsFlexBox]}>
        *enables flashing light*
      </Text>
      <Text style={[styles.allowsOverrideOf, styles.textToSpeechLayout]}>
        *allows override of do not disturb mode*
      </Text>
      <Text style={[styles.notification, styles.notificationTypo]}>
        Notification
      </Text>
      <Text style={[styles.notificationSounds, styles.notificationTypo]}>
        Notification Sounds
      </Text>
      <Text style={[styles.lights, styles.notificationTypo]}>Lights</Text>
      <Text style={styles.quietHours}>Quiet hours</Text>
      <Text style={[styles.importance, styles.importancePosition]}>
        Importance
      </Text>
      <Image
        style={[styles.rinotification3LineIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rinotification3line.png")}
      />
      <Image
        style={[
          styles.mditoggleSwitchOffOutlineIcon,
          styles.mditoggleIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/mditoggleswitchoffoutline.png")}
      />
      <Image
        style={[styles.mditoggleSwitchOffOutlineIcon1, styles.lineViewPosition]}
        contentFit="cover"
        source={require("../assets/mditoggleswitchoffoutline.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <View style={[styles.lineView, styles.settingsChildLayout]} />
      <View style={[styles.settingsChild1, styles.settingsChildLayout]} />
      <View style={[styles.settingsChild2, styles.settingsChildLayout]} />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <View style={[styles.settingsChild3, styles.rectangleViewLayout]} />
      <Text style={[styles.am, styles.amLayout]}>00:00 AM</Text>
      <View style={[styles.settingsChild4, styles.settingsChildPosition2]} />
      <View style={[styles.settingsChild5, styles.settingsChildPosition2]} />
      <Text style={[styles.am1, styles.amLayout]}>00:00 AM</Text>
      <View style={[styles.settingsChild6, styles.settingsChildLayout]} />
      <View style={styles.settingsChild7} />
      <View style={styles.settingsChild8} />
      <Image
        style={[styles.phgearIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/phgear.png")}
      />
      <Image
        style={[styles.materialSymbolslockOutlineIcon, styles.iconPosition1]}
        contentFit="cover"
        source={require("../assets/phgear.png")}
      />
      <Image
        style={[styles.materialSymbolsarrowForwardIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/materialsymbolsarrowforwardiosrounded.png")}
      />
      <Text style={[styles.allowsAppTo, styles.amLayout]}>
        *allows app to access your contacts, photos and location*
      </Text>
      <Text style={[styles.privacy, styles.notificationTypo]}>Privacy</Text>
      <Text style={[styles.permissions, styles.notificationTypo]}>
        Permissions
      </Text>
      <Text style={[styles.verifyAccount, styles.notificationTypo]}>
        Verify Account
      </Text>
      <View style={[styles.settingsChild9, styles.settingsChildPosition1]} />
      <View style={[styles.settingsChild10, styles.settingsChildPosition1]} />
      <Image
        style={[styles.materialSymbolsarrowForwardIcon1, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/materialsymbolsarrowforwardiosrounded.png")}
      />
      <View
        style={[styles.materialSymbolsarrowForward, styles.materialPosition]}
      />
      <Image
        style={[
          styles.materialSymbolsarrowForwardIcon2,
          styles.icroundRemoveRedEyePosition,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolsarrowforwardiosrounded1.png")}
      />
      <Text style={[styles.personalAccountAnd, styles.notificationTypo]}>
        Personal Account and Information
      </Text>
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Text style={[styles.youHaveUnsaved, styles.resetTypo]}>
        You have unsaved changes!
      </Text>
      <Text style={[styles.reset, styles.resetTypo]}>Reset</Text>
      <Text style={[styles.save, styles.notificationTypo]}>Save</Text>
      <View style={[styles.settingsChild11, styles.settingsChildPosition1]} />
      <Image
        style={[styles.icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/.png")}
      />
      <Text style={[styles.magnifyingglass, styles.allowsFlexBox]}>ㅤ</Text>
      <Text style={styles.placeholderLabel}>Search</Text>
      <Image
        style={[styles.groupIcon, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <Image
        style={[styles.groupIcon1, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/group1.png")}
      />
      <Image
        style={styles.dnounMagnifyingGlass102842Icon}
        contentFit="cover"
        source={require("../assets/dnounmagnifyingglass102842-4.png")}
      />
      <Image
        style={[styles.materialSymbolslockOutlineIcon1, styles.materialLayout]}
        contentFit="cover"
        source={require("../assets/materialsymbolslockoutline.png")}
      />
      <View
        style={[styles.icroundRemoveRedEye, styles.settingsChild18Layout]}
      />
      <View
        style={[styles.materialSymbolsarrowDropDo, styles.materialLayout]}
      />
      <View style={[styles.settingsChild12, styles.settingsChildLayout]} />
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-1404.png")}
      />
      <View style={[styles.materialSymbolsarrowDropDo1, styles.iconLayout]} />
      <Image
        style={[styles.vectorIcon4, styles.groupIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Text style={[styles.accessibility, styles.importancePosition]}>
        Accessibility
      </Text>
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
      <Text style={[styles.textToSpeech, styles.notificationTypo]}>
        Text to Speech
      </Text>
      <Text style={[styles.fontSize, styles.fontSizeTypo]}>Font Size</Text>
      <Text style={[styles.a, styles.aTypo]}>A</Text>
      <Text style={[styles.a1, styles.aTypo]}>A</Text>
      <Text style={[styles.colourContrast, styles.fontSizeTypo]}>
        Colour contrast
      </Text>
      <Text style={[styles.colourblind, styles.languageTypo]}>Colourblind</Text>
      <Image
        style={[styles.vectorIcon6, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.vectorIcon7, styles.vectorIconPosition]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <View style={[styles.settingsChild13, styles.settingsChildPosition]} />
      <View style={[styles.settingsChild14, styles.settingsChildPosition]} />
      <View style={[styles.settingsChild15, styles.settingsChildPosition]} />
      <View style={[styles.settingsChild16, styles.settingsChildPosition]} />
      <View style={styles.settingsChild17} />
      <Text style={[styles.default, styles.defaultTypo]}>Default</Text>
      <Image
        style={[styles.vectorIcon8, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Text style={[styles.language, styles.languageTypo]}>Language</Text>
      <View style={[styles.settingsChild18, styles.settingsChild18Layout]} />
      <Text style={[styles.englishuk, styles.defaultTypo]}>English(UK)</Text>
      <Image
        style={[styles.vectorIcon9, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition3: {
    top: 763,
    position: "absolute",
    overflow: "hidden",
  },
  image44IconLayout: {
    height: 50,
    width: 50,
    position: "absolute",
  },
  groupIconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  allowsFlexBox: {
    justifyContent: "center",
    textAlign: "center",
  },
  textToSpeechLayout: {
    height: 10,
    opacity: 0.5,
    color: Color.colorBlack,
  },
  notificationTypo: {
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    lineHeight: 54,
    position: "absolute",
  },
  importancePosition: {
    left: 55,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    opacity: 0.5,
    alignItems: "center",
    display: "flex",
    color: Color.colorBlack,
    lineHeight: 54,
    position: "absolute",
  },
  iconLayout: {
    width: 13,
    height: 13,
    position: "absolute",
    overflow: "hidden",
  },
  mditoggleIconLayout: {
    height: 29,
    width: 27,
    left: 349,
    overflow: "hidden",
  },
  lineViewPosition: {
    top: 239,
    position: "absolute",
  },
  vectorIconPosition: {
    left: "84.06%",
    height: "1.64%",
  },
  settingsChildLayout: {
    height: 1,
    borderStyle: "solid",
  },
  rectangleViewLayout: {
    width: 45,
    left: 267,
    top: 284,
    height: 16,
    borderRadius: 12,
    position: "absolute",
  },
  amLayout: {
    height: 9,
    color: Color.colorBlack,
    position: "absolute",
  },
  settingsChildPosition2: {
    left: 331,
    height: 16,
    width: 45,
    borderRadius: 12,
    top: 284,
    position: "absolute",
  },
  iconPosition1: {
    left: 20,
    width: 13,
    height: 14,
    position: "absolute",
    overflow: "hidden",
  },
  settingsChildPosition1: {
    left: 41,
    position: "absolute",
  },
  materialPosition: {
    left: 358,
    width: 13,
    position: "absolute",
  },
  icroundRemoveRedEyePosition: {
    top: 641,
    overflow: "hidden",
  },
  vectorIconLayout1: {
    height: "1.29%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iconPosition: {
    right: "9.9%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  resetTypo: {
    height: 18,
    top: 708,
    fontSize: FontSize.size_4xs_9,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 54,
    position: "absolute",
  },
  materialLayout: {
    width: 12,
    height: 13,
    position: "absolute",
    overflow: "hidden",
  },
  settingsChild18Layout: {
    height: 15,
    position: "absolute",
  },
  fontSizeTypo: {
    left: 56,
    fontSize: FontSize.size_4xs_9,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 54,
    position: "absolute",
  },
  aTypo: {
    top: 454,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 54,
    height: 50,
    position: "absolute",
  },
  languageTypo: {
    width: 65,
    fontSize: FontSize.size_4xs_9,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 54,
    position: "absolute",
  },
  settingsChildPosition: {
    left: 38,
    height: 1,
    width: 339,
    borderTopWidth: 0.6,
    borderColor: Color.colorDarkslateblue_100,
    borderStyle: "solid",
    position: "absolute",
  },
  defaultTypo: {
    fontSize: FontSize.size_5xs_7,
    opacity: 0.7,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 54,
    position: "absolute",
  },
  vectorIconLayout: {
    left: "87.68%",
    height: "0.35%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  settingsChild: {
    top: 67,
    height: 34,
    width: 34,
    left: 349,
    position: "absolute",
  },
  sdgp1141: {
    height: "100%",
    fontSize: FontSize.size_sm,
    fontWeight: "600",
    fontFamily: FontFamily.manropeSemiBold,
    color: Color.colorDarkgray_200,
    textAlign: "left",
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
  home03Icon: {
    left: 34,
    width: 44,
    height: 42,
  },
  analyticsIcon: {
    left: 105,
    height: 46,
    width: 47,
  },
  fileIcon: {
    left: 339,
    width: 42,
    height: 45,
  },
  settingsItem: {
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
  settingsInner: {
    top: 121,
    left: 23,
    backgroundColor: "rgba(171, 225, 255, 0.66)",
    width: 368,
    height: 614,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  enablesFlashingLight: {
    top: 252,
    width: 107,
    height: 23,
    opacity: 0.5,
    alignItems: "center",
    display: "flex",
    lineHeight: 54,
    justifyContent: "center",
    textAlign: "center",
    color: Color.colorBlack,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xs,
    left: 52,
    position: "absolute",
  },
  allowsOverrideOf: {
    top: 328,
    width: 176,
    left: 54,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 54,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xs,
    position: "absolute",
  },
  notification: {
    top: 187,
    width: 120,
    height: 11,
    fontSize: FontSize.size_lg_9,
    fontWeight: "700",
    opacity: 0.5,
    color: Color.colorBlack,
    left: 53,
  },
  notificationSounds: {
    top: 219,
    width: 98,
    fontSize: FontSize.size_4xs_9,
    height: 11,
    opacity: 0.5,
    color: Color.colorBlack,
    left: 52,
  },
  lights: {
    top: 244,
    left: 42,
    width: 60,
    fontSize: FontSize.size_4xs_9,
    height: 11,
    opacity: 0.5,
    color: Color.colorBlack,
  },
  quietHours: {
    width: 61,
    height: 4,
    top: 288,
    fontSize: FontSize.size_4xs_9,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    opacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    textAlign: "center",
    color: Color.colorBlack,
    lineHeight: 54,
    left: 52,
    position: "absolute",
  },
  importance: {
    top: 313,
    width: 56,
    height: 14,
    fontSize: FontSize.size_4xs_9,
    justifyContent: "center",
    textAlign: "center",
    left: 55,
  },
  rinotification3LineIcon: {
    height: 13,
    left: 40,
    top: 185,
    width: 13,
  },
  mditoggleSwitchOffOutlineIcon: {
    top: 208,
    position: "absolute",
  },
  mditoggleSwitchOffOutlineIcon1: {
    height: 29,
    width: 27,
    left: 349,
    overflow: "hidden",
  },
  vectorIcon1: {
    top: "36.68%",
    bottom: "61.68%",
    right: "9.66%",
    width: "6.28%",
    left: "84.06%",
    height: "1.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  lineView: {
    width: 339,
    height: 1,
    borderTopWidth: 0.6,
    borderColor: Color.colorDarkslateblue_100,
    borderStyle: "solid",
    top: 239,
    position: "absolute",
    left: 40,
  },
  settingsChild1: {
    top: 276,
    width: 339,
    height: 1,
    borderTopWidth: 0.6,
    borderColor: Color.colorDarkslateblue_100,
    borderStyle: "solid",
    left: 40,
    position: "absolute",
  },
  settingsChild2: {
    top: 308,
    width: 339,
    height: 1,
    borderTopWidth: 0.6,
    borderColor: Color.colorDarkslateblue_100,
    borderStyle: "solid",
    left: 40,
    position: "absolute",
  },
  rectangleView: {
    height: 16,
    backgroundColor: Color.colorLavender_100,
  },
  settingsChild3: {
    backgroundColor: Color.colorLightskyblue_200,
    height: 16,
  },
  am: {
    left: 270,
    width: 43,
    opacity: 0.7,
    fontSize: FontSize.size_5xs_1,
    height: 9,
    top: 288,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  settingsChild4: {
    backgroundColor: Color.colorLavender_100,
  },
  settingsChild5: {
    backgroundColor: Color.colorLightskyblue_200,
  },
  am1: {
    left: 335,
    width: 39,
    opacity: 0.7,
    fontSize: FontSize.size_5xs_1,
    height: 9,
    top: 288,
    fontFamily: FontFamily.interBold,
    fontWeight: "700",
    textAlign: "left",
  },
  settingsChild6: {
    top: 292,
    left: 318,
    borderColor: Color.colorBlack,
    width: 11,
    borderTopWidth: 0.6,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  settingsChild7: {
    top: 703,
    left: 142,
    width: 243,
    height: 30,
    backgroundColor: Color.colorLightskyblue_200,
    borderRadius: 12,
    position: "absolute",
  },
  settingsChild8: {
    top: 710,
    left: 343,
    backgroundColor: "rgba(5, 113, 212, 0.9)",
    width: 38,
    height: 16,
    borderRadius: 12,
    position: "absolute",
  },
  phgearIcon: {
    top: 208,
  },
  materialSymbolslockOutlineIcon: {
    top: 236,
  },
  materialSymbolsarrowForwardIcon: {
    left: 167,
    height: 13,
    top: 185,
    width: 13,
  },
  allowsAppTo: {
    top: 621,
    width: 265,
    left: 53,
    opacity: 0.5,
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    display: "flex",
    lineHeight: 54,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_4xs,
  },
  privacy: {
    left: 45,
    width: 105,
    top: 581,
    height: 13,
    fontSize: FontSize.size_lg_9,
    fontWeight: "700",
    opacity: 0.5,
    color: Color.colorBlack,
  },
  permissions: {
    top: 610,
    left: 51,
    width: 84,
    height: 8,
    fontSize: FontSize.size_4xs_9,
    opacity: 0.5,
    color: Color.colorBlack,
  },
  verifyAccount: {
    top: 644,
    width: 92,
    left: 50,
    fontSize: FontSize.size_4xs_9,
    height: 10,
    opacity: 0.5,
    color: Color.colorBlack,
  },
  settingsChild9: {
    top: 635,
    width: 340,
    height: 1,
    borderStyle: "solid",
    borderTopWidth: 0.6,
    borderColor: Color.colorDarkslateblue_100,
    left: 41,
  },
  settingsChild10: {
    top: 662,
    height: 1,
    borderStyle: "solid",
    width: 339,
    borderTopWidth: 0.6,
    borderColor: Color.colorDarkslateblue_100,
  },
  materialSymbolsarrowForwardIcon1: {
    left: 134,
    top: 581,
    height: 13,
  },
  materialSymbolsarrowForward: {
    top: 615,
    height: 13,
    overflow: "hidden",
  },
  materialSymbolsarrowForwardIcon2: {
    left: 358,
    width: 13,
    position: "absolute",
    height: 14,
  },
  personalAccountAnd: {
    top: 671,
    left: 36,
    width: 204,
    height: 12,
    fontSize: FontSize.size_4xs_9,
    opacity: 0.5,
    color: Color.colorBlack,
  },
  vectorIcon2: {
    top: "78.39%",
    bottom: "20.33%",
    left: "87.44%",
    right: "11.11%",
    width: "1.45%",
  },
  vectorIcon3: {
    width: "6.04%",
    top: "71.14%",
    bottom: "27.22%",
    left: "84.06%",
    height: "1.64%",
    right: "9.9%",
  },
  youHaveUnsaved: {
    left: 155,
    width: 141,
  },
  reset: {
    left: 307,
    opacity: 0.7,
    width: 34,
  },
  save: {
    top: 709,
    left: 337,
    color: "#f8f8f8",
    width: 49,
    height: 17,
    fontSize: FontSize.size_4xs_9,
  },
  settingsChild11: {
    top: 126,
    backgroundColor: "#e9eeff",
    width: 308,
    height: 36,
    borderRadius: 12,
  },
  icon: {
    height: "2.57%",
    width: "5.07%",
    top: "15.42%",
    bottom: "82.01%",
    left: "85.02%",
  },
  magnifyingglass: {
    height: "3.27%",
    width: "6.52%",
    top: "15.19%",
    left: "9.9%",
    fontSize: 19,
    fontWeight: "500",
    fontFamily: FontFamily.openSansMedium,
    color: "#d9d9d9",
    alignItems: "center",
    display: "flex",
    lineHeight: 54,
    justifyContent: "center",
    textAlign: "center",
    position: "absolute",
  },
  placeholderLabel: {
    marginTop: -292,
    top: "50%",
    left: 69,
    fontSize: 18,
    letterSpacing: 0,
    lineHeight: 24,
    fontFamily: FontFamily.sfProText24400,
    color: Color.labelColorsLCLSecondary,
    width: 225,
    height: 13,
    textAlign: "left",
    position: "absolute",
  },
  groupIcon: {
    height: "2.79%",
    width: "5.6%",
    top: "15.4%",
    right: "23.6%",
    bottom: "81.81%",
    left: "70.8%",
  },
  groupIcon1: {
    height: "2.21%",
    width: "3.29%",
    top: "15.63%",
    right: "19.88%",
    bottom: "82.16%",
    left: "76.84%",
  },
  dnounMagnifyingGlass102842Icon: {
    top: 135,
    left: 44,
    width: 23,
    height: 19,
    position: "absolute",
  },
  materialSymbolslockOutlineIcon1: {
    left: 43,
    top: 581,
  },
  icroundRemoveRedEye: {
    left: 357,
    width: 15,
    top: 641,
    overflow: "hidden",
  },
  materialSymbolsarrowDropDo: {
    top: 420,
    left: 363,
  },
  settingsChild12: {
    top: 480,
    left: 296,
    borderColor: Color.colorGray_700,
    borderTopWidth: 1,
    width: 68,
    height: 1,
    borderStyle: "solid",
    position: "absolute",
  },
  ellipseIcon: {
    top: 477,
    left: 328,
    height: 5,
    width: 5,
    position: "absolute",
  },
  materialSymbolsarrowDropDo1: {
    top: 401,
    left: 360,
    height: 13,
  },
  vectorIcon4: {
    height: "1.52%",
    width: "3.14%",
    top: "43.11%",
    right: "87.68%",
    bottom: "55.37%",
    left: "9.18%",
  },
  accessibility: {
    top: 363,
    fontSize: FontSize.size_xl,
    width: 129,
    height: 26,
    textAlign: "left",
  },
  vectorIcon5: {
    top: "43.22%",
    right: "54.35%",
    bottom: "55.49%",
    left: "44.44%",
    width: "1.21%",
  },
  textToSpeech: {
    top: 440,
    width: 80,
    fontSize: FontSize.size_4xs_9,
    left: 53,
    height: 10,
    opacity: 0.5,
    color: Color.colorBlack,
  },
  fontSize: {
    top: 469,
    width: 51,
    height: 16,
  },
  a: {
    left: 287,
    fontSize: 6,
    width: 5,
  },
  a1: {
    left: 366,
    width: 6,
    fontSize: FontSize.size_4xs_9,
  },
  colourContrast: {
    top: 506,
    width: 80,
    height: 13,
  },
  colourblind: {
    top: 536,
    height: 12,
    left: 54,
  },
  vectorIcon6: {
    top: "51.05%",
    bottom: "47.31%",
    right: "9.66%",
    width: "6.28%",
    left: "84.06%",
    height: "1.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon7: {
    top: "58.64%",
    bottom: "39.72%",
    right: "9.66%",
    width: "6.28%",
    left: "84.06%",
    height: "1.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  settingsChild13: {
    top: 460,
  },
  settingsChild14: {
    top: 428,
  },
  settingsChild15: {
    top: 495,
  },
  settingsChild16: {
    top: 529,
  },
  settingsChild17: {
    top: 539,
    left: 320,
    width: 54,
    backgroundColor: Color.colorLightskyblue_200,
    height: 16,
    borderRadius: 12,
    position: "absolute",
  },
  default: {
    top: 543,
    left: 325,
    width: 37,
    height: 8,
  },
  vectorIcon8: {
    top: "63.79%",
    right: "10.87%",
    bottom: "35.86%",
    width: "1.45%",
  },
  language: {
    top: 400,
    height: 17,
    left: 50,
  },
  settingsChild18: {
    top: 403,
    left: 314,
    backgroundColor: Color.colorLightskyblue_200,
    borderRadius: 12,
    width: 60,
  },
  englishuk: {
    top: 406,
    left: 319,
    height: 11,
    width: 47,
  },
  vectorIcon9: {
    top: "47.78%",
    bottom: "51.87%",
    width: "1.21%",
    right: "11.11%",
  },
  settings: {
    backgroundColor: Color.colorAliceblue_300,
    flex: 1,
    height: 856,
    overflow: "hidden",
    width: "100%",
  },
});

export default Settings;
