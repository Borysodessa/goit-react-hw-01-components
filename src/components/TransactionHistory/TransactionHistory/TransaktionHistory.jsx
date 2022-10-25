import {Transaction} from "../Transaction/Transaction";

import {Table, Thead, Tbody,Th} from "./TransactionHistory.styled";

export const TransactionHistory = ({items}) => {
  return (
    <Table>
      <Thead>
      <tr>
        <Th>Type</Th>
        <Th>Amount</Th>
        <Th>Currency</Th>
      </tr>
      </Thead>
      <Tbody>
      {items.map(item =>
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        )
      }
      </Tbody>
    </Table>
  )
}
