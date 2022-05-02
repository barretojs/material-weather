import useOpenWeather from "@hooks/useOpenWeather";
import { renderHook } from "@testing-library/react";
import API from "../../Axios";
import {
  iconMock,
  mockCurrentWeather,
  mockErrorPosition,
  mockForecasts,
  mockLocations,
} from "../__mocks__/useOpenWeather.mocks";

describe("useOpenWeather()", () => {
  it("should return the functions accordingly", () => {
    const { result } = renderHook(() => useOpenWeather());

    expect(result.current.getCurrentWeather).toBeDefined();
    expect(result.current.getForecast).toBeDefined();
    expect(result.current.searchLocation).toBeDefined();
    expect(result.current.getIcon).toBeDefined();
  });

  describe("getIcon()", () => {
    it("should return a string given the icon id", () => {
      const { result } = renderHook(() => useOpenWeather());

      expect(result.current.getIcon("801")).toEqual(iconMock);
    });

    it("should return undefined if icon id is undefined", () => {
      const { result } = renderHook(() => useOpenWeather());

      expect(result.current.getIcon(undefined)).toBeUndefined();
    });
  });

  describe("searchLocation()", () => {
    it("should return an array of locations given a proper query string", async () => {
      const query = "São José do Rio Preto";

      API.get = jest
        .fn()
        .mockImplementation(() => Promise.resolve({ data: mockLocations }));

      const { result } = renderHook(() => useOpenWeather());

      const response = await result.current.searchLocation(query);

      expect(response).toEqual(mockLocations);
    });

    it("should return error if query is undefined", async () => {
      API.get = jest
        .fn()
        .mockImplementation(() => Promise.resolve({ data: mockErrorPosition }));

      const { result } = renderHook(() => useOpenWeather());

      const response = await result.current.searchLocation(undefined);

      expect(response).toEqual(mockErrorPosition);
    });
  });

  describe("getForecast()", () => {
    it("should return ForecastRequest given proper parameters", async () => {
      const lat = -20.8125851;
      const lon = -49.3804212;
      const units = "metric";

      API.get = jest
        .fn()
        .mockImplementation(() =>
          Promise.resolve({ data: mockCurrentWeather })
        );

      const { result } = renderHook(() => useOpenWeather());

      const response = await result.current.getCurrentWeather(lat, lon, units);

      expect(response).toEqual(mockCurrentWeather);
    });
  });

  describe("getCurrentWeather()", () => {
    it("should return WeatherRequest given proper parameters", async () => {
      const lat = -20.8125851;
      const lon = -49.3804212;
      const units = "metric";

      API.get = jest
        .fn()
        .mockImplementation(() => Promise.resolve({ data: mockForecasts }));

      const { result } = renderHook(() => useOpenWeather());

      const response = await result.current.getForecast(lat, lon, units);

      expect(response).toEqual(mockForecasts);
    });
  });
});
