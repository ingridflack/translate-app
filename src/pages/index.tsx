import TextareaField from "../components/Form/TextareaField";

import languagesList from "../assets/languages.json";

import { Container, Wrapper, TranslationGroup, Button } from "./styles";
import Select from "../components/Form/Select";
import { FaExchangeAlt } from "react-icons/fa";
import { ChangeEvent, useState } from "react";
import { getTranslation } from "../service/translateService";

const Homepage = () => {
  const [languages, setLanguages] = useState({ from: "", to: "" });

  const [text, setText] = useState("");

  const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const onChangeStartLanguage = ({ target }: any) => {
    const { name, value } = target;

    setLanguages((languages) => ({ ...languages, [name]: value }));

    const languagesArr = Object.values(languages);

    const objeto = {
      text: text,
      languages: languagesArr,
    };

    console.log(objeto);
    getTranslation(objeto);
  };

  console.log(languages);

  return (
    <Container>
      <Wrapper>
        <TranslationGroup>
          <Select
            name="from"
            options={languagesList}
            onChange={onChangeStartLanguage}
          />
          <TextareaField onChange={onTextareaChange} />
        </TranslationGroup>
        <Button>
          <FaExchangeAlt />
        </Button>
        <TranslationGroup>
          <Select
            name="to"
            options={languagesList}
            onChange={onChangeStartLanguage}
          />
          <TextareaField disabled />
        </TranslationGroup>
      </Wrapper>
    </Container>
  );
};

export default Homepage;
