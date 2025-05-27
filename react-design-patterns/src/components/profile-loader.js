async function profileLoader({ params }) {
  // * extract the params into the loader function
  const { profileId } = params;

  return new Promise((res) => {
    setTimeout(() => {
      res({
        name: "Criss",
        age: 23,
        id: profileId,
      });
    }, 1000);
  });
}

export default profileLoader;
