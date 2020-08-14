import http from "./axiosHttp";

const getAll = () => {
    return http.get("/orders");
};

const get = id => {
    return http.get(`/orders/${id}`);
};

const create = data => {
    return http.post("/orders", data);
};

const update = (id, data) => {
    return http.put(`/orders/${id}`, data);
};

const remove = id => {
    return http.delete(`/orders/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};