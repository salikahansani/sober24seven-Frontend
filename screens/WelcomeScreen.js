import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const WelcomeScreen = () => {
  // Fonts must be loaded before rendering the app
  // Consider using a splash screen while fonts are loading

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/ellipse-1405.png")}
        style={styles.backgroundEllipse}
      />
      <Image
        source={require("../assets/logo-with-name-1.png")}
        style={styles.logo}
      />
      <Text style={styles.title}>Explore the App</Text>
      <Text style={styles.subtitle}>
        The only person you are destined to become is the person you decide to be.
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.buttonOutline]}>
        <Text style={[styles.buttonText, styles.buttonOutlineText]}>Create Account</Text>
      </TouchableOpacity>
      <Text style={styles.footer}>@2024 SDGP 114</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Color.colorAliceblue_300,
  },
  backgroundEllipse: {
    position: "absolute",
    width: "100%",
    height: "40%",
    top: 600,
  },
  logo: {
    width: 159,
    height: 138,
    resizeMode: "contain",
    marginBottom:25,
  },
  title: {
    fontSize: FontSize.size_10xl_6,
    fontFamily: FontFamily.mansalvaRegular,
    color: Color.colorBlack,
    marginBottom: 8,
    top:10,
    gap:40,
    marginBottom: 20,
    
  },
  subtitle: {
    fontSize: 14,
    color: '#777777',
    fontStyle: 'italic',
    fontFamily: FontFamily.mandali,
    textAlign: "center",
    paddingHorizontal: 32,
    marginBottom: 24,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#46a5fc",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: Border.br_xs,
    width: "86.71%",
    alignItems: "center",
    marginBottom: 8,
  
  },
  buttonText: {
    color: "#fff",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.manropeSemiBold,
  },
  buttonOutline: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#46a5fc",
  },
  buttonOutlineText: {
    color: "#46a5fc",
  },
  footer: {
    position: "absolute",
    bottom: 16,
    fontSize: FontSize.size_sm,
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.manropeSemiBold,
  },
});

export default WelcomeScreen;
