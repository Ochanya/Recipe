let searchTerm= document.querySelector("#inputValue");
let button=document.querySelector("#foodButton");
let main = document.querySelector(".container");
button.addEventListener("click", fetchData);
function fetchData(){
  fetch("http://crossorigin.me/http://www.recipepuppy.com/api/?q="+searchTerm.value)
  .then( function(response){
    if(response.status !== 200){
      console.log(response.status);
      return;
    }
      response.json().then(function(reponse){

        response.results.forEach(function(result){
          main.innerHTML+=`
          <div class="recipe-box">
            <img src="${result.thumbnail}" alt="">
            <a href="${result.href}"><h2>${result.title}</h2></a>
          </div>
        `;
      })
    })

  })
}
