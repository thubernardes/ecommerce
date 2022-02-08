import React from 'react'
import { Grid } from '@material-ui/core';

import Product from './Product/Product';
import useStyles from './styles';

const products = [
  { id: 1, name: 'Caneca', description: 'A caneca mais desejada dos mundos dos escritórios. A épica World s best boss, by Michael Scott.', price: 'R$ 30,00', image: 'https://cdn.shopify.com/s/files/1/0250/1217/4900/products/51jrlzzst2l._sl1000__1_720x.jpg?v=1632834772'},
  { id: 2, name: 'Moletom', description: 'Moletom da maior empresa de papéis que você conhece, a grandiosa Dunder Mifflin Inc.', price: 'R$ 90,00', image: 'https://cdn.shopify.com/s/files/1/0250/1217/4900/products/OFC-DM-W-100002-NAVY-MF_720x.png?v=1615924359'},
  { id: 3, name: 'Camiseta', description: 'Camiseta do PicNic mais divertido que você já viu. Faça parte do time de Scraton e tenha orgulho.', price: 'R$ 60,00', image: 'https://cdn.shopify.com/s/files/1/0250/1217/4900/products/mens_scranton_tshirt_mockup_front_flat_red_720x.jpg?v=1572164333'},
  { id: 4, name: 'Quadro', description: 'Tenha como decoração a arte da recepcionista mais talentosa e engraçada da séria, a Pam Beesley.', price: 'R$ 25,00', image: 'https://cdn.shopify.com/s/files/1/0250/1217/4900/products/untitled-1_8_1_720x.jpg?v=1572164329'},
  { id: 5, name: 'Boneco', description: 'A decoração do personagem mais cômico e sem noção do escritório. Dwight Schrute.', price: 'R$ 15,00', image: 'https://cdn.shopify.com/s/files/1/0250/1217/4900/products/DwightBobblehead_720x.jpg?v=1634842243'},
  { id: 6, name: 'Bandeira', description: 'A bandeira que dignifica sua casa. Mostre sua imponencia assim como a Fazendo Schrute.', price: 'R$ 15,00', image: 'https://cdn.shopify.com/s/files/1/0250/1217/4900/products/u111sc119_schrutefarms_ro_720x.jpg?v=1572164333'},
  { id: 7, name: 'Garrafa', description: 'Para você que curte levar o seu próprio energizante no bolso, como a Meredith.', price: 'R$ 50,00', image: 'https://cdn.shopify.com/s/files/1/0250/1217/4900/products/51orslcitvl._sl1000_720x.jpg?v=1572164235'},
  { id: 8, name: 'DVD', description: 'Como assim você nunca assistiu? Volte no tempo e assista a primeira temporada com estilo em DVD.', price: 'R$ 5,00', image: 'https://cdn.shopify.com/s/files/1/0250/1217/4900/products/the_office_season_1_dvd_720x.jpg?v=1572164334'},
  
];

const Products = () => { 
    const classes = useStyles ();

    return (
        <main className={classes.content}>
          <div className={classes.toolbar}/>
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
