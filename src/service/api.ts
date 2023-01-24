const url = import.meta.env.VITE_DEV_TEST
export const API = {
    login: url + "login",
    organization: url + "organizations"
}