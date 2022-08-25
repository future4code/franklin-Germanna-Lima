## Exercício 1
A)RowDataPacket {
  id: '001',
  name: 'Tony Ramos',
  salary: 4000000,
  birth_date: 1948-08-25T03:00:00.000Z,
  gender: 'male',
  favorite_ice_cream_flavor: null,
  type: 'NotDirector'
}

B)
const getActorById =async (id:string) : Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE id = '${id}'
    `)
    return result [0][0]
    
}

const searchActor =async (name:string) : Promise<any> => {
    const result = await connection.raw(`
        SELECT * FROM Actor WHERE name = '${name}'
    `)
    return result
    
}

C)
## Exercício 2
A)
B)
C)
## Exercício 3
A)
B)
## Exercício 4
A)
B)
C)