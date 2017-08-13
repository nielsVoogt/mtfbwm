import React, { Component } from 'react';
import Details from './details';

class Data extends Component {

    render() {

        const details = this.props.details,
              data    = this.props.data,
              type    = this.props.type;

        let key = 0;

        return (
            <div className="data-container">
                {
                    data.map(e => {
                        return (
                            <div key={key++} className="data-item">
                                <span className="data-item__image" data-image-type={type} />
                                <p className="data-item__name">{e.name}</p>
                                <Details>
                                    <span className="additional-details__image" data-image-type={type} />
                                    <hr className="additional-details__divider" />
                                    <table>
                                        <tbody>
                                            {details.map(el => {
                                                return (
                                                    <tr key={el}>
                                                        <td>{el.replace(/_/g , " ")}:</td>
                                                        <td>{e[el]}</td>
                                                    </tr>
                                                )
                                            })}
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

export default Data;