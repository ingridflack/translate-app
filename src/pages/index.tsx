import TextareaField from "../components/TextareaField";

import { Container, TextareaBox } from "./styles";

const Homepage = () => {
  return (
    <Container>
      <TextareaBox>
        <TextareaField />
        <TextareaField />
      </TextareaBox>
    </Container>
  );
};

export default Homepage;
