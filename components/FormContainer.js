import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import AwardBox from "./AwardBox";
import CoinBronze from "./CoinBronze";
import CoinSpecialImage from "./CoinSpecialImage";

const FormContainer = () => {
  return (
    <View style={styles.awardSlider}>
      <View style={[styles.awardsGroup, styles.coinParentLayout1]}>
        <View style={[styles.awardBoxWrapper, styles.coinParentLayout]}>
          <AwardBox
            monthStreakBadge="1 month streak "
            congratulationsYouWereDil={`Congratulations! You were diligent and filled out your 
symptoms every day for a whole month! Be proud of yourself :)`}
            icon={require("../assets/icon.png")}
            awardBoxPosition="absolute"
            awardBoxTop={0}
            awardBoxLeft={0}
            awardBoxWidth={303}
            congratulationsYouWereTop={59}
            plusFABRoundedBackgroundColor="#7fd1ff"
          />
        </View>
        <View style={[styles.coinBronzeParent, styles.coinParentLayout]}>
          <CoinBronze
            group981={require("../assets/group-981.png")}
            coinBronzePosition="absolute"
            coinBronzeWidth={266}
            coinBronzeHeight={267}
            coinBronzeTop={0}
            coinBronzeLeft={19}
            groupIconHeight="88.3%"
            groupIconWidth="86.84%"
            groupIconTop="4.8%"
            groupIconRight="6.58%"
            groupIconBottom="6.9%"
            groupIconLeft="6.58%"
            numberAwardTitleHeight="49.62%"
            numberAwardTitleWidth="37.95%"
            numberAwardTitleTop="22.58%"
            numberAwardTitleRight="32.42%"
            numberAwardTitleBottom="27.79%"
            numberAwardTitleLeft="29.64%"
            weekTop="61.45%"
            weekFontSize={29}
            weekLineHeight={50}
            textLeft="31.91%"
            textFontSize={99}
            textLineHeight={126}
          />
          <AwardBox
            monthStreakBadge="1 week streak badge"
            congratulationsYouWereDil={`Congratulations! You were diligent and filled out your 
symptoms every day for a whole week! Keep it up :)`}
            icon={require("../assets/icon1.png")}
            awardBoxPosition="absolute"
            awardBoxTop={306}
            awardBoxLeft={0}
            awardBoxWidth={303}
            congratulationsYouWereTop={71}
            plusFABRoundedBackgroundColor="#f273b2"
          />
        </View>
        <View style={[styles.coinSpecialParent, styles.coinParentLayout]}>
          <CoinSpecialImage
            coinSpecialImageCoinSpeci={require("../assets/coin-special.png")}
            coinSpecialIconPosition="absolute"
            coinSpecialIconWidth={266}
            coinSpecialIconHeight={267}
            coinSpecialIconTop={0}
            coinSpecialIconLeft={19}
          />
          <AwardBox
            monthStreakBadge="1 UDO Special Coin"
            congratulationsYouWereDil="Congratulations! You were the most diligent of them all and earned yourself a special UDO Coin! Use this Coin to get a whole month of UDO for free :)"
            icon={require("../assets/icon2.png")}
            awardBoxPosition="absolute"
            awardBoxTop={306}
            awardBoxLeft={0}
            awardBoxWidth={303}
            congratulationsYouWereTop={47}
            plusFABRoundedBackgroundColor="#f273b2"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  coinParentLayout1: {
    height: 545,
    top: 0,
  },
  coinParentLayout: {
    width: 303,
    position: "absolute",
  },
  awardBoxWrapper: {
    top: 298,
    height: 239,
    left: 0,
  },
  coinBronzeParent: {
    left: 837,
    height: 545,
    top: 0,
  },
  coinSpecialParent: {
    left: 1256,
    height: 545,
    top: 0,
  },
  awardsGroup: {
    width: 1559,
    left: 0,
    position: "absolute",
  },
  awardSlider: {
    top: 173,
    left: 44,
    width: 336,
    height: 549,
    position: "absolute",
  },
});

export default FormContainer;
