import { Button } from "antd";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  &.ant-btn {
    background: #ec6803;
  }
  &.ant-btn-primary {
    border-color: #ec6803;
  }
  ::selection {
    background: #ec6803;
  }
  ::focus {
    background: #ec6803;
  }
`;
