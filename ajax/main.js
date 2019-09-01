axios
  .get("http://api.github.com/users/mateusmiguel")
  .then(function(response) {
    console.log(response);
  })
  .catch(function(error) {
    console.warn(error);
  });
