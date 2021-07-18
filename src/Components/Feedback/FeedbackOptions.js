import { Component } from 'react';
import styles from './styles.module.css';
import PropTypes from 'prop-types';

class FeedbackOptions extends Component {
    static propTypes = {
        options: PropTypes.object.isRequired,
        onLeaveFeedback: PropTypes.func.isRequired,
    };

    generateId = () => {
        return Math.floor(Math.random() * 10000) + 1;
    };

    render() {
        const { options, onLeaveFeedback } = this.props;
        const buttonNames = Object.keys(options);
        return (
            <>
                {buttonNames.map(item => (
                    <button
                        className={styles.btn}
                        key={this.generateId()}
                        onClick={onLeaveFeedback}
                    >
                        {item}
                    </button>
                ))}
            </>
        );
    }
}

export default FeedbackOptions;