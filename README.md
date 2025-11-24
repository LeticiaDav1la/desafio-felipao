# 🧠 Classificador de Nível de Heróis

Este repositório faz parte do desafio de lógica de programação da DIO (Digital Innovation One).
Aqui colocamos em prática conceitos fundamentais como variáveis, operadores, estruturas condicionais e laços de repetição, criando um sistema que classifica heróis de acordo com sua experiência (XP).

Apesar de simples, este projeto é uma ótima oportunidade para exercitar lógica, organização e boas práticas de programação, elementos essenciais para qualquer desenvolvedor.

## 🎮 Como Funciona?

**O sistema recebe:**

📝 Nome do herói

⭐ Quantidade de XP


E determina automaticamente o nível correspondente com base na tabela oficial:


| Faixa XP  | Nivel |
| ------------- | ------------- |
|Menos de 1.000	|🔩 Ferro|
|1.001 – 2.000	|🥉 Bronze|
|2.001 – 5.000	|🥈 Prata|
|5.001 – 7.000	|🥇 Ouro|
|7.001 – 8.000	|💎 Platina|
|8.001 – 9.000	|🔥 Ascendente|
|9.001 – 10.000	|👑 Imortal|
|10.001 ou mais	|🌟 Radiante|


O programa percorre uma lista de heróis armazenados em um array e classifica cada um individualmente.



## 🧩 Lógica Utilizada

**A lógica foi construída usando:**

- Arrays

- Laço de repetição for

- Estruturas condicionais if / else if / else

- Variáveis para armazenar XP, nome e nível


**Passos realizados:**

1. O código percorre a lista de heróis


2. Verifica a quantidade de XP


3. Define o nível correspondente


4. Exibe a mensagem final formatada


## 💻 Código (JavaScript)

``` JavaScript
let herois = [
    { nome: "Leticia", xp: 845 },
    { nome: "Arthur", xp: 1500 },
    { nome: "Marina", xp: 5280 },
    { nome: "Carlos", xp: 11000 }
];

for (let i = 0; i < herois.length; i++) {
    let nivel = "";
    let xp = herois[i].xp;

    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    console.log(`O Herói de nome ${herois[i].nome} está no nível de ${nivel}`);
}
```
## 🚀 Saída Esperada

**O programa imprime no console algo assim:**

```O Herói de nome Leticia está no nível de Ferro
O Herói de nome Arthur está no nível de Bronze
O Herói de nome Marina está no nível de Ouro
O Herói de nome Carlos está no nível de Radiante
```
## 📦 Sobre o Repositório

**Neste repositório você encontrará:**

O código completo do desafio

Arquivo README explicando toda a lógica

Estrutura organizada para facilitar aprendizado e evolução do projeto

## 🧾 Licença

Projeto desenvolvido para fins educacionais dentro da trilha de Fundamentos de Lógica de Programação da DIO.
