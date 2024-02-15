import React, { useMemo } from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import StateDefaultLabelyesSele from "./StateDefaultLabelyesSele";
import { Border, Color, Padding } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const NumberOfItems5Items = ({
  label,
  label1,
  label2,
  label3,
  label4,
  showItem4,
  showControllerIcon,
  numberOfItems5ItemsPosition,
  numberOfItems5ItemsWidth,
  numberOfItems5ItemsMarginTop,
  numberOfItems5ItemsMarginLeft,
  numberOfItems5ItemsTop,
  numberOfItems5ItemsLeft,
  numberOfItems5ItemsHeight,
  item0AlignSelf,
  item0Width,
  labelFontSize,
  labelLineHeight,
  item1AlignSelf,
  item1Width,
  labelFontSize1,
  labelLineHeight1,
  item2AlignSelf,
  item2Width,
  labelFontSize2,
  labelLineHeight2,
  item3AlignSelf,
  item3Width,
  labelFontSize3,
  labelLineHeight3,
  item4AlignSelf,
  item4Width,
  radioWrapperOpacity,
}) => {
  const numberOfItems5ItemsStyle = useMemo(() => {
    return {
      ...getStyleValue("position", numberOfItems5ItemsPosition),
      ...getStyleValue("width", numberOfItems5ItemsWidth),
      ...getStyleValue("marginTop", numberOfItems5ItemsMarginTop),
      ...getStyleValue("marginLeft", numberOfItems5ItemsMarginLeft),
      ...getStyleValue("top", numberOfItems5ItemsTop),
      ...getStyleValue("left", numberOfItems5ItemsLeft),
      ...getStyleValue("height", numberOfItems5ItemsHeight),
    };
  }, [
    numberOfItems5ItemsPosition,
    numberOfItems5ItemsWidth,
    numberOfItems5ItemsMarginTop,
    numberOfItems5ItemsMarginLeft,
    numberOfItems5ItemsTop,
    numberOfItems5ItemsLeft,
    numberOfItems5ItemsHeight,
  ]);

  const stateDefaultLabelyesSeleStyle = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", item0AlignSelf),
      ...getStyleValue("width", item0Width),
    };
  }, [item0AlignSelf, item0Width]);

  const labelStyle = useMemo(() => {
    return {
      ...getStyleValue("fontSize", labelFontSize),
      ...getStyleValue("lineHeight", labelLineHeight),
    };
  }, [labelFontSize, labelLineHeight]);

  const stateDefaultLabelyesSeleStyle1 = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", item1AlignSelf),
      ...getStyleValue("width", item1Width),
    };
  }, [item1AlignSelf, item1Width]);

  const labelStyle1 = useMemo(() => {
    return {
      ...getStyleValue("fontSize", labelFontSize1),
      ...getStyleValue("lineHeight", labelLineHeight1),
    };
  }, [labelFontSize1, labelLineHeight1]);

  const stateDefaultLabelyesSeleStyle2 = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", item2AlignSelf),
      ...getStyleValue("width", item2Width),
    };
  }, [item2AlignSelf, item2Width]);

  const labelStyle2 = useMemo(() => {
    return {
      ...getStyleValue("fontSize", labelFontSize2),
      ...getStyleValue("lineHeight", labelLineHeight2),
    };
  }, [labelFontSize2, labelLineHeight2]);

  const stateDefaultLabelyesSeleStyle3 = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", item3AlignSelf),
      ...getStyleValue("width", item3Width),
    };
  }, [item3AlignSelf, item3Width]);

  const labelStyle3 = useMemo(() => {
    return {
      ...getStyleValue("fontSize", labelFontSize3),
      ...getStyleValue("lineHeight", labelLineHeight3),
    };
  }, [labelFontSize3, labelLineHeight3]);

  const stateDefaultLabelyesSeleStyle4 = useMemo(() => {
    return {
      ...getStyleValue("alignSelf", item4AlignSelf),
      ...getStyleValue("width", item4Width),
    };
  }, [item4AlignSelf, item4Width]);

  const radioWrapperStyle = useMemo(() => {
    return {
      ...getStyleValue("opacity", radioWrapperOpacity),
    };
  }, [radioWrapperOpacity]);

  return (
    <View style={[styles.numberOfItems5Items, numberOfItems5ItemsStyle]}>
      <StateDefaultLabelyesSele
        label="Label"
        stateDefaultLabelyesSelePosition="unset"
        stateDefaultLabelyesSeleAlignSelf="stretch"
        stateDefaultLabelyesSeleWidth="unset"
        labelFontSize={16}
        labelLineHeight={24}
      />
      <StateDefaultLabelyesSele
        label="Label"
        stateDefaultLabelyesSelePosition="unset"
        stateDefaultLabelyesSeleAlignSelf="stretch"
        stateDefaultLabelyesSeleWidth="unset"
        labelFontSize={16}
        labelLineHeight={24}
      />
      <StateDefaultLabelyesSele
        label="Label"
        stateDefaultLabelyesSelePosition="unset"
        stateDefaultLabelyesSeleAlignSelf="stretch"
        stateDefaultLabelyesSeleWidth="unset"
        labelFontSize={16}
        labelLineHeight={24}
      />
      <StateDefaultLabelyesSele
        label="Label"
        stateDefaultLabelyesSelePosition="unset"
        stateDefaultLabelyesSeleAlignSelf="stretch"
        stateDefaultLabelyesSeleWidth="unset"
        labelFontSize={16}
        labelLineHeight={24}
      />
      <StateDefaultLabelyesSele
        label="Label"
        stateDefaultLabelyesSelePosition="unset"
        stateDefaultLabelyesSeleAlignSelf="stretch"
        stateDefaultLabelyesSeleWidth="unset"
        labelFontSize={16}
        labelLineHeight={24}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  numberOfItems5Items: {
    borderRadius: Border.br_base,
    backgroundColor: Color.white07,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOffset: {
      width: 0,
      height: 32,
    },
    shadowRadius: 32,
    elevation: 32,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: Color.white07,
    borderWidth: 1,
    width: 196,
    overflow: "hidden",
    padding: Padding.p_5xs,
  },
});

export default NumberOfItems5Items;
