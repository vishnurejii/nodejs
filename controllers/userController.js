const createUser = (req, res) => {
  res.send("This is post request of user router");
};

const getUsers = (req, res) => {
  res.send("This is get request of user router");
};

export { getUsers, createUser };