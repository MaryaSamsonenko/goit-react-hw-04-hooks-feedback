import PropTypes from "prop-types";
import { Description } from "./Notification.styled";
export const Notification = ({ message }) => {
  return <Description>{message}</Description>;
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
