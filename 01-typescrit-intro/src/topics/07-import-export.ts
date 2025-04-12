import {Product, taxCalculation, TaxCalculationsOption} from './06-function-destructuring'

const shoppingCart: Product[] = [
    {
        description: 'nokia',
        price: 100
    },
    {
        description: 'ipad',
        price: 150
    }
];

const total: TaxCalculationsOption = {
    tax: 0.15,
    productos: shoppingCart

}

const [result, totalTax] = taxCalculation(total)

console.log(result)
console.log(totalTax)


export{};


