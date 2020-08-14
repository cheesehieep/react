import http from "./axiosHttp";

const getAll = () => {
    return http.get("/orderDetails");
};

const get = id => {
    return http.get(`/orderDetails/${id}`);
};

const create = data => {
    return http.post("/orderDetails", data);
};

const update = (id, data) => {
    return http.put(`/orderDetails/${id}`, data);
};

const remove = id => {
    return http.delete(`/orderDetails/${id}`);
};


export default {
    getAll,
    get,
    create,
    update,
    remove,
};