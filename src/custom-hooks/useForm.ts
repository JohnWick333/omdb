import { useState } from 'react';
const useForm = (initialState: any) => {
    const [state, setValues] = useState(initialState)
    return [
        state,
        (event: any) => {
            setValues({ ...state, [event.target.name]: event.target.value })
        }
    ]
}
export default useForm;