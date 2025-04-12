



function addNumbers(a: number, b: number):number {
    
    return a+b;
}



const addNumbersArrow = (a: number , b: number): string => {
    return `${a + b}`;
}



function multiply(firsNumber: number, secondNumber?: number, base: number = 2) {
    return firsNumber * base;
}

// const result: number = addNumbers(1,2)
// const result2: string = addNumbersArrow(3,4);
// const multiplyResult: number = multiply(5);
// console.log({ result, result2, multiplyResult })

interface Character {
    name: string;
    hp: number;
    showHp: () => void;
}

const healCharacter = ( character: Character, amount: number ) => {

    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp () {
        console.log(`Puntos de vida: ${this.hp}`);
    }
}

strider.showHp();

healCharacter(strider, 50);

console.log(strider.hp);






export {};