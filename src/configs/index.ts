export const isLocalhost =
  window.location.hostname === "localhost" ||
  window.location.hostname === "localhost:3000";

export const apiURL = isLocalhost
  ? "http://localhost:8080"
  : "https://files.cupscoffee.xyz/api";
