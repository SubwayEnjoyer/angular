
export interface Product {
    description: string,
    price: number;

};

const phone: Product = {
    description: 'Nokia',
    price: 150
};

const tablet: Product = {
    description: 'Ipad',
    price: 250
}

export interface TaxCalculationsOption {
    tax:number;
    productos: Product[];
}

const shoppingCart = [phone,tablet];
const tax = 0.15;

export const total: TaxCalculationsOption = {
    tax: tax,
    productos: shoppingCart
}


export const taxCalculation = ({ tax,productos }: TaxCalculationsOption):number[] => {

    let total = 0;
    
    

    productos.forEach( ({ price }) => {
        total += price;
        
    })

    return [total,total * tax];
}


const [result, totalTax] = taxCalculation(total);
console.log(result, totalTax)

