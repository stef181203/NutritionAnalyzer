import {useCallback, useState} from "react";
import mealRepository from "../repository/mealRepository.js";

const initialState = {
    "meal": null,
    "loading": true,
};


const useMeal = () => {
    const [state, setState] = useState(initialState);

    const onSubmit = useCallback((data) => {
        setState(initialState);
        mealRepository
            .submit({ text: data })
            .then((response) => {
                setState({
                    "meal": response.data,
                    loading: false
                })
            })
            .catch((error) => console.log(error));
    }, [])

    return {...state, onSubmit }
}

export default useMeal;