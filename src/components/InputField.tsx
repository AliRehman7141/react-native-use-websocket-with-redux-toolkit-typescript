import React, { FC } from "react";
import {
    TextInput,
    StyleSheet,
    View,
    Text,
    ViewStyle,
    StyleProp,
    TextStyle,
    Platform,
    TextInputProps
} from "react-native";

import { moderateScale } from "utils/scale";
import colors from "utils/colors";

interface InputProps {
    inputStyle?: StyleProp<TextStyle>;
    errorMessage?: string;
    container?: StyleProp<ViewStyle>;
}

const InputField: FC<InputProps & TextInputProps> = (props) => {
    const {
        inputStyle,
        errorMessage,
        container,
    } = props
    const paddingVertical = Platform.OS === "ios" ? 17 : 0;

    return (
        <View>
            <View style={[styles.inputContainer, container, { paddingVertical }]}>
                <TextInput
                    style={[styles.input, inputStyle]}
                    placeholderTextColor={colors.darkGray}
                    {...props}
                />
            </View>
            {errorMessage ? (
                <Text style={styles.errorMessage}>{errorMessage}</Text>
            ) : null}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        borderColor: colors.gray,
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: moderateScale(18),
        marginTop: moderateScale(20),
    },
    input: {
        flex: 1,
    },
    errorMessage: {
        marginTop: -10,
        marginBottom: 5,
    },
});

export default InputField