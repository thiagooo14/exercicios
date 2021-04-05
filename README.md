## Repositorio de Exercicios

Pra melhor organizar, cada exercicio esta em branchs separadas, e cada um tem no README o que era proposto nas atividades!!

### Inicio de Java Script pt:2

utilizei aqui pra praticar o basico do basico de JS.
Treinei objetos e funções, criei os arquivos:

### Aula.js

Conteu o que foi visto nas aulas e algumas anotações

### Aquecimento.js

Lista de exercicio de fixação pedida em aula:

1. Crie um objeto player contendo as variáveis listadas abaixo.

```js
let name = 'Marta';
let lastName = 'Silva';
let age = 34;
let medals = { golden: 2, silver: 3 };
```

2. Acesse a chave name , lastName e age . Concatene as informações para fazer um console.log no seguinte formato: "A jogadora Marta Silva tem 34 anos de idade".

3. Adicione ao objeto a chave bestInTheWorld e atribua a esta chave um array contendo as datas em que a jogadora Marta foi considerada a melhor do mundo.

```js
let bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
```

4. Acesse a chave bestInTheWorld e faça um console.log no seguinte formato: "A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes".

5. Acesse a chave medals e faça um console.log no seguinte formato: "A jogadora possui 2 medalhas de ouro e 3 medalhas de prata".

### exercicios.js

#### Parte I - Objetos e For/In

Usando o objeto abaixo, faça os exercícios a seguir

```js
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
```

1. Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

- Valor esperado no console: Bem-vinda, Margarida

2. Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console.

- Valor esperado no console

```
{
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };
```

3.Faça um for/in que mostre todas as chaves do objeto.

- Valor esperado no console:

```
personagem
origem
nota
recorrente
```

4. Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

- Valor esperado no console:

```
  Margarida
  Pato Donald
  Namorada do personagem principal nos quadrinhos do Pato Donald
  Sim
```

5. Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves.

- Valor esperado no console:

```
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha!
```

#### Parte II - Funções

Agora vamos fazer um exercício que vai deixar claro como funções com responsabilidades bem definidas deixam o código mais bem escrito.

1. Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

- Exemplo de palíndromo: arara .
- verificaPalindrome('arara') ;
- Retorno esperado: true
- verificaPalindrome('desenvolvimento') ;
- Retorno esperado: false

2. Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

- Array de teste: [2, 3, 6, 7, 10, 1]; .
- Valor esperado no retorno da função: 4 .

3. Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

- Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
- Valor esperado no retorno da função: 6 .

4. Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

- Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
- Valor esperado no retorno da função: Fernanda .

5. Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

- Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
- Valor esperado no retorno da função: 2 .

6. Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

- Valor de teste: N = 5 .
- Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

7. Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .

- Valor de teste: 'trybe' e 'be'
- Valor esperado no retorno da função: true
- verificaFimPalavra('trybe', 'be') ;
- Retorno esperado: true
- verificaFimPalavra('joaofernando', 'fernan') ;
- Retorno esperado: false
