import { Deta } from "detajs-sm";

export interface LogDataProps {
  key: string;
  date_time: number;
  error: string;
  is_error: boolean;
  ms: number;
  response: {
    code: number;
    status: string;
  };
  type: string;
  url: string;
}

const deta = Deta();

export const getDB = (type: string) => deta.Base<LogDataProps>(type);
