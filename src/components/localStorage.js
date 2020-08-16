const local = () => {
  if (localStorage.getItem("level")) {
    return localStorage.getItem("level");
  } else {
    localStorage.setItem("level", "easy");
    return localStorage.getItem("level");
  }
};

export default local;
