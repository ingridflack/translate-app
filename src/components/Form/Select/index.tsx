import { SelectProps } from "../../../interfaces/interfaces";

import { Container } from "./styles";

const Select = ({ name, options, ...props }: SelectProps) => {
  return (
    <Container>
      <select name={name} id={name} {...props}>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.text}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;
