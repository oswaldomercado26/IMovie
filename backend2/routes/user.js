module.exports = app => {
    const users = require("../controllers/customer.controller.js");
    // Recibe todos los users all Customers
    app.get("/users", users.findAll);
    
    // Recibimos un producto desde Producto con productId
    app.get("/users/:productId", users.findOne);
    };