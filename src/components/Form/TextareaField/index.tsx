import { TextareaHTMLAttributes } from "react";
import { Container, Textarea } from "./styles";

interface TextareaFieldProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
  cols?: number;
  text?: string;
}
const TextareaField = ({ rows = 5, cols, ...props }: TextareaFieldProps) => {
  return (
    <Container>
      <Textarea rows={rows} cols={cols} {...props} />
    </Container>
  );
};

export default TextareaField;
