import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, View, ImageSourcePropType } from "react-native";
import VisibleNOImage from "./VisibleNOImage";
import ColorClearImage from "./ColorClearImage";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const DarkModeNO = ({
  notch,
  networkSignalLight,
  wiFiSignalLight,
  batteryLight,
  indicator,
  timeLight,
  darkModeNOPosition,
  darkModeNOWidth,
  darkModeNOHeight,
  darkModeNOTop,
  darkModeNOLeft,
  notchIconRight,
  notchIconHeight,
  statusIconsTop,
  statusIconsRight,
  networkSignalLightWidth,
  networkSignalLightHeight,
  wiFiSignalLightWidth,
  wiFiSignalLightHeight,
  wiFiSignalLightMarginLeft,
  batteryLightWidth,
  batteryLightHeight,
  batteryLightMarginLeft,
  indicatorIconTop,
  indicatorIconRight,
  indicatorIconWidth,
  indicatorIconHeight,
  timeLightTop,
  timeLightLeft,
  timeLightBorderRadius,
  timeLightWidth,
  timeLightHeight,
}) => {
  const darkModeNOStyle = useMemo(() => {
    return {
      ...getStyleValue("position", darkModeNOPosition),
      ...getStyleValue("width", darkModeNOWidth),
      ...getStyleValue("height", darkModeNOHeight),
      ...getStyleValue("top", darkModeNOTop),
      ...getStyleValue("left", darkModeNOLeft),
    };
  }, [
    darkModeNOPosition,
    darkModeNOWidth,
    darkModeNOHeight,
    darkModeNOTop,
    darkModeNOLeft,
  ]);

  const visibleNOIconStyle = useMemo(() => {
    return {
      ...getStyleValue("right", notchIconRight),
      ...getStyleValue("height", notchIconHeight),
    };
  }, [notchIconRight, notchIconHeight]);

  const statusIconsStyle = useMemo(() => {
    return {
      ...getStyleValue("top", statusIconsTop),
      ...getStyleValue("right", statusIconsRight),
    };
  }, [statusIconsTop, statusIconsRight]);

  const networkSignalLightStyle = useMemo(() => {
    return {
      ...getStyleValue("width", networkSignalLightWidth),
      ...getStyleValue("height", networkSignalLightHeight),
    };
  }, [networkSignalLightWidth, networkSignalLightHeight]);

  const wiFiSignalLightStyle = useMemo(() => {
    return {
      ...getStyleValue("width", wiFiSignalLightWidth),
      ...getStyleValue("height", wiFiSignalLightHeight),
      ...getStyleValue("marginLeft", wiFiSignalLightMarginLeft),
    };
  }, [wiFiSignalLightWidth, wiFiSignalLightHeight, wiFiSignalLightMarginLeft]);

  const batteryLightStyle = useMemo(() => {
    return {
      ...getStyleValue("width", batteryLightWidth),
      ...getStyleValue("height", batteryLightHeight),
      ...getStyleValue("marginLeft", batteryLightMarginLeft),
    };
  }, [batteryLightWidth, batteryLightHeight, batteryLightMarginLeft]);

  const indicatorIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", indicatorIconTop),
      ...getStyleValue("right", indicatorIconRight),
      ...getStyleValue("width", indicatorIconWidth),
      ...getStyleValue("height", indicatorIconHeight),
    };
  }, [
    indicatorIconTop,
    indicatorIconRight,
    indicatorIconWidth,
    indicatorIconHeight,
  ]);

  const colorClearIconStyle = useMemo(() => {
    return {
      ...getStyleValue("top", timeLightTop),
      ...getStyleValue("left", timeLightLeft),
      ...getStyleValue("borderRadius", timeLightBorderRadius),
      ...getStyleValue("width", timeLightWidth),
      ...getStyleValue("height", timeLightHeight),
    };
  }, [
    timeLightTop,
    timeLightLeft,
    timeLightBorderRadius,
    timeLightWidth,
    timeLightHeight,
  ]);

  return (
    <View style={[styles.darkModeno, darkModeNOStyle]}>
      <VisibleNOImage
        visibleNOImageVisibleNO={require("../assets/notch1.png")}
        visibleNOIconPosition="absolute"
        visibleNOIconTop={0}
        visibleNOIconRight={0}
        visibleNOIconLeft={0}
        visibleNOIconOverflow="hidden"
        visibleNOIconHeight={30}
      />
      <View style={[styles.statusIcons, statusIconsStyle]}>
        <Image
          style={[styles.networkSignalLight, networkSignalLightStyle]}
          contentFit="cover"
          source={networkSignalLight}
        />
        <Image
          style={[
            styles.wifiSignalLight,
            styles.lightSpaceBlock,
            wiFiSignalLightStyle,
          ]}
          contentFit="cover"
          source={wiFiSignalLight}
        />
        <Image
          style={[
            styles.batteryLight,
            styles.lightSpaceBlock,
            batteryLightStyle,
          ]}
          contentFit="cover"
          source={batteryLight}
        />
      </View>
      <Image
        style={[styles.indicatorIcon, indicatorIconStyle]}
        contentFit="cover"
        source={indicator}
      />
      <ColorClearImage
        colorClearImageColorClear={require("../assets/time--light1.png")}
        colorClearIconPosition="absolute"
        colorClearIconTop={13}
        colorClearIconLeft={12}
        colorClearIconBorderRadius={20}
        colorClearIconWidth={54}
        colorClearIconHeight={21}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  lightSpaceBlock: {
    marginLeft: 4,
    height: 14,
  },
  networkSignalLight: {
    width: 20,
    height: 14,
  },
  wifiSignalLight: {
    width: 16,
  },
  batteryLight: {
    width: 25,
  },
  statusIcons: {
    top: 16,
    right: 14,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
  },
  indicatorIcon: {
    top: 8,
    right: 71,
    width: 6,
    height: 6,
    position: "absolute",
  },
  darkModeno: {
    width: 385,
    height: 44,
    overflow: "hidden",
  },
});

export default DarkModeNO;
