import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const PhoneNumber = ({
  phoneNumberPosition,
  phoneNumberTop,
  phoneNumberLeft,
  textColor,
}) => {
  const phoneNumberStyle = useMemo(() => {
    return {
      ...getStyleValue("position", phoneNumberPosition),
      ...getStyleValue("top", phoneNumberTop),
      ...getStyleValue("left", phoneNumberLeft),
    };
  }, [phoneNumberPosition, phoneNumberTop, phoneNumberLeft]);

  const textStyle = useMemo(() => {
    return {
      ...getStyleValue("color", textColor),
    };
  }, [textColor]);

  return (
    <View style={[styles.phoneNumber, phoneNumberStyle]}>
      <Text style={styles.phoneNumber1}>Phone Number</Text>
      <View style={[styles.phoneNumberChild, styles.phoneBorder]} />
      <Text style={[styles.enterYourPhonenumber, styles.textTypo]}>
        Enter your phonenumber
      </Text>
      <View style={[styles.phoneNumberItem, styles.phoneBorder]} />
      <Text style={[styles.text, styles.textTypo, textStyle]}>+855</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  phoneBorder: {
    borderColor: Color.colorLightgray_100,
    borderStyle: "solid",
    position: "absolute",
  },
  textTypo: {
    top: "55.22%",
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  phoneNumber1: {
    top: "0%",
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    position: "absolute",
    color: Color.colorMidnightblue_200,
    left: "0%",
  },
  phoneNumberChild: {
    height: "61.19%",
    width: "100%",
    top: "38.81%",
    right: "0%",
    bottom: "0%",
    borderRadius: Border.br_10xs,
    backgroundColor: Color.neutralBackground,
    borderWidth: 1,
    left: "0%",
    borderStyle: "solid",
  },
  enterYourPhonenumber: {
    left: "17.83%",
    color: Color.placeHolder,
  },
  phoneNumberItem: {
    height: "43.28%",
    width: "0.28%",
    top: "47.01%",
    right: "84.54%",
    bottom: "9.7%",
    left: "15.18%",
    borderRightWidth: 1,
  },
  text: {
    left: "4.18%",
    color: Color.colorMidnightblue_200,
    top: "55.22%",
  },
  phoneNumber: {
    width: 359,
    height: 67,
  },
});

export default PhoneNumber;
