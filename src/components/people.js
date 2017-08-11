import React, { Component } from 'react';
import Details from './details';

class People extends Component {

    render() {

        const people = this.props.people;
        let key = 0;

        return (
            <div className="data-container">
                {
                    people.map((people) => {
                        return (
                            <div key={key++} className="data-item">
                                <div className="data-item__image" data-image-type="people" />
                                <p className="data-item__name">{people.name}</p>
                                <Details>
                                    <div className="additional-details__image" data-image-type="people"/>
                                    <hr className="additional-details__divider" />
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td>Name:</td>
                                                <td>{people.name}</td>
                                            </tr>
                                            <tr>
                                                <td>Height:</td>
                                                <td>{people.height}</td>
                                            </tr>
                                            <tr>
                                                <td>Mass:</td>
                                                <td>{people.mass}</td>
                                            </tr>
                                            <tr>
                                                <td>Hair color:</td>
                                                <td>{people.hair_color}</td>
                                            </tr>
                                            <tr>
                                                <td>Skin color:</td>
                                                <td>{people.skin_color}</td>
                                            </tr>
                                            <tr>
                                                <td>Eye color:</td>
                                                <td>{people.eye_color}</td>
                                            </tr>
                                            <tr>
                                                <td>Birth year:</td>
                                                <td>{people.birth_year}</td>
                                            </tr>
                                            <tr>
                                                <td>Gender:</td>
                                                <td>{people.gender}</td>
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

export default People;