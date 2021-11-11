import { PlusOutlined } from "@ant-design/icons";
import useTagDataContext from "../../hooks/useTagDataContext";
import history from "../../history";
import Button from "../common/Button/Button";

const AddButton = () => {
  const { tagNotation, tag, tagList, setTagList } = useTagDataContext();
  const onAdd = () => {
    tagList.push(tag);
    setTagList(tagList);
    history.push(`${tagNotation}${tagList.join(",")}`);
  };

  return (
    <Button
      type="primary"
      shape="round"
      icon={<PlusOutlined />}
      onClick={onAdd}
    />
  );
};

export default AddButton;
