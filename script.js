const readline = require("readline-sync");

const nomeHeroi = readline.question("Digite o nome do herói: ")
let XP = 1000;

function determinarNivel(XP){
    if (XP <= 1000) return "Ferro";
    if (XP <= 2000) return "Bronze";
    if (XP <= 5000) return "Prata";
    if (XP <= 7000) return "Ouro";
    if (XP <= 8000) return "Platina";
    if (XP <= 9000) return "Ascendente";
    if (XP <= 10000) return "Imortal";
    return "Radiante";
}

const quantidadeExperiencia = determinarNivel(XP);

console.log ("O Herói de nome " + nomeHeroi + " está no nível de " + quantidadeExperiencia)


