import {Unit, Value} from "./uploadStats.styled";

export const UploadStats = ({id, label, percentage}) => {

  return(
    <>
      <span>{id}</span>
      <Unit>{label}</Unit>
      <Value>{percentage}</Value>
    </>
  )
}

