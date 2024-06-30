export function isInSession() {
  return document.cookie.includes("JSESSIONID");
}
