import { fireEvent, render, screen } from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
import globalStore from "@store/globalStore";
import FABMenu from "../FABMenu";
import { State } from "@interfaces/State";

describe("<FABMenu />", () => {
  it("should render without breaking", () => {
    render(
      <Provider store={globalStore}>
        <FABMenu />
      </Provider>
    );

    expect(screen.getByTestId("ThermostatIcon")).toBeInTheDocument();
  });

  it("should open popover onClick, dismiss on selecting unit and change state accordingly", () => {
    render(
      <Provider store={globalStore}>
        <FABMenu />
      </Provider>
    );

    fireEvent(
      screen.getByRole("button"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByText("Fahrenheit (ºF)")).toBeVisible();

    fireEvent(
      screen.getByText("Fahrenheit (ºF)"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.queryByText("Fahrenheit (ºF)")).not.toBeVisible();

    const unit = globalStore.getState().unitReducer.unit;

    expect(unit.type).toEqual("imperial");
  });
});
