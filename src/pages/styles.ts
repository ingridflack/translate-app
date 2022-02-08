import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export const Button = styled.button`
  border: none;
  color: #bdbdbd;
  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 37%);
  font-size: 20px;
  cursor: pointer;
  line-height: 1;
  padding: 10px;

  position: absolute;
  left: 50%;
  top: 30px;
  transform: translateX(-50%);
  border-radius: 8px;

  z-index: 1;

  > svg {
    display: block;
  }
`;

export const TranslationGroup = styled.div`
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 37%);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  width: 500px;
  padding: 15px;

  & ~ & {
    margin-left: 20px;
  }
`;

// |--------------------|
// |          |         |
// |          |         |
// |          |         |
// |--------------------|
