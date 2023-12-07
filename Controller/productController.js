const connection = require("../models/index")
module.exports = {
    addproduct :async (req,res)=>{
       try{
        const {name, price} = req.body;
        const date = "2023-12-7";
        const dbconnection =await connection();
        await dbconnection.execute(`INSERT INTO products (name, price, createdAt, updatedAT)
        VALUES("${name}", ${price}, "${date}", "${date}")  `);

        res.status(201).send("products add successfully")
       }catch(err){
        console.log(err);
        res.status(500).send(err.message || "something went wrong")
       }
    },
    getSingleProduct :async (req,res)=>{
        try{
         let {productId} = req.params;
         productId = Number(productId);
         const dbconnection =await connection();
         const [product] = await dbconnection.execute(`SELECT * from products WHERE id =${productId}`)
        if(product.length === 0){
          return res.status(404).send("product not found")
         }

         res.status(201).send(product)
         }catch(err){
         console.log(err);
         res.status(500).send(err.message || "something went wrong")
        }
    },
    changeProduct :async (req,res)=>{
        try{
            let {productId} = req.params;
            const {name, price} = req.body;
            if(!name || !price){
              return res.status(409).send("Required Fields cannot be empty")  
            }
            productId = Number(productId);
            const updateDate = new Date().toISOString().slice(0,10)
            const dbconnection =await connection();
            const [product] = await dbconnection.execute(`UPDATE products SET name = 
            "${name}",price = ${price},updatedAt = "${updateDate}" WHERE id = ${productId}`);
           if(product.length === 0){
             return res.status(404).send("product not found")
            }
   
            res.status(201).send("product updated successfully")
            }catch(err){
            console.log(err);
            res.status(500).send(err.message || "something went wrong")
           }
    },
    deleteProduct :async (req,res)=>{
        try{
            let {productId} = req.params;

            productId = Number(productId);
            const dbconnection =await connection();
            const [product] = await dbconnection.execute(`DELETE from products where id = ${productId}`);
          
   
            res.status(201).send("product deleted successfully")
            }catch(err){
            console.log(err);
            res.status(500).send(err.message || "something went wrong")
           }
    },
    showProduct :async function(req,res){
      try{
         const dbconnection =await connection();
         const [products] = await dbconnection.execute("SELECT * FROM Products")

         res.status(200).render("product",{products})
        }catch(err){
         console.log(err);
         res.status(500).send(err.message || "something went wrong")
        }
        
    },
    

}