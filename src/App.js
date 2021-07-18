import { Component } from 'react';
import FeedbackOptions from './Components/Feedback/';
import Statistics from './Components/Statistics';
import Section from './Components/Section';
import Notification from './Components/Notification';

class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    clickHandle = evt => {
        const stateName = evt.target.textContent;
        this.setState({ [stateName]: this.state[stateName] + 1 });
        console.log(this, 'this');
    };

    countTotalFeedBack = () => {
        const allScores = Object.values(this.state);
        return allScores.reduce((acc, item) => (acc += item), 0);
    };

    countPositiveFeedbackPercentage = total => {
        if (total === 0) {
            return 0;
        }
        const positiveScore = this.state.good;
        const percentage = (100 / total) * positiveScore;
        return Math.floor(percentage);
    };

    render() {
        const {
            state,
            clickHandle,
            countTotalFeedBack,
            countPositiveFeedbackPercentage,
        } = this;
        const totalScores = countTotalFeedBack();

        return (
            <>
                <Section title="Please leave feedback">
                    <FeedbackOptions options={state} onLeaveFeedback={clickHandle} />
                </Section>

                <Section title="Statistics">
                    {!totalScores ? (
                        <Notification message="No feedback given" />
                    ) : (
                        <Statistics
                            good={state.good}
                            neutral={state.neutral}
                            bad={state.bad}
                            total={countTotalFeedBack()}
                            positivePercentage={countPositiveFeedbackPercentage(totalScores)}
                        />
                    )}
                </Section>
            </>
        );
    }
}

export default App;