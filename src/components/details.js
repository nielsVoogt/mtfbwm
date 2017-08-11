import React, { Component } from 'react';

class Details extends Component {

    constructor(props) {
        super(props);

        this.state = {
            expanded: false,
        }

        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
    }

    open() {
        this.setState({expanded: !this.state.expanded})
    }

    close() {
        this.setState({expanded: !this.state.expanded})
    }

    render() {

        if(!this.state.expanded) {
            return (
                <button
                    className="data-item__open-additonal-details btn"
                    onClick={this.open}
                >
                    Show more details
                </button>
            )
        }

        return (
            <div className="additional-details-holder">
                <button className="data-item__open-additonal-details btn">
                    Show more details
                </button>
                <div className="additional-details-overlay" />
                <div className="additional-details additional-details--open">
                    {this.props.children}
                    <button
                        className="additional-details__button"
                        onClick={this.close}
                    >
                        Hide
                    </button>
                </div>
            </div>
        );
  }
}

export default Details;