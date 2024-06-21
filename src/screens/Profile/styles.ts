import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth } = Dimensions.get('window');
const IMAGE_WIDTH = screenWidth - 60
const IMAGE_HEIGHT = 200

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    slideImage: {
        marginVertical: 30,
        alignSelf: "center",
        borderRadius: 20,
        width: IMAGE_WIDTH,
        height: IMAGE_HEIGHT
    }
});