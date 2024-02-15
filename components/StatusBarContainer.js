import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const StatusBarContainer = () => {
  return (
    <View style={styles.statusbariphoneXLightBackg}>
      <Image
        style={[styles.batteryIcon, styles.timePosition]}
        contentFit="cover"
        source={require("../assets/battery.png")}
      />
      <Image
        style={styles.wifiIcon}
        contentFit="cover"
        source={require("../assets/wifi.png")}
      />
      <Image
        style={styles.cellularIcon}
        contentFit="cover"
        source={require("../assets/cellular.png")}
      />
      <Text style={[styles.time, styles.timePosition]}>9:41</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  batteryIcon: {
    marginTop: -5.05,
    right: 15,
    width: 24,
    height: 11,
  },
  wifiIcon: {
    width: 15,
    height: 11,
  },
  cellularIcon: {
    width: 17,
    height: 11,
  },
  time: {
    marginTop: -6.35,
    left: 23,
    fontSize: FontSize.size_sm,
    letterSpacing: 0,
    fontWeight: "600",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorBlack,
    textAlign: "center",
    width: 30,
    height: 17,
  },
  statusbariphoneXLightBackg: {
    height: "5.69%",
    width: "100%",
    top: "0%",
    right: "0%",
    bottom: "94.31%",
    left: "0%",
    position: "absolute",
  },
});

export default StatusBarContainer;
