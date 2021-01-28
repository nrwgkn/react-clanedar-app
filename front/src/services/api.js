const host = "http://localhost:8080/api";
const url = (path) => `${host}/${path}`;

const header = {
  headers: {
    "Content-Type": "application/json",
  },
};

// GET
export const get = async (path) => {
  // Response 型のデータの Promise を返す
  const resp = await fetch(url(path));
  // json データのみをパースして取得
  const result = await resp.json();

  return result;
};

// POST
export const post = async (path, body) => {
  // 送りたいデータを受け取ってそれを json に変換
  // header を設定し json で送っているということをサーバーに通知
  const options = { ...header, method: "POST", body: JSON.stringify(body) };

  const resp = await fetch(url(path), options);

  const result = await resp.json();

  return result;
};

// DELETE
export const deleteRequest = async (path) => {
  const options = { method: "DELETE" };

  await fetch(url(path), options);

  // 204 No Content が返ってくるので成功の場合は何も return しない
  return;
};
