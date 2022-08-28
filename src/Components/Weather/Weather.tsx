import React, {FC} from 'react';
import {WeatherData} from "../../store/types";

interface WeatherProps {
    data: WeatherData;
}

const Weather: FC<WeatherProps> = ({data}) => {
    const fahrenheit = (data.main.temp * 9/5 + 32).toFixed();
    const celsius = (data.main.temp).toFixed();

    return (
        <section className="section">
            <div className="container app_text">
                <h1 className="app_text has-text-centered is-size-2"
                    style={{marginBottom: 50}}>{data.name} - {data.sys.country}
                </h1>
                <div className="level" style={{alignItems: 'flex-start'}}>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">{data.weather[0].description}</p>
                            <p className="title"><img
                                src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt=""/></p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">температура</p>
                            <div className="title">
                                <p className="mb-2 app_text">{fahrenheit}<sup>&#8457;</sup></p>
                                <p className="app_text">{celsius}<sup>&#8451;</sup></p>
                            </div>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">влажность</p>
                            <div className="title">
                                <p className="app_text">{data.main.humidity}</p>
                            </div>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">давление</p>
                            <div className="title">
                                <p className="app_text">{data.main.pressure}</p>
                            </div>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">ветер</p>
                            <div className="title">
                                <p className="app_text">{data.wind.speed} м/с</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Weather;