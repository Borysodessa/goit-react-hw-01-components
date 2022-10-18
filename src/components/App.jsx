import {Profile} from "./social-fragment/Profile/Profile";
import user from "../data/user"

export const App = () => {
  return (
  <div>
    <Profile profile={user[0]}/>
  </div>
  )
};


