import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, ImageSourcePropType } from "react-native";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const UserGroupImage = ({
  userGroupImageUserGroup,
  userGroupIconPosition,
  userGroupIconWidth,
  userGroupIconHeight,
  userGroupIconTop,
  userGroupIconLeft,
}) => {
  const userGroupIconStyle = useMemo(() => {
    return {
      ...getStyleValue("position", userGroupIconPosition),
      ...getStyleValue("width", userGroupIconWidth),
      ...getStyleValue("height", userGroupIconHeight),
      ...getStyleValue("top", userGroupIconTop),
      ...getStyleValue("left", userGroupIconLeft),
    };
  }, [
    userGroupIconPosition,
    userGroupIconWidth,
    userGroupIconHeight,
    userGroupIconTop,
    userGroupIconLeft,
  ]);

  return (
    <Image
      style={[styles.userGroupIcon, userGroupIconStyle]}
      contentFit="cover"
      source={userGroupImageUserGroup}
    />
  );
};

const styles = StyleSheet.create({
  userGroupIcon: {
    width: 94,
    height: 91,
    overflow: "hidden",
  },
});

export default UserGroupImage;
