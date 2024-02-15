import * as React from "react";
import { Text, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const DateOfBirthContainer = ({ personalInfo, birthDate, dimensionCode }) => {
  return (
    <View style={styles.dobPlaceHolder}>
      <Text style={[styles.dateOfBirth, styles.textTypo]}>{personalInfo}</Text>
      <Text style={[styles.text, styles.textTypo]}>{birthDate}</Text>
      <View style={styles.dobPlaceHolderChild} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={dimensionCode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textTypo: {
    textAlign: "left",
    lineHeight: 25,
    fontSize: FontSize.size_10xl_6,
    left: "50%",
    position: "absolute",
  },
  dateOfBirth: {
    marginLeft: -310.7,
    top: 0,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorBlack,
  },
  text: {
    marginLeft: -290.4,
    top: 87,
    fontFamily: FontFamily.sfProText24400,
    color: Color.colorGray_700,
  },
  dobPlaceHolderChild: {
    top: 56,
    left: 2,
    borderRadius: 9,
    backgroundColor: Color.colorGainsboro_100,
    borderStyle: "solid",
    borderColor: Color.colorIndianred_100,
    borderWidth: 1.8,
    width: 620,
    height: 89,
    position: "absolute",
  },
  vectorIcon: {
    height: "17.41%",
    width: "6.86%",
    top: "78.22%",
    right: "6.76%",
    bottom: "4.37%",
    left: "86.39%",
    maxWidth: "100%",
    overflow: "hidden",
    maxHeight: "100%",
    position: "absolute",
  },
  dobPlaceHolder: {
    width: 621,
    height: 144,
    marginTop: 35.14,
  },
});

export default DateOfBirthContainer;
