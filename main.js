class Productmanager {
    constructor() {
        this.products = [];
    }

    static id = 0

    addProduct(title, description, price, image, code, stock) {
        for (let i = 0; i < this.products.length; i++) {
            if (this.products[i].code === code) {
                console.log("El codigo ${code} esta repetido");
                break
            }
        }

        const newProduct = { title, description, price, image, code, stock, }

        if (!Object.values(newProduct).includes(undefined)) {
            Productmanager.id++
            this.products.push({ ...newProduct,
                
                id: Productmanager.id });
        }else {
            console.log("Todos los campos son requeridos")
        }


    }

    getProduct() {
        return this.products;
    }

    existe(id) {
        return this.products.find((producto) => producto.id === id)
    }

    getProductById(id) {
        !this.existe(id) ? console.log("Not Found") : console.log(this.existe(id));

    }
}

const productos = new Productmanager();

console.log(productos.getProduct());


productos.addProduct("Pañales Dia", "Pack de pañales para adulto absorventes de uso diario", 12000, "imagen1", "pa0355", 30);
productos.addProduct("Pañales Noche", "Pack de pañales para adulto ultraabsorventes de uso nocturno", 14000, "imagen2", "pa0356", 30);
productos.addProduct("Jabon Hipoalergenico", "Jabon liquido de afrecho humectante", 3000, "imagen3", "ja0357", 10);
productos.addProduct("Neceser", "Bolso Pequeño multiuso con cierre metalico", 2500, "imagen4", "ne0358", 15);

console.log(productos.getProduct());


productos.getProductById(4);

productos.getProductById(5);