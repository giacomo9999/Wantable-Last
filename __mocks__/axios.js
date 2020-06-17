module.exports = {
  get: () => {
    return Promise.resolve({
      data: {
        results: {
          artistmatches: { artist: ["Bob Marley", "Bob Dylan", "Bob Nastanovich"] },
        },
      },
    });
  },
};
