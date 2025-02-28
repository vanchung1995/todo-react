import AxiosCustom from "./axios.custom";

const createUserApi = (fullName, email, password, phone) => {
    const TODO_BACKEND = '/api/v1/user';
    const data = { fullName, email, password, phone }
    return AxiosCustom.post(TODO_BACKEND, data);
};

const updateUserApi = () => {

}

const fetchAllUser = () => {
    const TODO_BACKEND = '/api/v1/user';
    return AxiosCustom.get(TODO_BACKEND)
}

export {
    createUserApi, updateUserApi, fetchAllUser
}