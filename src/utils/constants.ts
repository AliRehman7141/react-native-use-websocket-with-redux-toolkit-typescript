import colors from "./colors";
import { moderateScale } from "./scale";
import { StyleSheet, TextStyle } from "react-native";


interface GlobalStyles {
  headingText: TextStyle;
  subHeadingText: TextStyle;
  mediumText: TextStyle;
  normalText: TextStyle;
  smallText: TextStyle;
  titleText: TextStyle;
  ipDataTitleText: TextStyle;
  ipDataValueText: TextStyle;
}

export const globalStyles: GlobalStyles = StyleSheet.create({
  headingText: {
    fontSize: moderateScale(26),
    fontWeight: '900' as TextStyle['fontWeight'], // Cast to correct type
    lineHeight: moderateScale(39),
  },
  titleText: {
    fontSize: moderateScale(23),
    fontWeight: '700' as TextStyle['fontWeight'], // Cast to correct type
    lineHeight: moderateScale(38),
    color: colors.blue,
  },
  subHeadingText: {
    fontSize: moderateScale(16),
    fontWeight: '400' as TextStyle['fontWeight'], // Cast to correct type
    lineHeight: moderateScale(28),
  },
  mediumText: {
    fontSize: moderateScale(20),
    fontWeight: '600' as TextStyle['fontWeight'], // Cast to correct type
    lineHeight: moderateScale(30),
  },
  normalText: {
    fontSize: moderateScale(16),
    fontWeight: '400' as TextStyle['fontWeight'], // Cast to correct type
    lineHeight: moderateScale(19),
  },
  smallText: {
    fontSize: moderateScale(14),
    fontWeight: '400' as TextStyle['fontWeight'], // Cast to correct type
    lineHeight: moderateScale(19),
  },
  ipDataTitleText: {
    fontSize: moderateScale(14),
    fontWeight: '400' as TextStyle['fontWeight'], // Cast to correct type
    lineHeight: moderateScale(19),
    color: colors.white
  },
  ipDataValueText: {
    fontSize: moderateScale(12),
    fontWeight: '400' as TextStyle['fontWeight'], // Cast to correct type
    color: colors.lighterGray
  },
});










