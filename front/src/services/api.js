const host = "http://localhost:8080/api";
const url = (path) => `${host}/${path}`;

export const get = async (path) => {
  // Response 型のデータの Promise を返す
  const resp = await fetch(url(path));
  // json データのみをパースして取得
  const result = await resp.json();

  return result;
};
