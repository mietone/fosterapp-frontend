const newLitter = {
  name: "",
  start_date: "",
  end_date: "",
  kittens: []
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newLitter
};
