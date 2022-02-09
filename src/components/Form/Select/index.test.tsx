import { fireEvent, render, screen } from "@testing-library/react";

import Select from ".";

const mocked_options = [
  {
    value: "value1",
    text: "text1",
  },
  {
    value: "value2",
    text: "text2",
  },
];

describe("<Select/>", () => {
  it("should render correctly", () => {
    const { container } = render(
      <Select name="TesteName" options={mocked_options} />
    );

    expect(container).toMatchSnapshot();
  });

  it("should render all options correctly", () => {
    render(<Select name="TesteName" options={mocked_options} />);

    const element = screen.getAllByRole("option");

    expect(element).toHaveLength(2);
  });

  it("should call the onChangeFn and change the selected option", () => {
    const onChangeFn = jest.fn();

    render(
      <Select name="TesteName" options={mocked_options} onChange={onChangeFn} />
    );

    const select = screen.getByRole("combobox");

    const [firstOption, secondOption] =
      screen.getAllByRole<HTMLOptionElement>("option");

    expect(firstOption.selected).toBeTruthy();
    expect(secondOption.selected).toBeFalsy();

    fireEvent.change(select, { target: { value: "value2" } });

    expect(firstOption.selected).toBeFalsy();
    expect(secondOption.selected).toBeTruthy();

    expect(onChangeFn).toHaveBeenCalled();
  });
});
