function fetchData() {
    fetch('https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=1')
        .then(response => {
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
                        <img src="https:${product.image}" alt="Imagem" class="img"/>
                        <h3>${product.name}</h3>
                        <p>De: ${product.oldPrice}</p>
                        <p>Por: ${product.price}</p>
                    </div>
                    `;
                })
                .join("");

            console.log(html)
            document.querySelector('#app').insertAdjacentHTML('afterbegin', html);
        }).catch(error => {
            console.log(error);
        });

}

fetchData()