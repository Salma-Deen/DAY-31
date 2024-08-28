1.Find all the information about each products.

QUERY:
 db.Products.find();

OUTPUT:
All products will be displayed with unique _id.
-----------------------------------------------------------------------------------------------------------------------------------
2. Find the product price which are between 400 to 800

QUERY:
 db.Products.find({ product_price: { $gte: 400, $lte: 800 } })
        (or)     
 db.Products.find({ $and: [{ product_price: { $gte: 400 } }, { product_price: { $lte: 800 } }] });

OUTPUT:
[
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899dc'),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899de'),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899df'),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899e1'),
    id: '6',
    product_name: 'Awesome Wooden Towels',
    product_price: 474,
    product_material: 'Plastic',
    product_color: 'orange'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899e2'),
    id: '7',
    product_name: 'Practical Soft Shoes',
    product_price: 500,
    product_material: 'Rubber',
    product_color: 'pink'
  }
]

------------------------------------------------------------------------------------------------------------------------------------------

3. Find the product price which are not between 400 to 600

QUERY:
 db.Products.find({ product_price: { $not: { $gte: 600, $lte: 400 } } })

OUTPUT:
All Data is Displayed except id:{4,6,7} 

------------------------------------------------------------------------------------------------------------------------------------------------

4. List the four product which are greater than 500 in price 
 
QUERY:
 db.Products.find({ product_price: { $gt: 500 } }).limit(4)

OUTPUT: [There are only 3 products where the product_price is greater than 500]
[
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899dc'),
    id: '1',
    product_name: 'Intelligent Fresh Chips',
    product_price: 655,
    product_material: 'Concrete',
    product_color: 'mint green'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899dd'),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899de'),
    id: '3',
    product_name: 'Refined Steel Car',
    product_price: 690,
    product_material: 'Rubber',
    product_color: 'gold'
  }
]
------------------------------------------------------------------------------------------------------------------------------------------------
5.Find the product name and product material of each products

QUERY:
 db.Products.find({},{product_name:1,product_material:1});

OUTPUT:
[
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899dc'),
    product_name: 'Intelligent Fresh Chips',
    product_material: 'Concrete'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899dd'),
    product_name: 'Practical Fresh Sausages',
    product_material: 'Cotton'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899de'),
    product_name: 'Refined Steel Car',
    product_material: 'Rubber'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899df'),
    product_name: 'Gorgeous Plastic Pants',
    product_material: 'Soft'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899e0'),
    product_name: 'Sleek Cotton Chair',
    product_material: 'Fresh'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899e1'),
    product_name: 'Awesome Wooden Towels',
    product_material: 'Plastic'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899e2'),
    product_name: 'Practical Soft Shoes',
    product_material: 'Rubber'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899e3'),
    product_name: 'Incredible Steel Hat',
    product_material: 'Rubber'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899e4'),
    product_name: 'Awesome Wooden Ball',
    product_material: 'Soft'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899e5'),
    product_name: 'Generic Wooden Pizza',
    product_material: 'Frozen'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899e6'),
    product_name: 'Unbranded Wooden Cheese',
    product_material: 'Soft'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899e7'),
    product_name: 'Unbranded Plastic Salad',
    product_material: 'Wooden'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899e8'),
    product_name: 'Gorgeous Cotton Keyboard',
    product_material: 'Concrete'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899e9'),
    product_name: 'Incredible Steel Shirt',
    product_material: 'Metal'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899ea'),
    product_name: 'Ergonomic Cotton Hat',
    product_material: 'Rubber'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899eb'),
    product_name: 'Small Soft Chair',
    product_material: 'Cotton'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899ec'),
    product_name: 'Incredible Metal Car',
    product_material: 'Fresh'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899ed'),
    product_name: 'Licensed Plastic Bacon',
    product_material: 'Steel'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899ee'),
    product_name: 'Intelligent Cotton Chips',
    product_material: 'Soft'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899ef'),
    product_name: 'Handcrafted Wooden Bacon',
    product_material: 'Concrete'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899f0'),
    product_name: 'Unbranded Granite Chicken',
    product_material: 'Metal'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899f1'),
    product_name: 'Ergonomic Soft Hat',
    product_material: 'Rubber'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899f2'),
    product_name: 'Intelligent Steel Pizza',
    product_material: 'Cotton'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899f3'),
    product_name: 'Tasty Rubber Cheese',
    product_material: 'Frozen'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899f4'),
    product_name: 'Licensed Steel Car',
    product_material: 'Cotton'
  }
]

------------------------------------------------------------------------------------------------------------------------------------------------

6. Find the product with a row id of 10

QUERY:
 db.Products.findOne({ id: "10" });

OUTPUT:
{
 _id: ObjectId('66cb4794ba3c74a5dc4899e5'),
 id: '10',
 product_name: 'Generic Wooden Pizza',
 product_price: 84,
 product_material: 'Frozen',
 product_color: 'indigo'
}

--------------------------------------------------------------------------------------------------------------------------------------------------
7. Find only the product name and product material

QUERY:
 db.Products.find({}, { product_name: 1, product_material: 1, _id: 0 });

OUTPUT:
[
  {
    product_name: 'Intelligent Fresh Chips',
    product_material: 'Concrete'
  },
  {
    product_name: 'Practical Fresh Sausages',
    product_material: 'Cotton'
  },
  { product_name: 'Refined Steel Car', product_material: 'Rubber' },
  { product_name: 'Gorgeous Plastic Pants', product_material: 'Soft' },
  { product_name: 'Sleek Cotton Chair', product_material: 'Fresh' },
  {
    product_name: 'Awesome Wooden Towels',
    product_material: 'Plastic'
  },
  { product_name: 'Practical Soft Shoes', product_material: 'Rubber' },
  { product_name: 'Incredible Steel Hat', product_material: 'Rubber' },
  { product_name: 'Awesome Wooden Ball', product_material: 'Soft' },
  { product_name: 'Generic Wooden Pizza', product_material: 'Frozen' },
  { product_name: 'Unbranded Wooden Cheese', product_material: 'Soft' },
  {
    product_name: 'Unbranded Plastic Salad',
    product_material: 'Wooden'
  },
  {
    product_name: 'Gorgeous Cotton Keyboard',
    product_material: 'Concrete'
  },
  { product_name: 'Incredible Steel Shirt', product_material: 'Metal' },
  { product_name: 'Ergonomic Cotton Hat', product_material: 'Rubber' },
  { product_name: 'Small Soft Chair', product_material: 'Cotton' },
  { product_name: 'Incredible Metal Car', product_material: 'Fresh' },
  { product_name: 'Licensed Plastic Bacon', product_material: 'Steel' },
  {
    product_name: 'Intelligent Cotton Chips',
    product_material: 'Soft'
  },
  {
    product_name: 'Handcrafted Wooden Bacon',
    product_material: 'Concrete'
  }
]

 -----------------------------------------------------------------------------------------------------------------------------------------

8. Find all products which contain the value of soft in product material 

QUERY:
 db.Products.find({ "product_material":{$regex:/soft/i} });

OUTPUT:
[
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899df'),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899e6'),
    id: '11',
    product_name: 'Unbranded Wooden Cheese',
    product_price: 26,
    product_material: 'Soft',
    product_color: 'black'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899ee'),
    id: '19',
    product_name: 'Intelligent Cotton Chips',
    product_price: 46,
    product_material: 'Soft',
    product_color: 'azure'
  }
]

-----------------------------------------------------------------------------------------------------------------------------------

        
9. Find products which contain product color indigo  and product price 492.00

db.products.find({ $and: [ {"product_color": "indigo" }, {"product_price" :492.00 } ] })
Using $and operator returns empty command
But using $or operator gives the output.

QUERY:
 db.Products.find({$or:[{ product_color: "indigo" }, { product_price: 492.00 }]})

OUTPUT:
[
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899dd'),
    id: '2',
    product_name: 'Practical Fresh Sausages',
    product_price: 911,
    product_material: 'Cotton',
    product_color: 'indigo'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899df'),
    id: '4',
    product_name: 'Gorgeous Plastic Pants',
    product_price: 492,
    product_material: 'Soft',
    product_color: 'plum'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899e5'),
    id: '10',
    product_name: 'Generic Wooden Pizza',
    product_price: 84,
    product_material: 'Frozen',
    product_color: 'indigo'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899ec'),
    id: '17',
    product_name: 'Incredible Metal Car',
    product_price: 36,
    product_material: 'Fresh',
    product_color: 'indigo'
  },
  {
    _id: ObjectId('66cb4794ba3c74a5dc4899f4'),
    id: '25',
    product_name: 'Licensed Steel Car',
    product_price: 20,
    product_material: 'Cotton',
    product_color: 'indigo'
  }
]
--------------------------------------------------------------------------------------------------------------------------------------

10. Delete the products which product price value are 28

QUERY:
 db.Products.deleteOne({product_price:28})

OUTPUT:
{ acknowledged: true, deletedCount: 0 }

------------------------------------------------------------------------------------------------------------------------------------------
