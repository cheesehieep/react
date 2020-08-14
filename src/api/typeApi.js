import http from "./axiosHttp";

const getAll = () => {
    return http.get("/types");
};

const get = id => {
    return http.get(`/types/${id}`);
};

const create = data => {
    return http.post("/types", data);
};

const update = (id, data) => {
    return http.put(`/types/${id}`, data);
};

const remove = id => {
    return http.delete(`/types/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};