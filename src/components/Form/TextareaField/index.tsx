import { HTMLAttributes } from "react";
import { Container, Textarea } from "./styles";

interface TextareaFieldProps extends HTMLAttributes<HTMLTextAreaElement> {
  rows?: number;
  cols?: number;
}
const TextareaField = ({ rows = 10, cols, ...props }: TextareaFieldProps) => {
  return (
    <Container>
      <Textarea rows={rows} cols={cols} {...props} />
    </Container>
  );
};

export default TextareaField;
