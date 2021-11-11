import React, { FC, useState } from "react";

export interface Props {
  tagNotation: string;
  tag: string;
  setTag: (state: string) => void;
  tagList: string[];
  setTagList: (state: string[]) => void;
}

const TagContext = React.createContext<Props | null>(null);

const TagDataProvider: FC = ({ children }) => {
  const tagNotation = "#tags=";
  const [tag, setTag] = useState<string>("");
  const [tagList, setTagList] = useState<string[]>([]);
  return (
    <TagContext.Provider
      value={{ tagNotation, tag, setTag, tagList, setTagList }}
    >
      {children}
    </TagContext.Provider>
  );
};

export { TagContext, TagDataProvider };
