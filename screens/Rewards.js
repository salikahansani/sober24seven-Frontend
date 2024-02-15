import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, Pressable, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormContainer from "../components/FormContainer";
import BackDoneBar from "../components/BackDoneBar";
import UserGroupImage from "../components/UserGroupImage";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const Rewards = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.rewards}>
      <Image
        style={styles.rewardsChild}
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
      <View style={styles.rewardsItem} />
      <FormContainer />
      <BackDoneBar
        iconsarrowBack24px={require("../assets/iconsarrow-back-24px.png")}
        showDone={false}
        backDoneBarPosition="absolute"
        backDoneBarTop={143}
        backDoneBarLeft={18}
        backDoneBarHeight={32}
      />
      <View style={styles.rewardsInner} />
      <Image
        style={[styles.home03Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/home033.png")}
      />
      <UserGroupImage
        userGroupImageUserGroup={require("../assets/usergroup2.png")}
        userGroupIconPosition="absolute"
        userGroupIconWidth={56}
        userGroupIconHeight={54}
        userGroupIconTop={759}
        userGroupIconLeft={161}
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
        style={[styles.image29Icon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/image-291.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Text style={[styles.points, styles.textTypo]}>155 points</Text>
      <Text style={[styles.milestone, styles.milestoneTypo]}>Milestone</Text>
      <View style={[styles.rectangleView, styles.rectanglePosition]} />
      <Image
        style={[styles.rectangleIcon, styles.rectanglePosition]}
        contentFit="cover"
        source={require("../assets/rectangle-2309.png")}
      />
      <View style={[styles.rewardsChild1, styles.claimPointsPosition]} />
      <View style={[styles.rewardsChild2, styles.rewardsChildLayout1]} />
      <View style={[styles.rewardsChild3, styles.rewardsChildLayout1]} />
      <View style={styles.rewardsChild4} />
      <Image
        style={[styles.akarIconscheck, styles.akarLayout]}
        contentFit="cover"
        source={require("../assets/akariconscheck.png")}
      />
      <Image
        style={[styles.akarIconscheck1, styles.akarLayout]}
        contentFit="cover"
        source={require("../assets/akariconscheck.png")}
      />
      <Text style={[styles.points1, styles.pointsTypo]}>50 points</Text>
      <Text style={[styles.points2, styles.pointsTypo]}>100 points</Text>
      <Text style={styles.points3}>500 points</Text>
      <Image
        style={[styles.ellipseIcon, styles.rewardsChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-184.png")}
      />
      <Image
        style={[styles.rewardsChild5, styles.rewardsChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-184.png")}
      />
      <Image
        style={[styles.rewardsChild6, styles.rewardsChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-186.png")}
      />
      <Image
        style={[styles.rewardsChild7, styles.rewardsChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-187.png")}
      />
      <Image
        style={[styles.rewardsChild8, styles.rewardsChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-184.png")}
      />
      <Image
        style={styles.rewardsChild9}
        contentFit="cover"
        source={require("../assets/ellipse-189.png")}
      />
      <Text style={[styles.text, styles.textPosition]}>500</Text>
      <Text style={[styles.claimPoints, styles.claimPointsPosition]}>
        claim points
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    top: 763,
    overflow: "hidden",
  },
  iconLayout1: {
    width: 47,
    top: 761,
  },
  iconLayout: {
    height: 45,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorBlack,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    textAlign: "left",
  },
  milestoneTypo: {
    height: 19,
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
  },
  rectanglePosition: {
    borderRadius: Border.br_4xs,
    left: 25,
    position: "absolute",
  },
  claimPointsPosition: {
    left: 27,
    position: "absolute",
  },
  rewardsChildLayout1: {
    height: 35,
    borderRadius: Border.br_8xs,
    left: 52,
    width: 47,
    position: "absolute",
  },
  akarLayout: {
    width: 25,
    left: 63,
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  pointsTypo: {
    left: 121,
    height: 19,
    fontFamily: FontFamily.urbanistRegular,
    letterSpacing: 1.6,
    fontSize: FontSize.size_xl,
    textAlign: "left",
    position: "absolute",
  },
  rewardsChildLayout: {
    width: 7,
    top: 236,
    height: 4,
    position: "absolute",
  },
  rewardsChildPosition: {
    width: 8,
    top: 236,
    position: "absolute",
  },
  textPosition: {
    letterSpacing: 1.6,
    position: "absolute",
  },
  rewardsChild: {
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
  rewardsItem: {
    top: 122,
    left: 19,
    borderRadius: Border.br_xs,
    backgroundColor: "rgba(254, 238, 181, 0.87)",
    width: 368,
    height: 614,
    position: "absolute",
  },
  rewardsInner: {
    top: 751,
    left: 235,
    borderRadius: Border.br_131xl,
    backgroundColor: Color.colorLightskyblue_100,
    width: 86,
    height: 66,
    position: "absolute",
  },
  home03Icon: {
    left: 34,
    width: 44,
    height: 42,
    position: "absolute",
  },
  analyticsIcon: {
    left: 96,
    height: 46,
    position: "absolute",
    overflow: "hidden",
  },
  fileIcon: {
    width: 42,
    left: 339,
    top: 763,
    overflow: "hidden",
  },
  image29Icon: {
    left: 255,
    width: 47,
    top: 761,
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
  points: {
    top: 142,
    left: 104,
    fontSize: FontSize.size_19xl,
    letterSpacing: 3,
    width: 202,
    height: 37,
    position: "absolute",
  },
  milestone: {
    top: 258,
    left: 28,
    width: 101,
    letterSpacing: 1.6,
    position: "absolute",
  },
  rectangleView: {
    top: 232,
    backgroundColor: "#bbd8f2",
    height: 12,
    width: 330,
  },
  rectangleIcon: {
    top: 233,
    width: 174,
    height: 11,
  },
  rewardsChild1: {
    top: 280,
    borderRadius: 14,
    backgroundColor: "rgba(242, 242, 242, 0.38)",
    height: 147,
    width: 330,
  },
  rewardsChild2: {
    top: 298,
    backgroundColor: "#478ac8",
  },
  rewardsChild3: {
    top: 350,
    backgroundColor: "#6da4d7",
  },
  rewardsChild4: {
    top: 400,
    borderTopLeftRadius: Border.br_8xs,
    borderTopRightRadius: Border.br_8xs,
    backgroundColor: "rgba(70, 165, 252, 0.53)",
    height: 27,
    left: 52,
    width: 47,
    position: "absolute",
  },
  akarIconscheck: {
    top: 306,
  },
  akarIconscheck1: {
    top: 358,
  },
  points1: {
    color: "#5d5252",
    width: 96,
    top: 306,
  },
  points2: {
    top: 356,
    color: "#514c4c",
    width: 104,
  },
  points3: {
    top: 405,
    left: 115,
    color: "#565454",
    width: 110,
    height: 20,
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_xl,
    letterSpacing: 1.6,
    textAlign: "left",
    position: "absolute",
  },
  ellipseIcon: {
    left: 42,
    height: 4,
  },
  rewardsChild5: {
    left: 172,
    height: 4,
  },
  rewardsChild6: {
    left: 231,
    height: 4,
  },
  rewardsChild7: {
    left: 296,
    height: 5,
  },
  rewardsChild8: {
    left: 107,
    height: 4,
  },
  rewardsChild9: {
    top: 219,
    width: 38,
    height: 38,
    left: 339,
    position: "absolute",
  },
  text: {
    top: 229,
    left: 343,
    fontSize: FontSize.size_mini,
    width: 31,
    height: 15,
    color: Color.colorBlack,
    fontFamily: FontFamily.urbanistBold,
    fontWeight: "700",
    textAlign: "left",
  },
  claimPoints: {
    top: 208,
    letterSpacing: 2.1,
    width: 185,
    height: 19,
    fontFamily: FontFamily.urbanistRegular,
    fontSize: FontSize.size_xl,
    color: Color.colorBlack,
    textAlign: "left",
  },
  rewards: {
    backgroundColor: Color.colorAliceblue_300,
    flex: 1,
    height: 856,
    overflow: "hidden",
    width: "100%",
  },
});

export default Rewards;
