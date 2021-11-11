import { List } from "antd";
import useTagDataContext from "../../hooks/useTagDataContext";
import history from "../../history";

interface Props {
  currentTag: string;
}

const Tag = ({ currentTag }: Props) => {
  const { tagNotation, tagList, setTagList } = useTagDataContext();

  const onDelete = (tag: string) => {
    const filteredTagList = tagList.filter((_, idx) => {
      const currentTagIndex = tagList.indexOf(tag);
      return idx !== currentTagIndex;
    });
    setTagList(filteredTagList);
    history.push(`${tagNotation}${filteredTagList.join(",")}`);
  };

  return (
    <>
      <List.Item onClick={() => onDelete(currentTag)}>
        <List.Item.Meta title={currentTag} style={{ textAlign: "center" }} />
      </List.Item>
    </>
  );
};

export default Tag;
