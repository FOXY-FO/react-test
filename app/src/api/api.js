import * as axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:3000/api/v1/"
});

export const API = {
    getPlatforms() {
        return instance.get('platforms');
    },
    getOS() {
        return instance.get('operating-systems');
    },
    getBrowsers() {
        return instance.get('browsers');
    },
    getGroups() {
        return instance.get('groups');
    }
};