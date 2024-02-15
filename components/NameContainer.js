import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NameContainer = ({ userImageUrl, userName, propMarginTop }) => {
  const namePlaceHolderStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", propMarginTop),
    };
  }, [propMarginTop]);

  return (
    <View style={[styles.namePlaceHolder, namePlaceHolderStyle]}>
      <Text style={[styles.name, styles.nameTypo]}>{userImageUrl}</Text>
      <Text style={[styles.favourIsechapRimamchirika, styles.nameTypo]}>
        {userName}
      </Text>
      <View style={styles.namePlaceHolderChild} />
    </View>
  );
};

const styles = StyleSheet.create({
  nameTypo: {
    textAlign: "left",
    lineHeight: 25,
    fontSize: FontSize.size_10xl_6,
    left: "50%",
    position: "absolute",
  },
  name: {
    marginLeft: -310.7,
    top: 0,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.colorBlack,
  },
  favourIsechapRimamchirika: {
    marginLeft: -290.4,
    top: 87,
    fontFamily: FontFamily.sfProText24400,
    color: Color.colorGray_700,
  },
  namePlaceHolderChild: {
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
  namePlaceHolder: {
    width: 621,
    height: 144,
  },
});

export default NameContainer;
