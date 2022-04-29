import MinTemperature from "../MinTemperature";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import globalStore from "@store/globalStore";

describe('<MinTemperature />', () => {
  it('should render without crashing', () => {
    render(<Provider store={globalStore} >
      <MinTemperature minTemperature={10} />
    </Provider>);

    expect(screen.queryByTestId('AcUnitIcon')).toBeInTheDocument();
    expect(screen.getByText(`10 ºC`)).toBeInTheDocument();
  });

  it('should not render grid if minTemperature is undefined', () => {
    render(<Provider store={globalStore} >
      <MinTemperature minTemperature={undefined} />
    </Provider>);

    expect(screen.queryByTestId('AcUnitIcon')).not.toBeInTheDocument();
  })
})