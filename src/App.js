import React, { Component } from 'react';
import Data from './components/data';
import axios from 'axios';
import './css/main.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            grid: false,
            starships: [],
            planets: [],
            people: []
        }

        this.getStarships = this.getStarships.bind(this);
        this.getPlanets   = this.getPlanets.bind(this);
        this.getPeople    = this.getPeople.bind(this);

        this.toggleView = this.toggleView.bind(this);
    };

    getStarships = () => axios.get(`https://swapi.co/api/starships/`).then((respons) => { this.setState({ starships: respons.data.results }) });
    getPlanets   = () => axios.get(`https://swapi.co/api/planets/`).then((respons) => { this.setState({ planets: respons.data.results }) });
    getPeople    = () => axios.get(`https://swapi.co/api/people/`).then((respons) => { this.setState({ people: respons.data.results }) });

    componentDidMount() {
        this.getStarships();
        this.getPlanets();
        this.getPeople();
    }

    toggleView(e) {
        e.preventDefault();
        this.state.grid !== false ? this.setState({grid: false}) : this.setState({grid: true})
    }

    render() {
        const {people}    = this.state,
              {starships} = this.state,
              {planets}   = this.state;

        return (
            <div className="wrapper">
                <div className="star-wars-header">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512.00001 244.0053"
                        height="244.005"
                        width="512"
                        className="star-wars-header__logo"
                    >
                        <path d="M221.516 183.01h-14.388c-.507 0-.87-.572-.87-1.118 0-.194 7.655-24.877 7.655-24.877.273-.923.3-.95.403-.95h.013c.115 0 .128.027.4.95 0 0 7.657 24.683 7.657 24.877 0 .546-.39 1.118-.87 1.118m19.405-56.475c-.143-.494-.585-.858-1.105-.897H186.98c-.532.052-.96.403-1.104.884 0 0-29.206 96.417-29.206 96.6 0 .48.377.87.87.87h34.926c.273-.104.48-.364.546-.663l4.068-12.998c.13-.325.43-.546.793-.56l32.222-.025c.35.026.663.273.793.585l4.16 12.997c.064.298.272.57.545.675l34.366-.013c.48 0 .883-.364.883-.845 0-.17-29.92-96.612-29.92-96.612M340.485 165.9l-21.46.014s-.57-.17-.57-.82l-.014-10.826c0-.65.573-.82.573-.82h19.678c2.29 0 6.916 1.145 6.916 6.435 0 5.29-5.12 6.018-5.12 6.018m102.89-8.382H492v-31.884h-62.52c-5.848 0-14.076 3.016-18.794 6.512-4.718 3.496-11.542 11.464-11.542 22.447 0 10.983 6.668 19.523 6.668 19.523 3.418 4.237 12.023 13.063 12.023 13.063.195.207.312.48.312.792 0 .662-.533 1.195-1.196 1.195h-48.156c-5.862-.026-6.265-2.352-6.265-2.69 0-.598.727-.975.727-.975 2.197-1.053 6.68-4.55 6.68-4.55 9.515-7.408 10.66-17.572 10.66-23.018 0-5.46-.82-15.117-10.58-23.578-9.762-8.462-22.123-8.696-22.123-8.696h-68.72v97.77c0 .31.286.558.598.558h38.253v-27.425c0-.48.74 0 .74 0l19.926 20.017c7.085 7.16 18.796 7.408 18.796 7.408l75.335-.013c12.856 0 20.005-6.992 21.967-8.942 1.95-1.963 8.462-9.28 8.462-21.407 0-12.114-5.538-18.314-7.904-21.16-2.105-2.548-10.502-11.44-12.257-13.285-.21-.168-.34-.427-.34-.713 0-.43.248-.832.625-.95M139.212 223.986c.26 0 .442-.182.52-.468 0 0 29.596-97.21 29.596-97.302 0-.26-.156-.545-.403-.57H132.44c-.182 0-.3.142-.338.337 0 .013-7.552 25.28-7.552 25.293-.052.208-.156.338-.338.338-.182 0-.338-.182-.364-.338l-7.902-25.306c-.026-.17-.156-.325-.338-.325l-40.293-.013c-.117.026-.22.13-.26.234l-7.084 25.397c-.038.22-.155.35-.35.35-.17 0-.312-.13-.338-.298l-7.513-25.37c-.014-.157-.144-.287-.3-.313H20.58c-.31 0-.57.26-.57.584 0 .052.012.156.012.156l30.038 97.146c.078.286.26.468.52.468l32.3.013c.194-.027.39-.248.44-.482.014 0 11.244-36.147 11.244-36.147.065-.22.156-.35.338-.35.195 0 .3.156.35.338l10.958 36.316c.065.182.234.312.442.312h32.56M111.114 20.004c-5.862 0-14.076 3.015-18.794 6.512-4.72 3.496-11.542 11.464-11.542 22.447 0 10.983 6.667 19.523 6.667 19.523 3.42 4.237 12.023 13.127 12.023 13.127.195.208.312.48.312.78 0 .663-.533 1.21-1.195 1.21H20v34.755h94.455c12.842 0 20.003-6.993 21.966-8.955 1.95-1.95 8.45-9.268 8.45-21.395 0-12.114-5.524-18.38-7.89-21.225-2.106-2.548-10.502-11.386-12.257-13.22-.208-.18-.338-.44-.338-.727 0-.43.247-.82.624-.95h45.49v66.472h34.978V52.056h42.464V20.004H111.114zM416.18 60.272l-21.458.013s-.572-.17-.572-.82l-.013-10.826c0-.65.572-.82.572-.82h19.678c2.287 0 6.914 1.144 6.914 6.434s-5.12 6.018-5.12 6.018m28.31 23.266c-5.85-.026-6.266-2.352-6.266-2.69 0-.598.727-.975.727-.975 2.197-1.053 6.68-4.55 6.68-4.55 9.516-7.408 10.66-17.572 10.66-23.018 0-5.46-.82-15.117-10.58-23.578-9.762-8.462-22.123-8.722-22.123-8.722h-68.72V117.8c0 .312.287.56.6.56h38.25V90.946c0-.494.742 0 .742 0l19.926 20.004c7.083 7.162 18.794 7.41 18.794 7.41h58.815V83.537H444.49zM299.077 77.372h-14.39c-.532 0-.87-.572-.87-1.118 0-.208 7.656-24.877 7.656-24.877.273-.923.35-.95.403-.95h.013c.05 0 .13.027.402.95 0 0 7.655 24.67 7.655 24.877 0 .546-.35 1.118-.87 1.118m19.366-56.5c-.143-.495-.572-.846-1.105-.872h-52.835c-.52.026-.962.377-1.105.858 0 0-29.18 96.443-29.18 96.625 0 .48.39.87.87.87h34.926c.286-.09.493-.363.558-.662l4.07-13.01c.13-.31.428-.532.792-.545h32.208c.364.026.663.247.806.56l4.16 12.996c.064.3.272.573.545.677l34.366-.013c.48 0 .87-.364.87-.858 0-.156-29.947-96.625-29.947-96.625"/>
                    </svg>
                    <hr className="star-wars-header__divider"/>
                    <button
                        onClick={this.toggleView}
                        className="star-wars-header__switch-view btn"
                    >
                        {this.state.grid === false ? 'show grid' : 'show rows' }
                    </button>
                </div>
                <Tabs>
                    <TabList>
                        <Tab>People ({people.length})</Tab>
                        <Tab>Starships ({starships.length})</Tab>
                        <Tab>Planets ({planets.length})</Tab>
                    </TabList>
                    <div className={this.state.grid === false ? 'view view--table' : 'view' } >
                        <TabPanel>
                            <Data
                                data={people}
                                type="people"
                                details={["name", "height", "mass", "hair_color", "skin_color", "eye_color", "birth_year", "gender"]}
                            />
                        </TabPanel>
                        <TabPanel>

                            <Data
                                data={starships}
                                type="starships"
                                details={["name", "model", "manufacturer", "cost_in_credits", "length", "max_atmosphering_speed", "crew", "passengers"]}
                            />
                        </TabPanel>
                        <TabPanel>
                            <Data
                                data={planets}
                                type="planets"
                                details={["name", "rotation_period", "orbital_period", "diameter", "climate", "gravity", "terrain", "surface_water"]}
                            />
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        );
    }
}

export default App;
