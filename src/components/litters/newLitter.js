const newLitter = {
  id: null,
  name: "",
  start_date: "",
  end_date: "",
  kittens: [
    {
      id: null,
      name: "",
      dob: "",
      image: "",
      gender: true,
      litter_id: "",
      user_id: "",
      errors: {},
      _destroy: false
    }
  ]
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newLitter
};
