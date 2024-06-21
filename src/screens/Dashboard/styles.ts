import { StyleSheet } from "react-native";
import colors from "utils/colors";
import { globalStyles } from "utils/constants";
import { moderateScale } from "utils/scale";

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    ArrowBtn: {
        backgroundColor: colors.primary,
        padding: 10,
        marginVertical: 10,
        borderRadius: 10
    },
    ArrowBtnTxt: {
        ...globalStyles.normalText,
        marginHorizontal: moderateScale(5),
        color: colors.white
    },
    row: {
        flexDirection: "row",
        alignSelf: "center",
        alignItems: 'center',
        justifyContent: 'center'
    },
    Heading: {
        ...globalStyles.mediumText,
        color: colors.black,
        textAlign: "center",
        marginTop: moderateScale(20)
    },
    InfoContainer: {
        backgroundColor: colors.black,
        height: 20
    },
    InfoHeading: {
        ...globalStyles.mediumText,
        color: colors.black
    },
    InfoHeadingDecTxt: {
        ...globalStyles.smallText,
        textAlign: "center"
    },


});