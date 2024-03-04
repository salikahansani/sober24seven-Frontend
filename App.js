const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import WelcomeScreen from "./screens/WelcomeScreen";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import ForgotPassword from "./screens/ForgotPassword";
import Frame from "./screens/Frame";
import Questionnaire from "./screens/Questionnaire";
import DashboardForUser from "./screens/DashboardForUser";
import DashboardForUser1 from "./screens/DashboardForUser1";
import RoutingSchedule from "./screens/RoutingSchedule";
import Rewards from "./screens/Rewards";
import Sidebar from "./screens/Sidebar";
import Notifications from "./screens/Notifications";
import Settings from "./screens/Settings";
import AboutUs from "./screens/AboutUs";
import Profile from "./screens/Profile";
import LocationTracker from "./screens/LocationTracker";
import Community from "./screens/Community";
import ProgressChart from "./screens/ProgressChart";
import ForgotPassword1 from "./screens/ForgotPassword1";
import LoginContainer1 from "./components/LoginContainer1";
import GroupComponent from "./components/GroupComponent";
import RememberMe from "./components/RememberMe";
import PhoneNumber from "./components/PhoneNumber";
import OnOffTrueDisabledFalse from "./components/OnOffTrueDisabledFalse";
import ForgotPassword2 from "./components/ForgotPassword2";
import UserGroupImage from "./components/UserGroupImage";
import Day from "./components/Day";
import NumberOfItems5Items from "./components/NumberOfItems5Items";
import StateDefaultLabelyesSele from "./components/StateDefaultLabelyesSele";
import AwardBox from "./components/AwardBox";
import CoinBronze from "./components/CoinBronze";
import CoinSpecialImage from "./components/CoinSpecialImage";
import BackDoneBar from "./components/BackDoneBar";
import StateDefaultIconTrueBadg from "./components/StateDefaultIconTrueBadg";
import NumberNotificationBadge from "./components/NumberNotificationBadge";
import TypeNoteSizeNormalColor from "./components/TypeNoteSizeNormalColor";
import Property1Green from "./components/Property1Green";
import DarkModeNO from "./components/DarkModeNO";
import VisibleNOImage from "./components/VisibleNOImage";
import ColorClearImage from "./components/ColorClearImage";
import Component from "./components/Component";
import CardChartline from "./components/CardChartline";
import SizeSmallIconNoneStateD from "./components/SizeSmallIconNoneStateD";
import Btnoutlinesmall from "./components/Btnoutlinesmall";
import Btnsmall from "./components/Btnsmall";
import Tagbase from "./components/Tagbase";
import TypenumericalModelightCa from "./components/TypenumericalModelightCa";
import Modelight from "./components/Modelight";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Manrope-Regular": require("./assets/fonts/Manrope-Regular.ttf"),
    "Manrope-SemiBold": require("./assets/fonts/Manrope-SemiBold.ttf"),
    "Manrope-Bold": require("./assets/fonts/Manrope-Bold.ttf"),
    Mandali: require("./assets/fonts/Mandali.ttf"),
    "Mansalva-Regular": require("./assets/fonts/Mansalva-Regular.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Mali-SemiBold": require("./assets/fonts/Mali-SemiBold.ttf"),
    "Manjari-Regular": require("./assets/fonts/Manjari-Regular.ttf"),
    "Manjari-Bold": require("./assets/fonts/Manjari-Bold.ttf"),
    "Urbanist-Regular": require("./assets/fonts/Urbanist-Regular.ttf"),
    "Urbanist-SemiBold": require("./assets/fonts/Urbanist-SemiBold.ttf"),
    "Urbanist-Bold": require("./assets/fonts/Urbanist-Bold.ttf"),
    "Inter-Regular": require("./assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("./assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("./assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("./assets/fonts/Inter-Bold.ttf"),
    "Jost-Regular": require("./assets/fonts/Jost-Regular.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    Modak: require("./assets/fonts/Modak.ttf"),
    "OpenSans-Medium": require("./assets/fonts/OpenSans-Medium.ttf"),
    Mako: require("./assets/fonts/Mako.ttf"),
  });

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator
            initialRouteName="ForgotPassword"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="passwordChange"
              component={Frame}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Questionnaire"
              component={Questionnaire}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardForUser"
              component={DashboardForUser}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DashboardForUser1"
              component={DashboardForUser1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="RoutingSchedule"
              component={RoutingSchedule}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Rewards"
              component={Rewards}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Sidebar"
              component={Sidebar}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notifications"
              component={Notifications}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Settings"
              component={Settings}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AboutUs"
              component={AboutUs}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LocationTracker"
              component={LocationTracker}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Community"
              component={Community}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ProgressChart"
              component={ProgressChart}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ForgotPassword1"
              component={ForgotPassword1}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
