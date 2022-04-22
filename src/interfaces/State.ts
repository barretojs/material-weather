import { Daily, Hourly } from "./Forecast";
import Position from "./Position";
import Unit from "./Unit";
import Weather from "./Weather";

type PositionState = { position: null } | { position: Position };
type WeatherState =
  | {
    weather: {
      id: null;
      current: null;
    };
    forecast: { hourly: null; daily: null; id: null };
  }
  | {
    weather: {
      id: string;
      current: Weather;
    };
    forecast: { hourly: Hourly[]; daily: Daily[]; id: string };
  };
type UnitState = {
  unit: Unit;
};
type ErrorState = {
  error: {
    message: string | null;
  }
}

type State = {
  weatherReducer: WeatherState;
  positionReducer: PositionState;
  unitReducer: UnitState;
  errorReducer: ErrorState;
};

export type { State, PositionState, WeatherState, UnitState, ErrorState };
