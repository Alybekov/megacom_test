import React, {FC, useLayoutEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';

import { RootState } from './store';
import Search from './Components/Search/Search'
import Alert from "./Components/Alert/Alert";
import Weather from "./Components/Weather/Weather";
import { setAlert } from './store/actions/alertActions';
import { setError } from './store/actions/weatherActions';

const useTheme = () => {
    const [theme, setTheme] = useState(localStorage.getItem('app-theme') || 'dark');

    useLayoutEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('app-theme', theme);
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
        <div className="app_container">
            <div>
                <button className="button is-light" onClick={handleLightThemeClick}>Light</button>
                <button className="button is-dark" onClick={handleDarkThemeClick}>Dark</button>
            </div>
            <Search title="Введите город:"/>
            {loading ? <h2 className="is-size-3 py-2">Loading...</h2> : weatherData && <Weather data={weatherData} />}

            {alertMsg && <Alert message={alertMsg} onClose={() => dispatch(setAlert(''))} />}
            {error && <Alert message={error} onClose={() => dispatch(setError())} />}
        </div>
    );
}

export default App;
