import { useCookies } from "react-cookie";

export function isInSession() {
  const [cookies] = useCookies(["JSESSIONID"]);
  return cookies.JSESSIONID !== undefined;
}
