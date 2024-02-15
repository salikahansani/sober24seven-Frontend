import * as React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Border } from "../GlobalStyles";

const LocationTracker = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.locationTracker}>
      <View style={styles.sdgp114Wrapper}>
        <Pressable
          style={styles.sdgp114}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.sdgp1141}>@2024 SDGP 114</Text>
        </Pressable>
      </View>
      <Image
        style={styles.locationTrackerChild}
        contentFit="cover"
        source={require("../assets/rectangle-113.png")}
      />
      <Image
        style={styles.placeholder1Icon}
        contentFit="cover"
        source={require("../assets/placeholder-1.png")}
      />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
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
  locationTrackerChild: {
    top: 121,
    left: 23,
    borderRadius: Border.br_xs,
    width: 368,
    height: 614,
    position: "absolute",
  },
  placeholder1Icon: {
    top: 583,
    left: 95,
    width: 57,
    height: 60,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "3.5%",
    width: "7.25%",
    top: "8.18%",
    right: "87.2%",
    bottom: "88.32%",
    left: "5.56%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  locationTracker: {
    backgroundColor: Color.colorAliceblue_300,
    flex: 1,
    height: 856,
    overflow: "hidden",
    width: "100%",
  },
});

export default LocationTracker;
