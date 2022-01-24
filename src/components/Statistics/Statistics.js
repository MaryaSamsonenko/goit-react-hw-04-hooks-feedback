import PropTypes from "prop-types";
import { Text } from "./Statistics.styled";
export const Statistics = ({
  good,
  bad,
  neutral,
  total,
  positivePercentage,
}) => {
  return (
    <ul>
      <Text key="good">Good: {good}</Text>
      <Text key="neutral">Neutral: {neutral}</Text>
      <Text key="bad">Bad: {bad}</Text>
      <Text key="total">Total: {total}</Text>
      <Text key="percent">Positive feedback: {positivePercentage}%</Text>
    </ul>
  );
};

Statistics.prototype = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  persent: PropTypes.number.isRequired,
};
