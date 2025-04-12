

export class Product {
    public name: string;
    public price: number;

    constructor(
        name: string,
        price?: number
    ){
        this.name = name || "No tiene nombre";
        this.price = price || 0;
    }
}


const pala: Product = new Product('Pala');
const pala2: Product = new Product('Pala');
const array: Product[] = [pala,pala2];
const [p1,p2,trunks = 'no está'] = array
console.log(trunks);


const { name } = pala;

array.forEach( ({ price }) => {
    console.log(price);
})