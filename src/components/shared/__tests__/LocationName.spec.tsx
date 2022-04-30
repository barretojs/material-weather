import Position from "@interfaces/Position";
import { render, screen } from "@testing-library/react";
import LocationName from "../LocationName";

const positionMock: Position = {
  country: "Brazil",
  state: "São Paulo",
  name: "Ilha Solteira",
  lat: 0,
  lon: 0,
};

describe("<LocationName />", () => {
  it("should render without crashing", () => {
    render(<LocationName position={positionMock} />);

    expect(
      screen.getByText(
        `${positionMock?.name}, ${positionMock?.state} - ${positionMock?.country}`
      )
    ).toBeInTheDocument();
  });

  it("should not render text if position is null", () => {
    render(<LocationName position={null} />);

    expect(
      screen.queryByText(
        `${positionMock?.name}, ${positionMock?.state} - ${positionMock?.country}`
      )
    ).toBeNull();
  });
});
