function soma(a: number, b: number) {
  return a + b;  
}
//interfaces => contrato para implementar as suas classes

interface IAnimal {
  nome: string;
  tipo: 'terrestre' | 'aquático';
  domestico: boolean;
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean;  
}

interface ICanino extends IAnimal {
  porte: 'pequeno' | 'médio'| 'grande'
}

const animal: IAnimal = {
  nome: 'Elefante',
  tipo: "terrestre", 
  domestico: false,
}

const felino: IFelino = {
  nome: 'Leão',
  tipo: "terrestre",
  domestico: false,
  visaoNoturna: true,  
}

// types => estrutura de dados para parâmentros de classe ou função. Possibilita 
// usar mais de uma interface
type iDomestico = IFelino | ICanino;

const animalDomestico: iDomestico = {
  domestico: true,
  nome: 'cachorro',
  porte: "médio",
  tipo: "terrestre",
  visaoNoturna: false
}