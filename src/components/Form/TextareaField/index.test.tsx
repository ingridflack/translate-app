import { render } from "@testing-library/react";

import TextareaField from ".";

describe("<TextareaField/>", () => {
  it("should render correctly", () => {
    const { container } = render(<TextareaField />);

    expect(container).toMatchSnapshot();
  });
});
