import { ForecastDayDTO } from "@dtos/city";

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined;
      details: {
        forecast: ForecastDayDTO
      };
    }
  }
}