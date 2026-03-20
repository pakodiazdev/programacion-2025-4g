const readline = require("./readline");
(async () => {
  console.log("¿Cuál es tu nombre? ");
  const nombre = await readline();
  console.log(`Hola ${nombre}`);
  
})();