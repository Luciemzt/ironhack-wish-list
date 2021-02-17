import React from 'react';

const initialState = {
    wish: '',
}

function Form ({onSubmit}){
    const [state, setFormState] = React.useState(initialState);

    const handleChange = ({ wish }) => {
        setFormState({
            ...State,
            [wish.name]: wish.value
        });
    };

    const handleSumbit = (event) => {
        event.preventDefault()
        onSubmit(state)
        setState(initialState)
    }

return (
        <form className="form" onSubmit={handleSumbit}>
            <label className="label" htmlFor="wish">
                Wish:
            </label>
            <input
                className="input"
                type="text"
                name="wish"
                value={state.wish}
                onChange={handleChange}
            />
            <button className="button" type="submit">Add Wish</button>
        </form>
)
}

export default Form