module.exports = {
  findUserIdById: (array, id) => {
    return array.findIndex((element) => element.id === id);
  },
};
