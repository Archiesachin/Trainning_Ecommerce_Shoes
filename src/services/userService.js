import axios from 'axios';

const BASE_URL = 'http://localhost:3000/user';

export const getUsers = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createUser = async (userData) => {
    try {
        const response = await axios.post(BASE_URL, userData);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const loginUser = async (username, password) => {
    try {
        const users = await getUsers();
        const foundUser = users.find((u) => u.username === username);

        if (!foundUser) {
            return { success: false, message: 'User Not Found' };
        }

        if (foundUser.password !== password) {
            return { success: false, message: 'Wrong Password' };
        }

        return { success: true, message: 'Successful Login', user: foundUser };
    } catch (error) {
        throw error;
    }
};