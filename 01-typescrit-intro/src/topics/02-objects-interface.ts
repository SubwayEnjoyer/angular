
const skills: string[] = ['Bash', 'Counter', 'Healing'];



interface Character {
    name: string,
    hpPoints: number,
    skills: string[],
    hometown?: string
}

// para hacer una variable opcional en un proyecto se usa el ? como en hometown

const strider: Character = {
    name: 'Strider',
    hpPoints: 100,
    skills: ['Bash','Counter']
}

strider.hometown = 'Rivendell';
console.table(strider)

export {};