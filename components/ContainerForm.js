import * as React from "react";
import { StyleSheet, View, Text, ImageSourcePropType } from "react-native";
import { Image } from "expo-image";
import Modelight from "./Modelight";

const ContainerForm = ({ packageDimensions }) => {
  return (
    <View style={[styles.sec, styles.secFlexBox]}>
      <View style={styles.secFlexBox} />
      <Modelight
        prop="0"
        aBC=" "
        showABC={false}
        modelightPosition="unset"
        modelightMarginLeft={6}
      />
      <View style={[styles.sec2, styles.secFlexBox]}>
        <Image
          style={styles.vecIcon}
          contentFit="cover"
          source={packageDimensions}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  secFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    alignSelf: "stretch",
  },
  vecIcon: {
    width: 22,
    height: 18,
  },
  sec2: {
    marginLeft: 6,
  },
  sec: {
    flexDirection: "row",
    marginTop: 6,
  },
});

export default ContainerForm;
