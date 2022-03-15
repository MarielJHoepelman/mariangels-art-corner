import { getPayload } from "./util/getPayload";
import { getBackendUrl } from "./util/getBackendUrl";

export const asyncFetcher = async (pageName, method, body) => {
  const payload = getPayload(method, body);

  try {
    const result = await fetch(`${getBackendUrl()}${pageName}`, payload);
    const json = await result.json();
    return json;
  } catch (e) {
    console.log(e);
  }
}