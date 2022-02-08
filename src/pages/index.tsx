import TextareaField from "../components/Form/TextareaField";

import languages from "../assets/languages.json";

import { Container, Wrapper, TranslationGroup, Button } from "./styles";
import Select from "../components/Form/Select";
import { FaExchangeAlt } from "react-icons/fa";

const Homepage = () => {
  return (
    <Container>
      <Wrapper>
        <TranslationGroup>
          <Select options={languages} name="teste1" />
          <TextareaField />
        </TranslationGroup>
        <Button>
          <FaExchangeAlt />
        </Button>
        <TranslationGroup>
          <Select options={languages} name="teste2" />
          <TextareaField />
        </TranslationGroup>
      </Wrapper>
    </Container>
  );
};

export default Homepage;
