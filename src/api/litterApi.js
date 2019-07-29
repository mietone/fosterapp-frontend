import { handleResponse, handleError } from "./apiUtils";

const baseUrl = "http://localhost:3001/api/v1/litters/";

export function getAllLitters() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function saveLitter(litter) {
  return fetch(baseUrl + (litter.id || ""), {
    method: litter.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
    headers: { "content-type": "application/json" },
    body: JSON.stringify(litter)
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteLitter(litterId) {
  return fetch(baseUrl + litterId, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
