import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import DarkModeNO from "../components/DarkModeNO";
import NameContainer from "../components/NameContainer";
import DateOfBirthContainer from "../components/DateOfBirthContainer";
import UserGroupImage from "../components/UserGroupImage";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.profile}>
      <View style={styles.profileChild} />
      <View style={styles.profile1}>
        <Image
          style={[styles.vectorIcon, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector10.png")}
        />
        <Text style={[styles.editProfile, styles.editClr]}>Edit profile</Text>
        <Image
          style={styles.profileItem}
          contentFit="cover"
          source={require("../assets/ellipse-8.png")}
        />
      </View>
      <View style={styles.dobPlaceHolder}>
        <Text style={[styles.countryregion, styles.textTypo]}>
          Country/Region
        </Text>
        <Text style={[styles.nigeria, styles.textClr]}>Nigeria</Text>
        <View style={[styles.dobPlaceHolderChild, styles.placeChildLayout]} />
        <Image
          style={[styles.vectorIcon1, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector11.png")}
        />
      </View>
      <View style={[styles.dobPlaceHolder1, styles.placePosition]}>
        <Text style={[styles.dateOfBirth, styles.textTypo]}>Date of Birth</Text>
        <Text style={[styles.text, styles.textClr]}>7/03/2005</Text>
        <View style={[styles.dobPlaceHolderChild, styles.placeChildLayout]} />
        <Image
          style={[styles.vectorIcon2, styles.vectorIconLayout]}
          contentFit="cover"
          source={require("../assets/vector12.png")}
        />
      </View>
      <View style={[styles.passwordPlaceHolder, styles.placeSpaceBlock]}>
        <Text style={[styles.password, styles.textTypo]}>Password</Text>
        <Text style={[styles.text1, styles.nameLayout]}>
          **********************
        </Text>
        <View style={[styles.dobPlaceHolderChild, styles.placeChildLayout]} />
      </View>
      <View style={[styles.emailPlaceHolder, styles.placePosition]}>
        <Text style={[styles.phoneNumber, styles.nameTypo]}>Phone Number</Text>
        <View style={[styles.dobPlaceHolderChild, styles.placeChildLayout]} />
      </View>
      <View style={[styles.namePlaceHolder, styles.placePosition]}>
        <Text style={[styles.name, styles.nameTypo]}>Name</Text>
        <Text style={[styles.favourIsechapRimamchirika, styles.textClr]}>
          Favour Isechap Rimamchirika
        </Text>
        <View style={[styles.namePlaceHolderChild, styles.placeChildLayout]} />
      </View>
      <View style={[styles.button, styles.buttonLayout1]}>
        <View style={[styles.buttonChild, styles.buttonLayout1]} />
        <Text style={[styles.saveChanges, styles.textTypo]}>Save Changes</Text>
      </View>
      <Image
        style={styles.image51Icon}
        contentFit="cover"
        source={require("../assets/image-51.png")}
      />
      <Image
        style={styles.profileInner}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <View style={styles.sdgp114Wrapper}>
        <Pressable
          style={[styles.sdgp114, styles.sdgp114Position]}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.sdgp1141}>@2024 SDGP 114</Text>
        </Pressable>
      </View>
      <View style={styles.profile2}>
        <Image
          style={[styles.vectorIcon3, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
        <Text style={[styles.editProfile1, styles.text2Typo]}>
          Edit profile
        </Text>
        <Image
          style={styles.ellipseIcon}
          contentFit="cover"
          source={require("../assets/ellipse-1.png")}
        />
        <DarkModeNO
          notch={require("../assets/notch.png")}
          networkSignalLight={require("../assets/network-signal-light.png")}
          wiFiSignalLight={require("../assets/wifi-signal--light.png")}
          batteryLight={require("../assets/battery--light.png")}
          indicator={require("../assets/indicator.png")}
          timeLight={require("../assets/time--light.png")}
          darkModeNOPosition="absolute"
          darkModeNOWidth={659}
          darkModeNOHeight={81}
          darkModeNOTop={0}
          darkModeNOLeft={0}
          notchIconRight={1}
          notchIconHeight={55}
          statusIconsTop={30}
          statusIconsRight={26}
          networkSignalLightWidth={37}
          networkSignalLightHeight={26}
          wiFiSignalLightWidth={30}
          wiFiSignalLightHeight={26}
          wiFiSignalLightMarginLeft={7.4}
          batteryLightWidth={46}
          batteryLightHeight={26}
          batteryLightMarginLeft={7.4}
          indicatorIconTop={15}
          indicatorIconRight={132}
          indicatorIconWidth={11}
          indicatorIconHeight={11}
          timeLightTop={24}
          timeLightLeft={22}
          timeLightBorderRadius={37}
          timeLightWidth={100}
          timeLightHeight={39}
        />
        <Image
          style={[styles.vectorIcon4, styles.vectorIconLayout1]}
          contentFit="cover"
          source={require("../assets/vector14.png")}
        />
      </View>
      <View style={styles.placeHolders}>
        <NameContainer
          userImageUrl="Name"
          userName="Favour Isechap Rimamchirika"
        />
        <NameContainer
          userImageUrl="Email"
          userName="Favourisechap47@gmail.com"
          propMarginTop={35.14}
        />
        <View style={styles.passwordPlaceHolder1}>
          <Text style={[styles.password1, styles.password1Typo]}>Password</Text>
          <Text style={[styles.text2, styles.text2Typo]}>
            **********************
          </Text>
          <View
            style={[styles.passwordPlaceHolderItem, styles.buttonItemBorder]}
          />
        </View>
        <DateOfBirthContainer
          personalInfo="Date of Birth"
          birthDate="7/03/2005"
          dimensionCode={require("../assets/vector15.png")}
        />
        <DateOfBirthContainer
          personalInfo="Country/Region"
          birthDate="Nigeria"
          dimensionCode={require("../assets/vector16.png")}
        />
      </View>
      <View style={[styles.button1, styles.buttonLayout]}>
        <View style={[styles.buttonItem, styles.buttonLayout]} />
        <Text style={[styles.saveChanges1, styles.password1Typo]}>
          Save Changes
        </Text>
      </View>
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
      <View style={[styles.rectangleView, styles.image44IconLayout]} />
      <Image
        style={[styles.vectorIcon5, styles.vectorIconLayout1]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.image44Icon, styles.image44IconLayout]}
        contentFit="cover"
        source={require("../assets/image-29.png")}
      />
      <Text style={[styles.xxxxxxx, styles.text1Typo]}>07xxxxxxx</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  vectorIconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  editClr: {
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
  },
  textTypo: {
    lineHeight: 16,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  textClr: {
    color: Color.colorGray_700,
    fontFamily: FontFamily.sfProText24400,
  },
  placeChildLayout: {
    height: 40,
    width: 339,
    borderColor: Color.colorCornflowerblue_300,
    left: 1,
    borderWidth: 1.8,
    borderStyle: "solid",
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: 9,
    position: "absolute",
  },
  vectorIconLayout: {
    width: "6.84%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  placePosition: {
    width: 341,
    left: "50%",
    position: "absolute",
  },
  placeSpaceBlock: {
    marginLeft: -173.9,
    height: 64,
  },
  nameLayout: {
    height: 14,
    lineHeight: 16,
  },
  nameTypo: {
    width: 320,
    fontSize: FontSize.size_lg,
    top: 0,
    textAlign: "left",
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  buttonLayout1: {
    height: 31,
    width: 161,
    left: "50%",
    position: "absolute",
  },
  sdgp114Position: {
    left: "0%",
    top: "0%",
  },
  text2Typo: {
    lineHeight: 32,
    fontSize: FontSize.size_18xl,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  password1Typo: {
    lineHeight: 25,
    fontSize: FontSize.size_10xl_6,
    textAlign: "left",
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
    left: "50%",
    position: "absolute",
  },
  buttonItemBorder: {
    borderWidth: 1.8,
    borderStyle: "solid",
    borderRadius: 9,
  },
  buttonLayout: {
    height: 70,
    width: 294,
    left: "50%",
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
  text1Typo: {
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
  },
  profileChild: {
    top: 141,
    left: 19,
    backgroundColor: "rgba(171, 225, 255, 0.68)",
    width: 368,
    height: 614,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  vectorIcon: {
    height: "14.39%",
    width: "4.42%",
    right: "95.58%",
    bottom: "85.61%",
    left: "0%",
    top: "0%",
  },
  editProfile: {
    marginLeft: -36.55,
    top: 1,
    fontSize: FontSize.size_xl,
    lineHeight: 18,
    width: 184,
    height: 7,
    textAlign: "left",
    fontWeight: "700",
    color: Color.colorBlack,
    left: "50%",
    position: "absolute",
  },
  profileItem: {
    left: 111,
    width: 93,
    height: 76,
    top: 38,
    position: "absolute",
  },
  profile1: {
    height: "13.32%",
    width: "71.09%",
    top: "18.22%",
    right: "17.87%",
    bottom: "68.46%",
    left: "11.04%",
    position: "absolute",
  },
  countryregion: {
    marginLeft: -170.2,
    width: 337,
    height: 11,
    top: 0,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 16,
    fontWeight: "700",
  },
  nigeria: {
    marginLeft: -158.8,
    width: 274,
    height: 12,
    lineHeight: 16,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: "50%",
    position: "absolute",
    top: 38,
  },
  dobPlaceHolderChild: {
    top: 25,
  },
  vectorIcon1: {
    height: "17.47%",
    top: "60.69%",
    right: "6.76%",
    bottom: "21.84%",
    left: "86.4%",
  },
  dobPlaceHolder: {
    marginLeft: -172.4,
    top: 628,
    height: 64,
    width: 340,
    left: "50%",
    position: "absolute",
  },
  dateOfBirth: {
    marginLeft: -170.4,
    width: 319,
    height: 12,
    top: 0,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 16,
    fontWeight: "700",
  },
  text: {
    marginLeft: -159,
    width: 267,
    height: 12,
    lineHeight: 16,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: "50%",
    position: "absolute",
    top: 38,
  },
  vectorIcon2: {
    height: "17.42%",
    top: "60.81%",
    right: "6.78%",
    bottom: "21.77%",
    left: "86.38%",
  },
  dobPlaceHolder1: {
    top: 545,
    marginLeft: -173.9,
    height: 64,
  },
  password: {
    marginLeft: -170.1,
    width: 338,
    height: 12,
    top: 0,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 16,
    fontWeight: "700",
  },
  text1: {
    marginLeft: -159.4,
    top: 40,
    width: 308,
    color: Color.colorGray_700,
    fontFamily: FontFamily.sfProText24400,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    position: "absolute",
    left: "50%",
  },
  passwordPlaceHolder: {
    top: 462,
    width: 340,
    marginLeft: -173.9,
    left: "50%",
    position: "absolute",
  },
  phoneNumber: {
    marginLeft: -170.25,
    fontFamily: FontFamily.manropeBold,
    color: Color.colorMidnightblue_200,
    height: 12,
  },
  emailPlaceHolder: {
    marginLeft: -175.3,
    top: 379,
    height: 65,
  },
  name: {
    marginLeft: -170.35,
    height: 14,
    lineHeight: 16,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
  },
  favourIsechapRimamchirika: {
    marginLeft: -159.35,
    top: 41,
    width: 329,
    height: 12,
    lineHeight: 16,
    fontSize: FontSize.size_lg,
    textAlign: "left",
    left: "50%",
    position: "absolute",
  },
  namePlaceHolderChild: {
    top: 28,
  },
  namePlaceHolder: {
    marginLeft: -176,
    top: 293,
    height: 67,
  },
  buttonChild: {
    marginLeft: -80.55,
    backgroundColor: Color.colorCornflowerblue_100,
    borderColor: Color.colorCornflowerblue_100,
    borderWidth: 1.8,
    borderStyle: "solid",
    borderRadius: 9,
    top: 0,
  },
  saveChanges: {
    marginLeft: -55.75,
    top: 8,
    width: 120,
    height: 8,
    color: Color.colorGray_100,
    fontFamily: FontFamily.robotoBold,
    lineHeight: 16,
    fontWeight: "700",
  },
  button: {
    marginLeft: -85.3,
    top: 711,
    shadowOpacity: 1,
    elevation: 36.99,
    shadowRadius: 36.99,
    shadowOffset: {
      width: 7.39725399017334,
      height: 7.39725399017334,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  image51Icon: {
    top: 250,
    left: 222,
    width: 28,
    height: 20,
    position: "absolute",
  },
  profileInner: {
    top: 67,
    left: 349,
    width: 34,
    height: 34,
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
  vectorIcon3: {
    height: "9.62%",
    width: "3.61%",
    top: "27.19%",
    right: "90.25%",
    bottom: "63.19%",
    left: "6.14%",
  },
  editProfile1: {
    marginLeft: -86.95,
    top: 124,
    width: 171,
    color: Color.colorBlack,
    fontFamily: FontFamily.robotoBold,
    fontWeight: "700",
  },
  ellipseIcon: {
    marginLeft: -111.55,
    top: 209,
    width: 221,
    height: 233,
    left: "50%",
    position: "absolute",
  },
  vectorIcon4: {
    height: "6.79%",
    width: "4.8%",
    top: "87.87%",
    right: "36.01%",
    bottom: "5.34%",
    left: "59.2%",
  },
  profile2: {
    height: "51.64%",
    width: "159.06%",
    top: "105.49%",
    right: "-333.94%",
    bottom: "-57.13%",
    left: "274.88%",
    position: "absolute",
  },
  password1: {
    marginLeft: -310.7,
    top: 0,
    color: Color.colorBlack,
  },
  text2: {
    marginLeft: -290.4,
    top: 91,
    color: Color.colorGray_700,
    fontFamily: FontFamily.sfProText24400,
  },
  passwordPlaceHolderItem: {
    top: 56,
    left: 2,
    borderColor: Color.colorIndianred_100,
    width: 620,
    height: 89,
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderRadius: 9,
    position: "absolute",
  },
  passwordPlaceHolder1: {
    width: 621,
    height: 144,
    marginTop: 35.14,
  },
  placeHolders: {
    top: 1382,
    left: 1138,
    position: "absolute",
  },
  buttonItem: {
    marginLeft: -147,
    backgroundColor: "#ca5a5a",
    borderColor: "#a60303",
    borderWidth: 1.8,
    borderStyle: "solid",
    borderRadius: 9,
    top: 0,
  },
  saveChanges1: {
    marginLeft: -95.2,
    top: 22,
    color: Color.colorGray_100,
  },
  button1: {
    marginLeft: 1095.7,
    top: 2290,
    shadowOpacity: 1,
    elevation: 36.99,
    shadowRadius: 36.99,
    shadowOffset: {
      width: 7.39725399017334,
      height: 7.39725399017334,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
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
  rectangleView: {
    top: 62,
    left: 21,
    backgroundColor: Color.colorLightskyblue_100,
    borderRadius: Border.br_xs,
  },
  vectorIcon5: {
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
  xxxxxxx: {
    top: "48.36%",
    left: "10.87%",
    fontFamily: FontFamily.manropeRegular,
    color: Color.colorGray_400,
  },
  profile: {
    backgroundColor: Color.colorAliceblue_300,
    flex: 1,
    height: 856,
    overflow: "hidden",
    width: "100%",
  },
});

export default Profile;
