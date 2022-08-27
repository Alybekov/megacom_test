import React, {FC, FormEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {setAlert} from "../../store/actions/alertActions";
import {getWeather, setLoading} from "../../store/actions/weatherActions";

interface SearchProps {
    title: string;
}

const Search: FC<SearchProps> = ({title}) => {
    const dispatch = useDispatch();
    const [city, setCity] = useState('');

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

    const submitHandler = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (city.trim() === '') {
            return dispatch(setAlert(`City is required!`))
        }

        dispatch(setLoading());
        dispatch<any>(getWeather(city));
        setCity('');
    }

    return (
        <>
            <div className="has-text-centered app_container">
                <div className="hero-body">
                    <div className="container">
                        <h1 className="app_text is-size-1">{title}</h1>
                        <form className="py-5" onSubmit={submitHandler}>
                            <input
                                type="text"
                                className="input app_input has-text-centered mb-2"
                                placeholder="Введите город"
                                style={{maxWidth: 300}}
                                value={city}
                                onChange={changeHandler}
                            />
                            <button className="button app_button is-fullwidth" style={{maxWidth: 300, margin: '0 auto'}}>Search
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search;