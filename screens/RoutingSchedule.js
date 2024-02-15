import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Day from "../components/Day";
import { useNavigation } from "@react-navigation/native";
import NumberOfItems5Items from "../components/NumberOfItems5Items";
import UserGroupImage from "../components/UserGroupImage";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const RoutingSchedule = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.routingSchedule}>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.routingScheduleChild}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <View style={styles.routingScheduleItem} />
      <Day
        check={require("../assets/check.png")}
        dayName="Month 01"
        dayPosition="absolute"
        dayMarginTop={-267}
        dayTop="50%"
        dayLeft={48}
        checkIconWidth={37}
        checkIconHeight={37}
        saturdayFontSize={22}
        saturdayLetterSpacing={-0.1}
        saturdayColor="rgba(15, 14, 14, 0.74)"
        saturdayMarginLeft={12.33}
      />
      <Day
        check={require("../assets/check.png")}
        dayName="Month 02"
        dayPosition="absolute"
        dayMarginTop={20}
        dayTop="50%"
        dayLeft={44}
        checkIconWidth={37}
        checkIconHeight={37}
        saturdayFontSize={22}
        saturdayLetterSpacing={-0.1}
        saturdayColor="rgba(15, 14, 14, 0.74)"
        saturdayMarginLeft={12.33}
      />
      <Text style={[styles.routingSchedule1, styles.sdgp1141Typo]}>
        Routing schedule
      </Text>
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
      <NumberOfItems5Items
        label="Task 01"
        label1="Task 02"
        label2="Task 03"
        label3="Task 04"
        showItem4={false}
        showControllerIcon={false}
        numberOfItems5ItemsPosition="absolute"
        numberOfItems5ItemsWidth={315}
        numberOfItems5ItemsMarginTop={70}
        numberOfItems5ItemsMarginLeft={-163}
        numberOfItems5ItemsTop="50%"
        numberOfItems5ItemsLeft="50%"
        numberOfItems5ItemsHeight={222}
        item0AlignSelf="unset"
        item0Width={180}
        labelFontSize={24}
        labelLineHeight={36}
        item1AlignSelf="unset"
        item1Width={180}
        labelFontSize1={24}
        labelLineHeight1={36}
        item2AlignSelf="unset"
        item2Width={180}
        labelFontSize2={24}
        labelLineHeight2={36}
        item3AlignSelf="unset"
        item3Width={180}
        labelFontSize3={24}
        labelLineHeight3={36}
        item4AlignSelf="unset"
        item4Width={180}
        radioWrapperOpacity={0.3}
      />
      <Image
        style={styles.home03Icon}
        contentFit="cover"
        source={require("../assets/home032.png")}
      />
      <UserGroupImage
        userGroupImageUserGroup={require("../assets/usergroup1.png")}
        userGroupIconPosition="absolute"
        userGroupIconWidth={56}
        userGroupIconHeight={54}
        userGroupIconTop={765}
        userGroupIconLeft={160}
      />
      <Image
        style={styles.analyticsIcon}
        contentFit="cover"
        source={require("../assets/analytics1.png")}
      />
      <Image
        style={styles.fileIcon}
        contentFit="cover"
        source={require("../assets/file1.png")}
      />
      <Image
        style={styles.image29Icon}
        contentFit="cover"
        source={require("../assets/image-29.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sdgp1141Typo: {
    textAlign: "left",
    fontWeight: "600",
  },
  vectorIcon: {
    height: "3.5%",
    width: "7.25%",
    top: "7.13%",
    right: "87.2%",
    bottom: "89.37%",
    left: "5.56%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  routingScheduleChild: {
    top: 67,
    left: 349,
    width: 34,
    height: 34,
    position: "absolute",
  },
  routingScheduleItem: {
    top: 104,
    left: 15,
    borderRadius: Border.br_xs,
    backgroundColor: Color.colorLightblue_100,
    width: 372,
    height: 635,
    position: "absolute",
  },
  routingSchedule1: {
    top: 124,
    left: 121,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.headingsH5,
    color: Color.colorDarkslategray_100,
    width: 172,
    height: 24,
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
    top: "95.33%",
    right: "36.71%",
    bottom: "2.55%",
    left: "36.71%",
    position: "absolute",
  },
  home03Icon: {
    top: 771,
    left: 28,
    width: 44,
    height: 42,
    position: "absolute",
    overflow: "hidden",
  },
  analyticsIcon: {
    top: 767,
    left: 93,
    width: 47,
    height: 46,
    position: "absolute",
    overflow: "hidden",
  },
  fileIcon: {
    top: 765,
    left: 325,
    width: 42,
    height: 45,
    position: "absolute",
    overflow: "hidden",
  },
  image29Icon: {
    top: 761,
    left: 234,
    width: 50,
    height: 50,
    position: "absolute",
  },
  routingSchedule: {
    backgroundColor: Color.colorAliceblue_300,
    flex: 1,
    height: 856,
    overflow: "hidden",
    width: "100%",
  },
});

export default RoutingSchedule;
