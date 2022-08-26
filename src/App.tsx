import React, {FC, useLayoutEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { RootState } from './store';
import Search from './Components/Search/Search'
import Alert from "./Components/Alert/Alert";
import Weather from "./Components/Weather/Weather";
import { setAlert } from './store/actions/alertActions';
import { setError } from './store/actions/weatherActions';
import {Button, Grid} from "@mui/material";

const useTheme = () => {
    const [theme, setTheme] = useState('dark');

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    return {theme, setTheme};
};

const App: FC = () => {
    const dispatch = useDispatch();
    const weatherData = useSelector((state: RootState) => state.weather.data);
    const loading = useSelector((state: RootState) => state.weather.loading);
    const error = useSelector((state: RootState) => state.weather.error);
    const alertMsg = useSelector((state: RootState) => state.alert.message);
    const {theme, setTheme} = useTheme()

    const handleLightThemeClick = () => {
        setTheme('light');
    };

    const handleDarkThemeClick = () => {
        setTheme('dark');
    };

    return (
        <Grid container>
            <Search title="Enter city name and press search button" />
            {loading ? <h2 className="is-size-3 py-2">Loading...</h2> : weatherData && <Weather data={weatherData} />}

            {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
            {error && <Alert message={error} onClose={() => dispatch(setError())} />}

            <Grid>
                <Button onClick={handleLightThemeClick}>Light</Button>
                <Button onClick={handleDarkThemeClick}>Dark</Button>
            </Grid>
        </Grid>
    );
}

export default App;
