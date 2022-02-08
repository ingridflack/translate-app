import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  select {
    position: relative;
    display: inline-block;
    margin-bottom: 15px;
    width: 100%;

    display: inline-block;
    width: 100%;
    cursor: pointer;
    padding: 11px 13px;
    outline: 0;
    border: none;
    border-bottom: 1px solid #bdbdbd;

    &:hover {
      background: #f0f1f1;
    }

    &:disabled {
      opacity: 0.5;
      pointer-events: none;
    }
  }
`;

export const SelectBox = styled.select``;
