const API_ROOT = "https://api.github.com/users/";

export const getUser = async ( username ) => {
  const response = await fetch(`${API_ROOT}${username}`, {
    method: "GET",
  });
  const json = await response.json();

  if (response.ok) {
    return json;
  } else {
    throw new Error(json.errors.message);
  }
}