import axios from "axios";

const BASE_URL = "https://api.mymemory.translated.net/";

interface GetTranslationProps {
  text: string;
  languages: string[];
}

export const getTranslation = async (argumentos: GetTranslationProps) => {
  try {
    const result = await axios.get(`${BASE_URL}/get`, {
      params: {
        q: argumentos.text,
        langpair: argumentos.languages.join("|"),
      },
    });

    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
