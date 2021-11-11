import { Redirect, withRouter } from "react-router-dom";
import { Space } from "antd";
import TagList from "./components/TagList/TagList";
import useTagDataContext from "./hooks/useTagDataContext";
import AddButton from "./components/AddButton/AddButton";
import UserInput from "./components/UserInput/UserInput";
import * as S from "./styles/styles";
import "./styles/App.css";

const App = () => {
  const { tagList } = useTagDataContext();
  const noTags = tagList.length < 1;
  const arr = Array.from(Array(3).keys());

  return (
    <S.Wrapper>
      {noTags && <Redirect to="/" />}
      <Space direction="vertical" align="center">
        <UserInput />
        <AddButton />
      </Space>
      <S.TagListWrapper>
        {arr.map((_, i) => {
          return <TagList key={i} />;
        })}
      </S.TagListWrapper>
    </S.Wrapper>
  );
};

export default withRouter(App);
