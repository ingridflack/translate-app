import { TextareaFieldProps } from "../../../interfaces/interfaces";
import { Container, Textarea } from "./styles";

const TextareaField = ({ rows = 5, cols, ...props }: TextareaFieldProps) => {
  return (
    <Container>
      <Textarea rows={rows} cols={cols} {...props} />
    </Container>
  );
};

export default TextareaField;
