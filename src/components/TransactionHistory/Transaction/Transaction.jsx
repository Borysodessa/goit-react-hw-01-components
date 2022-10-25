import {Td,Tr} from "./transaction.styled";
import PropTypes from "prop-types";


export const Transaction = ({type, amount, currency}) => {
  return (
    <Tr>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </Tr>
  )
}

Transaction.prototype={
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.number.isRequired
}
