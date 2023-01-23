class ProductManager {
      constructor(products) {
        this.products =[]
      }//1) debe crearse una clase produtmanager que gestione productos desde su constructor con un array vacio
      
      addProducts(newProducto) {
        if (Object.values(newProducto).includes('') || Object.values(newProducto).includes(null)){
           console.log('Todos los campos deben ser completados')
        } else {
            const codigo = this.products.find((prod) => prod.code === newProducto.code)

            if(codigo) {
              console.log('Codigo ' + newProducto.code + ' ya existe')
            } else {
              this.products.push({ ...newProducto, id: this.products.length + 1})
              console.log('Producto agregado')
            }
        }
        
    }//metodo add products, que agregue productos al array producto validando que no este vacio ningun item ni repetido item code

    getProducts() {
      console.log('products: ')
      console.log(this.products)
      return this.products
    }//metodo getproducts que devuelva un array con loc productos arreglados hasta el momento

    getProductByID(id){
      let found = this.products.find((prod) => prod.id === id)
      if (found) {
        console.log(found) 
        return found
      }else {
        console.log('Not found')
      }
    }// debe contar con metodo getproductbyid que busque que el id cohincida con el producto
} 

class producto {
    constructor(title, description, price, thumbnail, code, stock){
        this.title = title
        this.description = description
        this.price = price
        this.thumbnail = thumbnail
        this.code = code
        this. stock = stock
    }
 }//cada producto que gestione debe contar con las siguientes propiedades

 // Pruebas
// - Crear instancia de ProductManager
const prodMan = new ProductManager()
// - Se llama al método getProduct() 
prodMan.getProducts() // devuelve []

// - Se crea un producto para agregar a la instancia prodMan
const testProduct = new producto("producto ejemplo", "Este es un producto ejemplo", 200, "Sin imagen", "abc123", 25);
prodMan.addProducts(testProduct)
// - Se llama al método getProduct() que deverá devolver el producto recien agregado con id sin repetirse
prodMan.getProducts() // devuelve testProduct
// - Se llama de nuevo a addProduct() con los mismos campos, debe arrojar error por code repetido
const testProduct2 = new producto("producto ejemplo", "Este es un producto ejemplo", 200, "Sin imagen", "abc123", 25);
prodMan.addProducts(testProduct2)
// - Se llama a getProductById() con un ID existente y otro no
prodMan.getProductByID(1)
prodMan.getProductByID(2)