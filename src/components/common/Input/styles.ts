import { Input } from "antd";
import styled from "styled-components";

export const StyledInput = styled(Input)`
  &.ant-input,
  :focus {
    border: none;
    border-bottom: 5px solid #ec6803;
    text-align: center;
    box-shadow: none;
  }
`;
