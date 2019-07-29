import { handleResponse, handleError } from "./apiUtils";

const baseUrl = "http://localhost:3001/api/v1/kittens/";

export function getAllKittens() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveKitten(kitten) {
  return fetch(baseUrl + (kitten.id || ""), {
    method: kitten.id ? "PUT" : "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(kitten)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteKitten(kittenId) {
  return fetch(baseUrl + kittenId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
