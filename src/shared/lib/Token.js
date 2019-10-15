import AsyncStorage from "@react-native-community/async-storage";


async function saveToken(token) {
    await AsyncStorage.setItem('token', token);
}

async function clearToken() {
    await AsyncStorage.clear();
}

async function getToken() {
    return await AsyncStorage.getItem('token');
}

const token = {
    saveToken, clearToken, getToken
}

export default token;
