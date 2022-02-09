import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
  }
`;

export const Button = styled.button`
  border: none;
  color: #bdbdbd;
  background-color: #fff;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 37%);
  font-size: 20px;
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

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TranslationGroup = styled.div`
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 37%);
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  padding: 15px;

  position: relative;

  & ~ & {
    margin-left: 20px;
  }

  @media (max-width: 768px) {
    margin-bottom: 25px;

    & ~ & {
      margin-left: 0;
    }
  }
`;

export const Card = styled.div`
  padding: 20px 40px;
  box-shadow: 0 0 5px 0 #e2e2e2;
  font-size: 30px;
  margin-bottom: 20px;
  position: relative;
  font-weight: 700;

  &:after,
  &:before {
    content: "";
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    position: absolute;
    transition: transform 0.3s ease-in-out;
  }

  &:after {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    transform: scaleX(0);
  }

  &:before {
    border-left: 1px solid #000;
    border-right: 1px solid #000;
    transform: scaleY(0);
  }

  &:hover:before {
    transform: scaleY(1);
  }

  &:hover:after {
    transform: scaleX(1);
  }
`;
