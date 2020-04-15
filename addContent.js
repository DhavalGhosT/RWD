window.onload = () => {
  document.getElementById("minus").addEventListener("click", removeElement);
  document.getElementById("plus").addEventListener("click", addElement);
};
let i = 6;

addElement = () => {
  console.log("Called");
  let parent = document.getElementById("content");
  let newElement = document.createElement("div");
  newElement.setAttribute("class", "prod");
  newElement.textContent = `${i}`;
  i++;
  parent.appendChild(newElement);
};

removeElement = () => {
  console.log("MINUS");
  let parent = document.getElementById("content");
  let lastElement = parent.lastElementChild;
  console.log(lastElement);
  lastElement.remove();
  i--;
};
