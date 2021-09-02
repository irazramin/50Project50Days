const counter = document.querySelectorAll(".count");

counter.forEach((count) => {
  count.innerText = "0";

  const updateNumber = () => {
    const target = +count.getAttribute("data-target");
    const c = +count.innerText;

    const increment = target / 200;

    if (c < target) {
      count.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateNumber, 1);
    } else {
      count.innerText = target;
    }
  };
  updateNumber();
});
