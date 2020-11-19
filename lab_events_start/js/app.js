document.addEventListener('DOMContentLoaded', () => {
   const form = document.querySelector("#new-item-form");
   form.addEventListener("submit", handleFormSubmit);
})

const handleFormSubmit = function (event){
  event.preventDefault()
  const resultParagraph = document.querySelector('#reading-list');
  const li = document.createElement("li")
  li.classList.add('h1')
  const h1 = document.createElement("h1")
  const h2 = document.createElement("h2")
  li.textContent = (`${event.target.title.value}`);
  h1.textContent = (`${event.target.author.value}`);
  h2.textContent = (`${event.target.category.value}`);
  li.appendChild(h1)
  li.appendChild(h2)
  resultParagraph.appendChild(li)
  document.querySelector("#new-item-form").reset();
  ;

}

