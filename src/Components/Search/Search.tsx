import React, {FC, FormEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {setAlert} from "../../store/actions/alertActions";
import {getWeather, setLoading} from "../../store/actions/weatherActions";

interface SearchProps {
    title: string;
}

const Search: FC<SearchProps> = ({ title }) => {
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

    return(
        <>
            <div className="app_container">
                <div className="container">
                    <h1 className="title">{title}</h1>
                    <form className="py-5" onSubmit={submitHandler}>
                        <input
                            type="text"
                            className="app_input"
                            placeholder="Enter city name"
                            style={{maxWidth: 300}}
                            value={city}
                            onChange={changeHandler}
                        />
                        <button
                            className="app_button"
                            style={{maxWidth: 300, margin: '0 auto'}}
                        >
                            Search
                        </button>
                    </form>
                </div>
            </div>



            {/*<Grid container direction="column" spacing={2}>*/}
            {/*    <Grid item container justifyContent="center">*/}
            {/*        <Grid>*/}
            {/*            <Typography variant="h4">*/}
            {/*                Приложение "Погода"*/}
            {/*            </Typography>*/}
            {/*        </Grid>*/}
            {/*        <form*/}
            {/*            onSubmit={submitHandler}*/}
            {/*        />*/}
            {/*        <Grid container direction="column" spacing={2}>*/}
            {/*            <Grid item xs>*/}
            {/*                <TextField*/}
            {/*                    fullWidth*/}
            {/*                    variant="outlined"*/}
            {/*                    label="Enter a city name"*/}
            {/*                    value={city}*/}
            {/*                    onChange={() => changeHandler}*/}
            {/*                />*/}
            {/*            </Grid>*/}
            {/*            <Grid item xs>*/}
            {/*                <Button color="primary" variant="contained">Search</Button>*/}
            {/*            </Grid>*/}
            {/*        </Grid>*/}
            {/*    </Grid>*/}
            {/*</Grid>*/}
        </>
    )
}

export default Search;