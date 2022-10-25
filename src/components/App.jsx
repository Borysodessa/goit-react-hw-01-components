import {Profile} from "./social-fragment/Profile/Profile";
import transactions from "../data/transactions.json"
import user from "../data/user"
import uploadStats from "data/data.json"
import {Statistics} from "./Statistics/uploadStatsList/uploadStatsList";
import {Border} from "./App.styled"
import friends from "data/friends.json"
import {FriendList} from "./friendList/FriendList/FriendList";
import {TransactionHistory} from "./TransactionHistory/TransactionHistory/TransaktionHistory";


export const App = () => {
  return (
    <>
      <Border>
        <Profile profile={user[0]}/>
      </Border>
      <Border>
        <Statistics stats={uploadStats} title={"UPlOAD STATS"}/>
      </Border>
      <Border>
        <FriendList friends={friends}/>
      </Border>
      <Border>
        <TransactionHistory items={transactions}/>
      </Border>
    </>
  )
};


