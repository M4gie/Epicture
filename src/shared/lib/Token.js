import AsyncStorage from "@react-native-community/async-storage";


async function saveToken(tokenName, token) {
    await AsyncStorage.setItem(tokenName, token);
}

async function clearToken(tokenName) {
    try {
        await AsyncStorage.removeItem(tokenName);
        return true;
    } catch (e) {
        return false;
    }
}

async function getToken(tokenName) {
    try {
        return await AsyncStorage.getItem(tokenName);
    } catch (e) {
        return null;
    }
}

const token = {
    saveToken, clearToken, getToken
}

export default token;
