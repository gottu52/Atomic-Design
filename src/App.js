import { BrowserRouter } from "react-router-dom";
import { PrimaryButton } from "./components/attoms/button/PrimaryButton";
import { SecondaryButton } from "./components/attoms/button/SecondaryButton";
import { SerchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organism/user/UserCard";
import { HeaderOnly } from "./components/templates/HeaderOnly";
import "./styles.css";

const user = {
  name: "ゆるふわ",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "papapapapapapapa@mail",
  phone: "@@@-@@@-@@@@",
  company: {
    name: "株式会社rvrnxjq"
  },
  website: "http://g00gle.com"
};

export default function App() {
  return (
    <BrowserRouter>
      <HeaderOnly className="App">
        <PrimaryButton>テストってこと、、、？</PrimaryButton>
        <SecondaryButton>うわあ、、、！！</SecondaryButton>
        <br />
        <SerchInput />
        <UserCard user={user} />
      </HeaderOnly>
    </BrowserRouter>
  );
}
