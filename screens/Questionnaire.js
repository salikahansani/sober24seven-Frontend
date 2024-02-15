import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import StatusBarContainer from "../components/StatusBarContainer";
import ForgotPassword2 from "../components/ForgotPassword2";
import LoginContainer1 from "../components/LoginContainer1";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";

const Questionnaire = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.questionnaire}>
      <View style={styles.forgotPassword}>
        <StatusBarContainer />
        <ForgotPassword2
          forgotPasswordPosition="absolute"
          forgotPasswordTop={539}
          forgotPasswordLeft={273}
        />
        <LoginContainer1
          buttonText={require("../assets/iconmonstrgithub1-1.png")}
          actionText="Back to Login"
          componentSize={require("../assets/gitlabseeklogocom-11.png")}
          showGithub={false}
          showGitlab={false}
          showWith={false}
          loginButtonPosition="absolute"
          loginButtonWidth={359}
          loginButtonHeight={204}
          loginButtonTop={-5963}
          loginButtonRight="unset"
          loginButtonBottom="unset"
          loginButtonLeft={4311}
          rectangleViewBackgroundColor="#361a96"
          rectangleViewHeight="22.06%"
          rectangleViewBottom="77.94%"
          githubHeight="22.06%"
          githubTop="57.84%"
          groupViewTop={11}
          groupViewHeight={23}
          gitHubTop="8.7%"
          loginLeft="34.82%"
          loginColor="#e6f6ff"
          loginTop="5.39%"
          gitlabHeight="22.06%"
          gitlabTop="57.84%"
          groupViewTop1={11}
          groupViewHeight1={22}
          gitLabTop="9.05%"
          withHeight="9.31%"
          withTop="32.84%"
          withBottom="57.84%"
          lineViewTop="51.58%"
          lineViewBottom="45.79%"
          lineViewTop1="51.58%"
          lineViewBottom1="45.79%"
        />
        <View style={[styles.sdgp114Wrapper, styles.sdgp114Layout]}>
          <Pressable
            style={styles.sdgp114}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.sdgp1141, styles.sdgpTypo]}>
              @2024 SDGP 114
            </Text>
          </Pressable>
        </View>
        <View style={styles.forgotPasswordChild} />
        <View style={[styles.sdgp114Container, styles.sdgp114Layout]}>
          <Pressable
            style={styles.sdgp114}
            onPress={() => navigation.navigate("Login")}
          >
            <Text style={[styles.sdgp1143, styles.sdgpTypo]}>
              @2024 SDGP 114
            </Text>
          </Pressable>
        </View>
        <View style={styles.forgotPasswordItem} />
        <View style={styles.forgotPasswordInner} />
        <View style={styles.rectangleView} />
        <Text style={styles.text}>3/7</Text>
        <Image
          style={styles.liquor1200px202310181000xIcon}
          contentFit="cover"
          source={require("../assets/liquor-1200px-2023-10-181000x600-1.png")}
        />
        <Text style={styles.question01}>Question 01</Text>
        <View
          style={[styles.forgotPasswordChild1, styles.forgotChildShadowBox1]}
        />
        <Text style={[styles.answer01, styles.answerTypo1]}>answer 01</Text>
        <View
          style={[styles.forgotPasswordChild2, styles.forgotChildShadowBox1]}
        />
        <Text style={[styles.answer02, styles.answerTypo]}>answer 02</Text>
        <View
          style={[styles.forgotPasswordChild3, styles.forgotChildShadowBox1]}
        />
        <Text style={[styles.answer03, styles.answerTypo]}>answer 03</Text>
        <View
          style={[styles.forgotPasswordChild4, styles.forgotChildShadowBox1]}
        />
        <Text style={[styles.answer04, styles.answerTypo1]}>answer 04</Text>
        <View
          style={[styles.forgotPasswordChild5, styles.forgotChildShadowBox]}
        />
        <Text style={[styles.back, styles.answerTypo1]}>Back</Text>
        <View
          style={[styles.forgotPasswordChild6, styles.forgotChildShadowBox]}
        />
        <Text style={[styles.next, styles.answerTypo1]}>Next</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sdgp114Layout: {
    height: "2.13%",
    position: "absolute",
  },
  sdgpTypo: {
    textAlign: "left",
    fontFamily: FontFamily.manropeSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_sm,
    height: "100%",
    width: "100%",
  },
  forgotChildShadowBox1: {
    height: 50,
    width: 330,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    backgroundColor: Color.neutralBackground,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  answerTypo1: {
    height: 34,
    letterSpacing: 2.6,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.urbanistSemiBold,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  answerTypo: {
    left: 64,
    height: 34,
    width: 230,
    color: Color.colorDarkslategray_100,
    letterSpacing: 2.6,
    fontSize: FontSize.size_6xl,
    fontFamily: FontFamily.urbanistSemiBold,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  forgotChildShadowBox: {
    height: 40,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    borderRadius: Border.br_3xs,
    width: 100,
    position: "absolute",
  },
  sdgp1141: {
    color: Color.colorAliceblue_300,
  },
  sdgp114: {
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  sdgp114Wrapper: {
    width: "26.58%",
    top: "97.9%",
    right: "39.37%",
    bottom: "-0.02%",
    left: "34.05%",
  },
  forgotPasswordChild: {
    top: 64,
    left: 24,
    borderRadius: Border.br_xs,
    backgroundColor: "#abe1ff",
    width: 372,
    height: 759,
    position: "absolute",
  },
  sdgp1143: {
    color: Color.colorDarkgray_200,
  },
  sdgp114Container: {
    width: "26.51%",
    top: "95.79%",
    right: "39.52%",
    bottom: "2.08%",
    left: "33.98%",
  },
  forgotPasswordItem: {
    backgroundColor: "#e7f0fa",
    width: 290,
    height: 20,
    borderRadius: Border.br_4xs,
    top: 111,
    left: 38,
    position: "absolute",
  },
  forgotPasswordInner: {
    width: 100,
    backgroundColor: Color.colorSteelblue_100,
    height: 20,
    borderRadius: Border.br_4xs,
    left: 38,
    top: 111,
    position: "absolute",
  },
  rectangleView: {
    top: 107,
    left: 338,
    borderRadius: Border.br_xl,
    width: 50,
    height: 28,
    backgroundColor: Color.colorSteelblue_100,
    position: "absolute",
  },
  text: {
    top: 108,
    left: 347,
    fontSize: FontSize.size_xl,
    letterSpacing: 2.1,
    fontWeight: "700",
    fontFamily: FontFamily.urbanistBold,
    width: 40,
    height: 23,
    color: Color.neutralBackground,
    textAlign: "left",
    position: "absolute",
  },
  liquor1200px202310181000xIcon: {
    top: 243,
    width: 334,
    height: 216,
    borderRadius: Border.br_3xs,
    left: 37,
    position: "absolute",
  },
  question01: {
    top: 180,
    fontSize: 30,
    letterSpacing: 3.2,
    color: Color.colorBlack,
    width: 231,
    height: 49,
    fontFamily: FontFamily.urbanistSemiBold,
    left: 42,
    textAlign: "left",
    fontWeight: "600",
    position: "absolute",
  },
  forgotPasswordChild1: {
    top: 484,
    left: 38,
    height: 50,
    width: 330,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  answer01: {
    top: 492,
    left: 68,
    width: 230,
    height: 34,
    color: Color.colorDarkslategray_100,
    letterSpacing: 2.6,
    fontSize: FontSize.size_6xl,
  },
  forgotPasswordChild2: {
    top: 549,
    left: 37,
    height: 50,
    width: 330,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  answer02: {
    top: 558,
  },
  forgotPasswordChild3: {
    top: 615,
    left: 37,
    height: 50,
    width: 330,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  answer03: {
    top: 623,
  },
  forgotPasswordChild4: {
    top: 681,
    left: 39,
  },
  answer04: {
    top: 689,
    left: 63,
    width: 230,
    height: 34,
    color: Color.colorDarkslategray_100,
    letterSpacing: 2.6,
    fontSize: FontSize.size_6xl,
  },
  forgotPasswordChild5: {
    top: 765,
    backgroundColor: "#13a2f1",
    height: 40,
    left: 42,
  },
  back: {
    top: 771,
    left: 61,
    width: 63,
    height: 34,
    letterSpacing: 2.6,
    fontSize: FontSize.size_6xl,
    color: Color.neutralBackground,
  },
  forgotPasswordChild6: {
    top: 768,
    left: 278,
    backgroundColor: Color.neutralBackground,
    height: 40,
  },
  next: {
    top: 774,
    left: 295,
    width: 65,
    color: Color.colorDarkslategray_100,
    height: 34,
    letterSpacing: 2.6,
    fontSize: FontSize.size_6xl,
  },
  forgotPassword: {
    top: 0,
    left: 0,
    backgroundColor: Color.colorAliceblue_300,
    width: 415,
    overflow: "hidden",
    position: "absolute",
    height: 856,
  },
  questionnaire: {
    flex: 1,
    height: 856,
    width: "100%",
  },
});

export default Questionnaire;
