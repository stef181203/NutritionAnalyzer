import axiosInstance from "../axios/axios.js";

const mealRepository = {
    submit: async (data) => {
        return await axiosInstance.post(`/analyze-text`, data)
    }
}

export default mealRepository;