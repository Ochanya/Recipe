let searchTerm= document.querySelector("#inputValue");
let button=document.querySelector("#foodButton");
let main = document.querySelector(".container");
button.addEventListener("click", fetchData);
function fetchData(){
  fetch(`http://www.recipepuppy.com/api/?q=${searchTerm.value}`)
  .then( function(response){
    if(response.status !== 200){
      console.log(response.status);
      return;
    }
    response.json().then(function(data){
      main.innerHTML+=`
      data.results.forEach(results){
        <div class="recipe-box">
          <img src="${results.thumbnail}" alt="">
          <h2>${results.title}</h2>
          <a href="${results.href}"></a>
        </div>
      `;

    })

    })
  }


// create an event listener that takes the input value as an argument and calls the function fetchData.

 // fetchData puts the data in an api format and gets the data.
 // it goes into the results obj in the data and interates through each obj.
 // It takes each obj retrieves the requested data and displays the data through the template.
