import {Profile} from "./social-fragment/Profile/Profile";
import user from "../data/user"

import uploadStats from "data/data.json"
import {Statistics} from "./Statistics/uploadStatsList/uploadStatsLIst";
import {Border} from './App.styled'

export const App = () => {
  return (
    <>
      <Border>
        <Profile profile={user[0]}/>
      </Border>
      <Border>
        <Statistics stats={uploadStats} title={"UPlOAD STATS"}/>
      </Border>
    </>
  )
};


