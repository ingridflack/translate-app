import { Container, Textarea } from "./styles";

interface TextareaFieldProps {
  rows?: number;
  cols?: number;
}
const TextareaField = ({ rows = 10, cols = 60 }: TextareaFieldProps) => {
  return (
    <Container>
      <Textarea rows={rows} cols={cols} />
    </Container>
  );
};

export default TextareaField;
