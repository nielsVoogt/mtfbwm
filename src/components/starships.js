import React, { Component } from 'react';
import Details from './details';

class Starships extends Component {

    render() {

        const starships = this.props.starships;
        let key = 0;

        return (
            <div className="data-container">
                {
                    starships.map((starship) => {
                        return (
                            <div key={key++} className="data-item">
                                <div className="data-item__image" data-image-type="starships"/>
                                <p className="data-item__name">{starship.name}</p>
                                <Details>
                                    <div className="additional-details__image" data-image-type="starships"/>
                                    <hr className="additional-details__divider" />
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Name</td>
                                                <td>{starship.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Model</td>
                                                <td>{starship.model}</td>
                                            </tr>
                                            <tr>
                                                <td>Manufacturer</td>
                                                <td>{starship.manufacturer}</td>
                                            </tr>
                                            <tr>
                                                <td>Cost in credits</td>
                                                <td>{starship.cost_in_credits}</td>
                                            </tr>
                                            <tr>
                                                <td>Length</td>
                                                <td>{starship.length}</td>
                                            </tr>
                                            <tr>
                                                <td>Max. atmosphering speed</td>
                                                <td>{starship.max_atmosphering_speed}</td>
                                            </tr>
                                            <tr>
                                                <td>Crew</td>
                                                <td>{starship.crew}</td>
                                            </tr>
                                            <tr>
                                                <td>Passengers</td>
                                                <td>{starship.passengers}</td>
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

export default Starships;

