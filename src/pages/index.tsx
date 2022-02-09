import TextareaField from "../components/Form/TextareaField";

import languagesList from "../assets/languages.json";

import { Container, Wrapper, TranslationGroup, Button, Card } from "./styles";
import Select from "../components/Form/Select";
import { FaExchangeAlt } from "react-icons/fa";
import { ChangeEvent, useEffect, useState } from "react";
import { getTranslation } from "../service/translateService";
import useDebounce from "../hooks/useDebounce";
import { AxiosResponse } from "axios";

const Homepage = () => {
  const [text, setText] = useState("");
  const [languages, setLanguages] = useState({ from: "", to: "" });
  const [translation, setTranslation] = useState("");

  const { debouncedValue } = useDebounce(text, 500);

  useEffect(() => {
    if (!languages.from || !languages.to || !debouncedValue) return;

    const request = async () => {
      const languagesArr = Object.values(languages);

      const params = {
        text: debouncedValue,
        languages: languagesArr,
      };

      try {
        const { data }: AxiosResponse<any> = await getTranslation(params);
        setTranslation(data.responseData.translatedText);
      } catch (e) {
        console.error(e);
      }
    };

    request();
  }, [debouncedValue, languages]);

  const onTextareaChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  const onSelectChange = ({ target }: any) => {
    const { name, value } = target;

    setLanguages((languages) => ({ ...languages, [name]: value }));
  };

  return (
    <Container>
      <Card>Translator</Card>
      <Wrapper>
        <TranslationGroup>
          <Select
            name="from"
            options={languagesList}
            onChange={onSelectChange}
          />
          <TextareaField
            onChange={onTextareaChange}
            placeholder="Type here..."
          />
        </TranslationGroup>
        <Button>
          <FaExchangeAlt />
        </Button>
        <TranslationGroup>
          <Select name="to" options={languagesList} onChange={onSelectChange} />
          <TextareaField value={translation} disabled />
        </TranslationGroup>
      </Wrapper>
    </Container>
  );
};

export default Homepage;
