import {Unit, Value} from "./uploadStats.styled";
import PropTypes from "prop-types";

export const UploadStats = ({ label, percentage}) => {

  return(
    <>
      <Unit>{label}</Unit>
      <Value>{percentage}</Value>
    </>
  )
}


UploadStats.propTypes={
   label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired
 }

