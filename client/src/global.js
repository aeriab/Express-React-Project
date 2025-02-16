export let globalState = { username: "", isLoggedIn: false };

export function updateGlobalState(name, status) {
  globalState.username = name;
  globalState.isLoggedIn = status;
  console.log("update global was called");
}