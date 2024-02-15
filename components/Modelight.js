import React, { useMemo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const getStyleValue = (key, value) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Modelight = ({
  prop,
  aBC,
  showABC,
  modelightPosition,
  modelightMarginLeft,
}) => {
  const modelightStyle = useMemo(() => {
    return {
      ...getStyleValue("position", modelightPosition),
      ...getStyleValue("marginLeft", modelightMarginLeft),
    };
  }, [modelightPosition, modelightMarginLeft]);

  return (
    <View style={[styles.modelight, modelightStyle]}>
      <Text style={[styles.text, styles.abcFlexBox]}>{prop}</Text>
      {showABC && <Text style={[styles.abc, styles.abcFlexBox]}>{aBC}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  abcFlexBox: {
    textAlign: "center",
    color: Color.neutralAlmostBlack,
  },
  text: {
    fontSize: FontSize.sfProText24400_size,
    fontFamily: FontFamily.sfProText24400,
  },
  abc: {
    fontSize: FontSize.buttonSmall_size,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
  },
  modelight: {
    borderRadius: Border.br_9xs,
    backgroundColor: Color.neutralBackground,
    shadowColor: "rgba(0, 0, 0, 0.3)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 0,
    elevation: 0,
    shadowOpacity: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "stretch",
    flex: 1,
  },
});

export default Modelight;
