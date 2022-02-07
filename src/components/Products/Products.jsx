import React from 'react'
import { Grid } from '@material-ui/core';

import Product from './Product/Product';

const products = [
  { id: 1, name: 'Caneca', description: 'A caneca mais desejada dos mundos dos escritórios. A épica World s best boss, by Michael Scott.', price: 'R$ 30,00', image: 'https://cdn.shopify.com/s/files/1/0250/1217/4900/products/51jrlzzst2l._sl1000__1_720x.jpg?v=1632834772'},
  { id: 2, name: 'Moletom', description: 'Moletom da maior empresa de papéis que você conhece, a grandiosa Dunder Mifflin Inc.', price: 'R$ 90,00', image: 'https://cdn.shopify.com/s/files/1/0250/1217/4900/products/OFC-DM-W-100002-NAVY-MF_720x.png?v=1615924359'},
  { id: 3, name: 'Camiseta', description: 'Camiseta do PicNic mais divertido que você já viu. Faça parte do time de Scraton e tenha orgulho.', price: 'R$ 60,00', image: 'https://cdn.shopify.com/s/files/1/0250/1217/4900/products/mens_scranton_tshirt_mockup_front_flat_red_720x.jpg?v=1572164333'},
  { id: 4, name: 'Quadro', description: 'Tenha como decoração a arte da recepcionista mais talentosa e engraçada da séria, a Pam Beesley.', price: 'R$ 25,00', image: 'https://cdn.shopify.com/s/files/1/0250/1217/4900/products/untitled-1_8_1_720x.jpg?v=1572164329'},
  { id: 5, name: 'Tênis', description: 'Tênis de corrida.', price: 'R$ 10,00', image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F03%2Fbest-running-shoes-sneakers-women-nike-react-infinity-run-flyknit-2-adidas-ultraboost-21-hoka-bondi-7-asics-gel-contend-tw.jpg?w=960&cbr=1&q=90&fit=max'},
  { id: 6, name: 'MacBook', description: 'Apple MacBook.', price: 'R$ 5,00', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HA244?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1631831826000'},
  { id: 7, name: 'Tênis', description: 'Tênis de corrida.', price: 'R$ 10,00', image: 'https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fwp-content%2Fblogs.dir%2F6%2Ffiles%2F2021%2F03%2Fbest-running-shoes-sneakers-women-nike-react-infinity-run-flyknit-2-adidas-ultraboost-21-hoka-bondi-7-asics-gel-contend-tw.jpg?w=960&cbr=1&q=90&fit=max'},
  { id: 8, name: 'MacBook', description: 'Apple MacBook.', price: 'R$ 5,00', image: 'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/HA244?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1631831826000'},
  
];

const Products = () => { 
    return (
        <main>
        <Grid container justify="center" spacing={4}>
        {products.map((product) => (
          <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
    );
}

export default Products;
