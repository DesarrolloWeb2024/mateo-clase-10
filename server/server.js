const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());


app.get('/api/products', (req, res) => {
  const products = [
    { 
      id: 1, 
      name: 'iPhone 15', 
      oldPrice: 37500, 
      price: 35000, 
      urlImg: 'https://diunsa.vtexassets.com/arquivos/ids/246987-1200-949?v=638621879702300000&width=1200&height=949&aspect=true'
    },
    {
      id: 2, 
      name: 'MacOs',  
      oldPrice: 11500, 
      price: 11200, 
      urlImg: 'https://i.blogs.es/f663fb/mac-sierra-homescreen/450_1000.jpg' 
    },
    { 
      id: 3, 
      name: 'Samsung S24 Ultra',  
      oldPrice: 18500, 
      price: 18000, 
      urlImg: 'https://dcdn.mitiendanube.com/stores/001/555/911/products/s24-ultra-gris-fa87a0fdb450fa63ac17148689933448-1024-1024.jpg' 
    },
    { 
      id: 3, 
      name: 'Laptop Windows',  
      oldPrice: 3500, 
      price: 2200, 
      urlImg: 'https://hyundaitechnology.com.mx/web/image/product.image/2495/image_1024/Laptop%20Hyundai%20Thinnote-A%2C%2014.1%E2%80%9D%20Intel%20Celeron%2C%204GB%20RAM%2C%2064GB%20HDD%2C%20Windows%2010%20Home%20S%20Mode%20-%20Gris?unique=ec4ea93' 
    },
    
    
  ];

  res.json(products);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});