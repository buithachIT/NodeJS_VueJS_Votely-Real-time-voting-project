export const apiPath = pathname => {
  const base = process.env.VUE_APP_API_URL;
  return `${base}${pathname}`;
};
