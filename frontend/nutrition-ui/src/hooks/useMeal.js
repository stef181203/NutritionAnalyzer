import {useCallback, useState} from "react";
import mealRepository from "../repository/mealRepository.js";

const initialState = {
    "meal": null,
    "loading": false,
    "error": ''
};


const useMeal = () => {
    const [state, setState] = useState(initialState);

    const onSubmit = useCallback((data) => {
        setState(prevState => ({
            ...prevState,
            "loading": true
        }));
        mealRepository
            .submit({ text: data })
            .then((response) => {
                setState({
                    "meal": response.data,
                    "loading": false,
                    "error": ''
                })
            })
            .catch((error) => setState({
                "meal": null,
                "loading": false,
                "error": error.response.data.detail
            }));
    }, [])

    return {...state, onSubmit }
}

export default useMeal;