import React from "react";
import "../styles/ResultsList.css";

class ResultsList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className="results-list-container">{this.props.items}</div>;
    }
}

class ResultsItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="results-list-item">
                <label>{this.props.feature}</label>
                {this.props.bar}
            </div>
        );
    }
}

class TotalBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="results-total-bar">
                <div
                    className="results-bar"
                    style={{
                        width: this.props.widths.greenWidth,
                        backgroundColor: "green",
                    }}
                />
                <div
                    className="results-bar"
                    style={{
                        width: this.props.widths.redWidth,
                        backgroundColor: "red",
                    }}
                />
                <div
                    className="results-bar"
                    style={{
                        width: this.props.widths.baseWidth,
                        backgroundColor: "orange",
                    }}
                />
            </div>
        );
    }
}

export { ResultsList, ResultsItem, TotalBar };
