import { css } from "@emotion/css";

export const mainContainer = css`
  display: flex;
  flex-direction: column;
  & > input:hover {
    cursor: pointer;
  }
  & > span {
    width: 6rem;
  }
`;

export const input = css`
  display: none;
`;
