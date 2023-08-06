import data from "./products.json" assert {type: 'json'};

const [bottle1, bottle2, bottle3] = [...data]

// console.log(...data);



// console.log(bottle1)
// console.log(bottle2)
// console.log(bottle3)


// window.show = ()=>{

//     console.log(bottle1);
// }

const { Bottle1: bot1 } = bottle1;
const { Bottle2: bot2 } = bottle2;
const { Bottle3: bot3 } = bottle3;

let productsContainer = document.getElementById('productsContainer');

console.log(bot1)






document.getElementById('bottle1').addEventListener("click", () => {
    console.log(bottle1.Bottle1);
    productsContainer.innerHTML = '';
    bot1.map(el => {
        console.log(el)
        productsContainer.innerHTML += `
        <div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">${el.productName}</div>
        <div class="card-body text-dark">
        <h5 class="card-title">${el.productPrice}</h5>
        <p class="card-text">${el.productDescription}</p>
  </div>
</div>

        
        `;
    });
    // productsContainer.innerHTML += "";




});

document.getElementById('bottle2').addEventListener("click", () => {
    console.log(bottle2);
    productsContainer.innerHTML = '';
    bot2.map(el => {
        console.log(el)
        productsContainer.innerHTML += `
        <div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">${el.productName}</div>
        <div class="card-body text-dark">
        <h5 class="card-title">${el.productPrice}</h5>
        <p class="card-text">${el.productDescription}</p>
  </div>
</div>

        
        `;
});
});

document.getElementById('bottle3').addEventListener("click", () => {
    console.log(bottle3);
    productsContainer.innerHTML ='';
    bot3.map(el => {
        console.log(el)
        productsContainer.innerHTML += `
        <div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-header">${el.productName}</div>
        <div class="card-body text-dark">
        <h5 class="card-title">${el.productPrice}</h5>
        <p class="card-text">${el.productDescription}</p>
  </div>
</div>

        
        `;
});
})