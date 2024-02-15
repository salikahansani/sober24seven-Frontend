import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserGroupImage from "../components/UserGroupImage";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const Community = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.community}>
      <Image
        style={styles.communityChild}
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
      <View style={styles.communityItem} />
      <Text style={[styles.community1, styles.sdgp1141Typo]}>Community</Text>
      <View style={styles.communityInner} />
      <View style={styles.rectangleView} />
      <Image
        style={styles.home03Icon}
        contentFit="cover"
        source={require("../assets/home032.png")}
      />
      <UserGroupImage
        userGroupImageUserGroup={require("../assets/usergroup4.png")}
        userGroupIconPosition="absolute"
        userGroupIconWidth={56}
        userGroupIconHeight={54}
        userGroupIconTop={760}
        userGroupIconLeft={175}
      />
      <Image
        style={styles.analyticsIcon}
        contentFit="cover"
        source={require("../assets/analytics1.png")}
      />
      <Image
        style={[styles.fileIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/file.png")}
      />
      <Image
        style={[styles.image29Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/image-29.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.moreVerticalIcon, styles.moreIconLayout]}
        contentFit="cover"
        source={require("../assets/morevertical.png")}
      />
      <Image
        style={[styles.moreVerticalIcon1, styles.moreIconLayout]}
        contentFit="cover"
        source={require("../assets/morevertical1.png")}
      />
      <Image
        style={styles.image48Icon}
        contentFit="cover"
        source={require("../assets/image-481.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sdgp1141Typo: {
    textAlign: "left",
    fontWeight: "600",
  },
  iconPosition: {
    top: 760,
    position: "absolute",
  },
  moreIconLayout: {
    width: 14,
    position: "absolute",
    overflow: "hidden",
  },
  communityChild: {
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
  communityItem: {
    top: 116,
    left: 20,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorLightgoldenrodyellow,
    width: 368,
    height: 614,
    position: "absolute",
  },
  community1: {
    top: 139,
    left: 142,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.headingsH5,
    color: Color.colorDarkslategray_100,
    width: 172,
    height: 25,
    position: "absolute",
  },
  communityInner: {
    left: 221,
    width: 100,
    height: 100,
    top: 281,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
    top: 754,
    left: 156,
    borderRadius: Border.br_131xl,
    backgroundColor: Color.colorLightskyblue_100,
    width: 86,
    height: 66,
    position: "absolute",
  },
  home03Icon: {
    top: 764,
    left: 31,
    width: 44,
    height: 42,
    position: "absolute",
    overflow: "hidden",
  },
  analyticsIcon: {
    top: 762,
    left: 94,
    width: 47,
    height: 46,
    position: "absolute",
    overflow: "hidden",
  },
  fileIcon: {
    left: 328,
    width: 42,
    height: 45,
    overflow: "hidden",
  },
  image29Icon: {
    left: 262,
    width: 50,
    height: 50,
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
  moreVerticalIcon: {
    left: 364,
    height: 13,
    top: 281,
  },
  moreVerticalIcon1: {
    top: 589,
    left: 368,
    height: 14,
  },
  image48Icon: {
    top: 659,
    left: 127,
    borderTopLeftRadius: Border.br_3xl,
    borderTopRightRadius: Border.br_3xl,
    width: 192,
    height: 71,
    position: "absolute",
  },
  community: {
    backgroundColor: Color.colorAliceblue_300,
    flex: 1,
    height: 856,
    overflow: "hidden",
    width: "100%",
  },
});

export default Community;
