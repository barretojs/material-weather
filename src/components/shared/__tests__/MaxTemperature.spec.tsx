import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import globalStore from "@store/globalStore";
import MaxTemperature from "../MaxTemperature";

describe("<MaxTemperature />", () => {
  it("should render without crashing", () => {
    render(
      <Provider store={globalStore}>
        <MaxTemperature maxTemperature={10} />
      </Provider>
    );

    expect(screen.getByTestId("LocalFireDepartmentIcon")).toBeInTheDocument();
    expect(screen.getByText(`10 ºC`)).toBeInTheDocument();
  });

  it("should not render grid if maxTemperature is undefined", () => {
    render(
      <Provider store={globalStore}>
        <MaxTemperature maxTemperature={undefined} />
      </Provider>
    );

    expect(screen.queryByTestId("LocalFireDepartmentIcon")).toBeNull();
  });
});
