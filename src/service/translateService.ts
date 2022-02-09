import axios from "axios";
import { GetTranslationProps } from "../interfaces/interfaces";

const BASE_URL = "https://api.mymemory.translated.net/";

export const getTranslation = async (argumentos: GetTranslationProps) =>
  axios.get(`${BASE_URL}/get`, {
    params: {
      q: argumentos.text,
      langpair: argumentos.languages.join("|"),
    },
  });
