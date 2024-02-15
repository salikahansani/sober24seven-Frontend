import * as React from "react";
import { Image } from "expo-image";
import {
  StyleSheet,
  Text,
  Pressable,
  View,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import TypeNoteSizeNormalColor from "../components/TypeNoteSizeNormalColor";
import UserGroupImage from "../components/UserGroupImage";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const AboutUs = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.aboutUs}>
      <Image
        style={styles.aboutUsChild}
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
      <View style={styles.aboutUsItem} />
      <TypeNoteSizeNormalColor
        a="S"
        note="Salika"
        leaveANiceThoughtForSomeo="Add a favicon or label. Change the shape of your notes and the text will respond."
        showLabel
        showFavicon
        showA
        typeNoteSizeNormalColorPosition="absolute"
        typeNoteSizeNormalColorBackgroundColor="rgba(229, 0, 39, 0.42)"
        typeNoteSizeNormalColorWidth={309}
        typeNoteSizeNormalColorTop={596}
        typeNoteSizeNormalColorLeft={53}
        bigFavBackgroundColor="unset"
        bigFavPaddingHorizontal="unset"
        bigFavPaddingVertical="unset"
        noteColor="#0e1033"
        leaveANiceFontSize={9}
        leaveANiceColor="#0e1033"
      />
      <TypeNoteSizeNormalColor
        a="S"
        note="Udithx"
        leaveANiceThoughtForSomeo="Add a favicon or label. Change the shape of your notes and the text will respond."
        showLabel
        showFavicon
        showA={false}
        typeNoteSizeNormalColorPosition="absolute"
        typeNoteSizeNormalColorBackgroundColor="rgba(38, 50, 56, 0.39)"
        typeNoteSizeNormalColorWidth={309}
        typeNoteSizeNormalColorTop={456}
        typeNoteSizeNormalColorLeft={53}
        bigFavBackgroundColor="unset"
        bigFavPaddingHorizontal="unset"
        bigFavPaddingVertical="unset"
        noteColor="#0e1033"
        noteOpacity={0.6}
        labelOpacity={0.6}
        leaveANiceFontSize={9}
        leaveANiceColor="#0e1033"
      />
      <TypeNoteSizeNormalColor
        a="S"
        note="Hasini"
        label="Sven"
        leaveANiceThoughtForSomeo="Add a favicon or label. Change the shape of your notes and the text will respond."
        showLabel={false}
        showFavicon
        showA
        typeNoteSizeNormalColorPosition="absolute"
        typeNoteSizeNormalColorBackgroundColor="rgba(252, 163, 38, 0.36)"
        typeNoteSizeNormalColorWidth={309}
        typeNoteSizeNormalColorTop={322}
        typeNoteSizeNormalColorLeft={53}
        bigFavBackgroundColor="#9a2b2b"
        bigFavPaddingHorizontal="unset"
        bigFavPaddingVertical="unset"
        noteColor="#0e1033"
        leaveANiceFontSize={9}
        leaveANiceColor="#0e1033"
      />
      <TypeNoteSizeNormalColor
        a="S"
        note=" Hansani"
        label="S"
        leaveANiceThoughtForSomeo="Add a favicon or label. Change the shape of your notes and the text will respond."
        showLabel={false}
        showFavicon
        showA={false}
        typeNoteSizeNormalColorPosition="absolute"
        typeNoteSizeNormalColorBackgroundColor="rgba(237, 199, 255, 0.47)"
        typeNoteSizeNormalColorWidth={309}
        typeNoteSizeNormalColorTop={182}
        typeNoteSizeNormalColorLeft={51}
        bigFavBackgroundColor="unset"
        bigFavPaddingHorizontal="unset"
        bigFavPaddingVertical="unset"
        noteColor="#0e1033"
        leaveANiceFontSize={9}
        leaveANiceColor="#0e1033"
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
      <View style={[styles.aboutUsInner, styles.image44IconLayout]} />
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
      <Text style={[styles.aboutUs1, styles.sdgp1141Typo]}>About us</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sdgp1141Typo: {
    textAlign: "left",
    fontWeight: "600",
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
  aboutUsChild: {
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
  aboutUsItem: {
    top: 119,
    left: 23,
    backgroundColor: "#bce3f9",
    width: 368,
    height: 614,
    borderRadius: Border.br_xs,
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
  aboutUsInner: {
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
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  image44Icon: {
    top: 759,
    left: 262,
  },
  aboutUs1: {
    top: 130,
    left: 144,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.headingsH5,
    color: Color.colorBlack,
    width: 161,
    height: 19,
    position: "absolute",
  },
  aboutUs: {
    backgroundColor: Color.colorAliceblue_300,
    flex: 1,
    height: 856,
    overflow: "hidden",
    width: "100%",
  },
});

export default AboutUs;
