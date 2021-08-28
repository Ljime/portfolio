import { useState } from "react";

const useInput = () => {
    const [value, setValue] = useState('')

    const onChangeHandler = (event) => {
        setValue(event.target.value)
    }

    return {
        value,
        onChangeHandler
    }
}

export default useInput