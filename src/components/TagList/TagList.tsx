import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { List } from "antd";
import useTagDataContext from "../../hooks/useTagDataContext";
import Tag from "../Tag/Tag";
import * as S from "./styles";

const TagList = () => {
  const location = useLocation();
  const { tagNotation, tagList, setTagList } = useTagDataContext();

  useEffect(() => {
    const urlHash = location.hash;
    const tagsFromUrl = urlHash.includes(tagNotation)
      ? urlHash.replace(tagNotation, "")
      : "";
    const tagListFromUrl = !!tagsFromUrl ? tagsFromUrl.split(",") : [];
    setTagList(tagListFromUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  return (
    <S.Wrapper>
      <List
        bordered
        size="large"
        itemLayout="horizontal"
        dataSource={tagList}
        renderItem={(tag) => <Tag currentTag={tag} />}
      />
    </S.Wrapper>
  );
};

export default TagList;
