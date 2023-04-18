const fetchData = async (searchTerm) => {
  const response = await axios.get("http://www.omdbapi.com/", {
    params: {
      apikey: "6fb65d2f",
      s: searchTerm,
    },
  });

  console.log(response.data);
};

const input = document.querySelector("input");

const debounce = (func, delay = 1000) => {
  let timeoutId;

  return (...arg) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    setTimeout(() => {
      func.apply(null, arg);
    }, delay);
  };
};

const onInput = (event) => {
  fetchData(event.target.value);
};

input.addEventListener("input", debounce(onInput, 500));
