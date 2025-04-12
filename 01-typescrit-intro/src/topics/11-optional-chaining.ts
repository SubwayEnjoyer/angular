



export interface Passenger {
    name: string;
    children?: string [];
}


const passenger1: Passenger  = {
    name: 'Miguel'
}

const passenger2: Passenger  = {
    name: 'Teby',
    children: ['pepe','sech']
}



const printChildren = ( passenger: Passenger ):number => {
    const howManyChildren = passenger.children?.length || 0;
    // const howManyChildren = passenger.children!.length; para confirmar a ts que si o si irá un parametro
    const { name }= passenger
    console.log(name, howManyChildren)
    return howManyChildren;
}

printChildren( passenger1 );
