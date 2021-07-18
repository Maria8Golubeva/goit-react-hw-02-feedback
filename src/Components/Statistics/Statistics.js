import { Component } from 'react';
import PropTypes from 'prop-types';

class Statistics extends Component {
    static propTypes = {
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired,
    };

    render() {
        const { good, neutral, bad, total, positivePercentage } = this.props;

        return (
            <>

                <p>Good: {good}</p>
                <p>Neutral: {neutral}</p>
                <p>Bad: {bad}</p>
                <h3>Total Scores: {total}</h3>
                {positivePercentage ? (
                    <h3>Positive scores: {positivePercentage}%</h3>
                ) : (
                    <h3>Positive scores: no have</h3>
                )}
            </>
        );
    }
}

export default Statistics;