import { HTMLAttributes, TextareaHTMLAttributes } from "react";

export interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  name: string;
  options: SelectOption[];
}

export interface SelectOption {
  value: string;
  text: string;
}

export interface TextareaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
  cols?: number;
}

export interface GetTranslationProps {
  text: string;
  languages: string[];
}
