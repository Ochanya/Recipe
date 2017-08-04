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
       console.log(reponse.results);

        reponse.results.forEach(function(result){
          main.innerHTML+=`

          <div class="recipe-box">

            <a href="${result.href}"><img src="${result.thumbnail}" alt="picture of food item"></a>
            <div>
            <h2>${result.title}</h2>
            </div>

          </div>
          <div>
          <h2>${result.title}</h2>
          </div>
        `;

        console.log(main.innerHTML);
      })
      ////>>>>AGAB

      // var dv1=document.createElement('div');
      // document.body.appendChild(dv1);
      // dv1.style.border='1px dotted';
      //

      //////>>>>>>AGAB END



    })

  })
}
