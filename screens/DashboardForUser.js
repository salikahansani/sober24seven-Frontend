import * as React from "react";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize ,icon} from "../GlobalStyles";

const DashboardForUser = () => {
  const navigation = useNavigation();

  const CategoryBox = ({ title, description, onPress }) => (
    <Pressable style={styles.categoryBox} onPress={onPress}>
      <Text style={styles.categoryTitle}>{title}</Text>
      <Text style={styles.categoryDescription}>{description}</Text>
    </Pressable>
  );

  return (
    <ScrollView style={styles.dashboardForUser}>
      <View style={styles.header}>
        {/* Header content, like back arrow, title, and dots */}
      </View>
      <View style={styles.content}>
        <CategoryBox
          title="Routing Schedule"
          description="Description de catégorie ..."
          // icon={require('../assets/image-1@3x.png')}
          onPress={() => navigation.navigate("RoutingSchedule")}
          
        />
        <CategoryBox
          title="Progress Chart"
          description="Description de catégorie ..."
          onPress={() => navigation.navigate("ProgressChart")}
        />
        <CategoryBox
          title="Community"
          description="Description de catégorie ..."
          onPress={() => navigation.navigate("Community")}
        />
        <CategoryBox
          title="Rewards"
          description="Description de catégorie ..."
          onPress={() => navigation.navigate("Rewards")}
        />
      </View>
      <View style={styles.footer}>
        {/* Footer content, like navigation icons */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
    dashboardLayout: {
    width: 368,
    borderRadius: Border.br_xs,
    left: 23,
    position: "absolute",
  },
  rectangleViewLayout: {
    height: 137,
    width: 368,
    borderRadius: Border.br_xs,
    left: 23,
    position: "absolute",
  },
  dashboardChildLayout: {
    height: 108,
    width: 106,
    backgroundColor: Color.neutralBackground,
    left: 41,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  rewardsTypo: {
    width: 172,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.headingsH5,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    left: 158,
    position: "absolute",
  },
  descriptionTypo1: {
    height: 15,
    width: 153,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    left: 158,
    position: "absolute",
  },
  communityTypo: {
    height: 25,
    width: 172,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.headingsH5,
    fontWeight: "600",
    fontSize: FontSize.size_xl,
    left: 158,
    position: "absolute",
  },
  descriptionTypo: {
    height: 14,
    width: 153,
    fontFamily: FontFamily.interRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    left: 158,
    position: "absolute",
  },
  hotel11Layout: {
    height: 88,
    position: "absolute",
  },
  iconPosition1: {
    left: 51,
    width: 86,
  },
  sdgp114Layout: {
    width: "26.57%",
    height: "2.13%",
    position: "absolute",
  },
  sdgpTypo: {
    fontFamily: FontFamily.manropeSemiBold,
    fontSize: FontSize.size_sm,
    height: "100%",
    textAlign: "left",
    fontWeight: "600",
    width: "100%",
  },
  image2IconPosition: {
    left: 41,
    position: "absolute",
  },
  iconPosition: {
    top: 758,
    position: "absolute",
    overflow: "hidden",
  },
  vectorIcon: {
    height: "3.5%",
    width: "7.25%",
    top: "7.83%",
    right: "86.47%",
    bottom: "88.67%",
    left: "6.28%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  dashboardForUser1Child: {
    top: 67,
    left: 349,
    width: 34,
    height: 34,
    position: "absolute",
  },
  dashboardForUser1Item: {
    top: 129,
    backgroundColor: Color.colorLightblue_100,
    height: 136,
  },
  dashboardForUser1Inner: {
    top: 282,
    backgroundColor: Color.colorPlum_100,
    height: 138,
  },
  rectangleView: {
    top: 436,
    backgroundColor: Color.colorLightgoldenrodyellow,
  },
  dashboardForUser1Child1: {
    top: 590,
    backgroundColor: Color.colorPalegoldenrod_100,
  },
  dashboardForUser1Child2: {
    top: 143,
  },
  dashboardForUser1Child3: {
    top: 298,
    height: 107,
    width: 106,
    backgroundColor: Color.neutralBackground,
    left: 41,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  dashboardForUser1Child4: {
    top: 451,
  },
  dashboardForUser1Child5: {
    top: 604,
  },
  routingSchedule: {
    height: 24,
    top: 153,
  },
  descriptionDeCatgorie: {
    top: 183,
  },
  progressChart: {
    top: 307,
  },
  descriptionDeCatgorie1: {
    top: 337,
  },
  community: {
    top: 460,
  },
  rewards: {
    top: 613,
    height: 26,
  },
  descriptionDeCatgorie2: {
    top: 492,
  },
  descriptionDeCatgorie3: {
    top: 645,
  },
  contrat1Icon: {
    top: 614,
    width: 86,
    left: 51,
  },
  hotel11: {
    top: 461,
    left: 52,
    width: 85,
  },
  livraisonRapide1Icon: {
    height: 86,
    width: 86,
    top: 153,
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
    top: "97.2%",
    right: "36.71%",
    bottom: "0.68%",
    left: "36.71%",
  },
  image2Icon: {
    top: 308,
    width: 100,
    height: 100,
  },
  dashboardForUser1Child6: {
    top: 747,
    borderRadius: Border.br_131xl,
    backgroundColor: Color.colorLightskyblue_100,
    height: 66,
    width: 86,
  },
  home03Icon: {
    left: 62,
    width: 44,
    height: 42,
  },
  analyticsIcon: {
    left: 138,
    width: 47,
    height: 46,
  },
  fileIcon: {
    top: 756,
    left: 322,
    width: 42,
    height: 45,
    position: "absolute",
    overflow: "hidden",
  },
  image29Icon: {
    top: 754,
    left: 262,
    width: 50,
    height: 50,
    position: "absolute",
  },
  sdgp1143: {
    color: Color.colorDarkgray_200,
  },
  sdgp114Container: {
    top: "95.79%",
    right: "38.89%",
    bottom: "2.08%",
    left: "34.54%",
  },
  dashboardForUser1: {
    backgroundColor: Color.colorAliceblue_300,
    flex: 1,
    height: 856,
    overflow: "hidden",
    width: "100%",
  },

  categoryBox: {
    margin: 10,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#FFFFFF', // Replace with appropriate color
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333', // Replace with appropriate color
  },
  categoryDescription: {
    fontSize: 14,
    color: '#666', // Replace with appropriate color
  },
  dashboardForUser: {
    flex: 1,
    backgroundColor: '#f0f0f0', // Replace with appropriate background color
  },
  header: {
    paddingTop: 50,
    backgroundColor: '#fff', // Set header background color
  },
  content: {
    padding: 16,
  },
  footer: {
    paddingBottom: 30,
    backgroundColor: '#fff', // Set footer background color
  },
});

export default DashboardForUser;
