const getUser = () => {
  const userStr = sessionStorage.getItem("user");
  if (userStr) {
    return JSON.parse(userStr);
  } else {
    return null;
  }
};

const getToken = () => sessionStorage.getItem("tokken") || null;

const setUserSession = (tokken, user) => {
  sessionStorage.setItem("tokken", tokken);
  sessionStorage.setItem("user", JSON.stringify(user));
};

const removeUserSession = () => {
  sessionStorage.removeItem("tokken");
  sessionStorage.removeItem("user");
};

const isAuth = () => (sessionStorage.getItem("tokken") !== null ? true : false);

export { getUser, getToken, setUserSession, removeUserSession, isAuth };
