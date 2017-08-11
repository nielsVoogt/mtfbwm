import React, { Component } from 'react';
import Details from './details';

class Planets extends Component {

    render() {

        const planets = this.props.planets;
        let key = 0;

        return (
            <div className="data-container">
                {
                    planets.map((planet) => {
                        return (
                            <div key={key++} className="data-item">
                                <div className="data-item__image" data-image-type="planets"/>
                                <p className="data-item__name">{planet.name}</p>
                                <Details>
                                    <div className="additional-details__image" data-image-type="planets" />
                                    <hr className="additional-details__divider" />
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>name</td>
                                                <td>{planet.name}</td>
                                            </tr>
                                            <tr>
                                                <td>rotation period</td>
                                                <td>{planet.rotation_period}</td>
                                            </tr>
                                            <tr>
                                                <td>orbital period</td>
                                                <td>{planet.orbital_period}</td>
                                            </tr>
                                            <tr>
                                                <td>diameter</td>
                                                <td>{planet.diameter}</td>
                                            </tr>
                                            <tr>
                                                <td>climate</td>
                                                <td>{planet.climate}</td>
                                            </tr>
                                            <tr>
                                                <td>gravity</td>
                                                <td>{planet.gravity}</td>
                                            </tr>
                                            <tr>
                                                <td>terrain</td>
                                                <td>{planet.terrain}</td>
                                            </tr>
                                            <tr>
                                                <td>surface_water</td>
                                                <td>{planet.surface_water}</td>
                                            </tr>
                                            <tr>
                                                <td>population</td>
                                                <td>{planet.population}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Details>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}

export default Planets;