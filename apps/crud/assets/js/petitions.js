export async function getAllUsers() {
  const resp = await fetch("/api/getUsers.php");
  const json = await resp.json();

  return json;
}