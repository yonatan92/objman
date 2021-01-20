const keySort = (obj) => {
  const sortObj = Object.keys(obj)
    .sort()
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: obj[key],
      }),
      {}
    );

  return sortObj;
};

keySort({ b: 1, a: 2 });
