

export class Person {
    // public name: string;
    // public address: string;
    
    constructor (public name: string,
                public lastname: string,
                private address?: string) {

        this.name = name;
        this.address = address || 'No address';
    }
}

// export class Hero extends Person {



//     constructor (
//         public aterEgo: string,
//         public age: number,
//         public realName: string


//     ){
//         super(realName, 'New york')
//     }
// }

export class Hero {

    

    constructor (
        public aterEgo: string,
        public age: number,
        public realName: string,
        public person: Person

    ){

    }
}


const person = new Person('Tony','Stark')
const persona: Hero = new Hero('Ironman',45,'Tony',person);

// console.log(name)
console.log(persona)

// const { name, address } = persona;
// console.log(name)
// console.log(address)

