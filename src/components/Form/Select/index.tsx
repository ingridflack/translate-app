import { HTMLAttributes } from "react";

import { Container } from "./styles";

interface SelectProps extends HTMLAttributes<HTMLSelectElement> {
  name: string;
  options: SelectOption[];
}

interface SelectOption {
  value: string;
  text: string;
}

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
