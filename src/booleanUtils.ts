export const haveNumbers = (txt: string): boolean => {
  return txt.split("").some((char) => char >= "0" && char <= "9");
};
export const haveStringss = (txt: string): boolean => {
  return txt.split("").some((char) => !(char >= "0" && char <= "9"));
};
