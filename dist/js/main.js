// Start of the Function to consume the API and render it into the HTML.

let page = 1

function fetchData() {
    fetch(`https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`)
        .then(response => {
            console.log(response)
            if(!response.ok) {
                throw Error('ERROR');
            }
            return response.json();
        }).then(data => {
            console.log(data.products);

            const html = data.products
                .map(product => {
                    return `
                    <div class="products-item">
                        <img src="https:${product.image}" alt="Imagem" class="products-item-img"/>
                        <div class="products-item--info">    
                            <h4>${product.name}</h4>
                            <p id="product-description">${product.description}</p>
                            <p>De: R$${product.oldPrice}</p>
                            <h3>Por: R$${product.price}</h3>
                            <p>ou 2x de R$${parseFloat((product.price) / 2)}</p>
                            <button>Comprar</button>
                        </div>
                    </div>
                    `;

                    //HTML generated inside the div class "products-wraper"
                })
                .join("");

            document.getElementById('products').insertAdjacentHTML('afterbegin', html);
            //.insertAdjacentHTML ratter than .innerHTML to avoid corrupting references
        }).catch(error => {
            console.log(error);
        });
}

fetchData()


// End of the Function to consume the API and render it into the HTML.


function nextPage() {
    btnPage.addEventListener('click', () => {
    page++
    console.log(page)
    fetchData()
    })
}



# Trying to make the button to change the page number

 */ 

