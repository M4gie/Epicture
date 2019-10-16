import AsyncStorage from "@react-native-community/async-storage";


async function saveToken(token) {
    await AsyncStorage.setItem('BearerToken', token);
}

async function clearToken() {
    try {
        await AsyncStorage.clear();
        return true;
    } catch (e) {
        return false;
    }
}

async function getToken() {
    try {
        return await AsyncStorage.getItem('BearerToken');
    } catch (e) {
        return null;
    }
}

const token = {
    saveToken, clearToken, getToken
}

export default token;
