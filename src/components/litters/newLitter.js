const newLitter = {
  id: null,
  name: "",
  start_date: "",
  end_date: "",
  kitten_attributes: [
    {
      id: null,
      name: "",
      dob: "",
      gender: true,
      errors: {},
      _destroy: false
    }
  ]
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newLitter
};
