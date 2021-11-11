import { useContext } from "react";
import { Props as ContextProps, TagContext } from "../TagData";

const useTagDataContext = (): ContextProps => {
  const tagDataState = useContext(TagContext);
  if (tagDataState === null) {
    throw new Error(
      "tagData state not found. Try wrapping a parent component with <ThemeContext.Provider>."
    );
  }
  return tagDataState;
};
export default useTagDataContext;
