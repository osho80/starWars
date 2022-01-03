export const setCookie = (
  cName: string,
  cValue: string | number,
  expDays: number
) => {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = cName + "=" + cValue + "; " + expires;
};

export const getCookieValues = () => {
  const cookieDecoded = decodeURIComponent(document.cookie);
  const { popularVehicleLastUpdate } = Object.fromEntries(
    cookieDecoded.split("; ").map((val) => val.split("="))
  );
  return { popularVehicleLastUpdate };
};
