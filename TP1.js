/**
 * 
 * 1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.
 * 
 */
let nombres1 = 8;
let nombres2 = 40;

function total(nombres1, nombres2){
let somme = nombres1 + nombres2;
return(somme)
}
console.log(" ")
console.log("1 Écrivez une fonction qui prend deux nombres comme arguments et renvoie leur somme.")
console.log("1 :" + total(nombres1, nombres2))

/**
 * 
 * 2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.
 * 
 */

const tablaux = [1, 3, 2, 8, 8, 9, 7, 5];

function b(tablaux){
return(Math.max(...tablaux));
}
console.log(" ")
console.log("2 Écrivez une fonction qui prend un tableau de nombres et renvoie le plus grand nombre du tableau.")
console.log("2 :" + b(tablaux))

/**
 * 
 * 3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes 
 * les voyelles ont été supprimées.
 * 
 */

const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

function c(p){
return(p.replace(/[aeiou]/gm, (m, i) => i = ""));
}
console.log(" ")
console.log("3 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne de caractères dont toutes les voyelles ont été supprimées.")
console.log("3 :" + c(p))

/**
 * 
 * 4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées 
 * par ordre alphabétique.
 * 
 */
const alphabe = ['b', 'c', 'a', 'r'];

function d(alphabe){
    
    alphabe.sort();
    return(alphabe);
}
console.log(" ")
console.log("4 Écrivez une fonction qui prend un tableau de chaînes de caractères et renvoie un tableau de chaînes de caractères triées par ordre alphabétique.")
console.log("4 :" + d(alphabe))

/**
 * 
 * 5 Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. 
 * Par exemple, si l'entrée est 42, la fonction doit retourner "quarante-deux".
 * 
 */
nb = 70

function e(nb){
    let letter = ["zero", "un", "deux", "trois", "quatre", "cinq", "six", "sept","huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingt", "quatre-vingt-dix"];
    // librerie des chiffre/nonbre
    let nbletter = "";
    let decimal;
    // declarer les variable
    decimal = (nb % 10);
            if (nb<=20){
                nbletter = letter[nb];
                // transformer les 20 premier nonbre en lettre
               }else {
                if(nb<=29){
                nbletter = "vingt-" + letter[decimal];
                }else {
                    if(nb<39){
                        if(decimal===0){nbletter = "trente"}
                    nbletter = "trente-" + letter[decimal];
                    }else {
                        if(nb<=49){
                            if(decimal===0){nbletter = "trente"}
                            nbletter = "quarante-" + letter[decimal];
                        }else{
                            if(nb<=59){
                                if(decimal===0){nbletter = "cinquante"}
                            nbletter = "cinquante-" + letter[decimal];
                            }else{
                                if(nb<=69){
                                    if(decimal===0){nbletter = "soixante"}
                                nbletter = "soixante-" + letter[decimal];
                                }else{
                                    if(nb<=79){
                                        if(decimal===0){nbletter = "soixante-dix"}
                                    decimal = (decimal + 10)
                                    nbletter = "soixante-" + letter[decimal];
                                    }else{
                                        if(nb<=89){
                                            if(decimal===0){nbletter = "quatre-vingt"}
                                        nbletter = "quatre-vingt-" + letter[decimal];
                                        }else{
                                            if(nb<=99){
                                                if(decimal===0){nbletter = "quatre-vingt-dix"}
                                                // si c un nonbre qui a comme decimal 0 (30,40,50...)on le fait manuelement
                                            decimal = (decimal + 10)
                                            nbletter = "quatre-vingt-" + letter[decimal];
                                            //si le nonbre est entre 21 et 99 on le transforme en lettre avec letter[decimal]
                                            }else{
                                                if(nb=100){
                                                nbletter = "cent";
                                                // si le nonbre est 100
                                                }else{
                                                    nbletter = "+ que 100";
                                                    // si le nonbre est a + que 100
                                                }
                                            }
                                        }
            
                                    }
                                }
                            }
                        }
                
            
                    }
               }
            }
              
return nbletter;
}
console.log(" ")
console.log("5 Écrivez une fonction qui prend un nombre en argument et renvoie une chaîne de caractères représentant ce nombre en mots. Par exemple, si l'entrée est 42, la fonction doit retourner \"quarante-deux\".")
console.log("5 :" + nb + " = " + e(nb));


/**
 * 
 * 
- 6 Écrivez une fonction qui prend un tableau d'objets et 
un nom de propriété et renvoie un tableau des valeurs de cette propriété 
dans chaque objet.

 * 
 */


const objectArray = [           
    { prenom: "Martin", nom: "Hollande", age : 56, ville: 'Lyon'},
    { prenom: "Martin", nom: "Hollande", age : 56, ville: 'Lyon'},
    { prenom: "Martin", nom: "Hollande", agetete : 56, ville: 'Lyon'},
    { prenom: "Martin", nom: "Hollande", agretzetee : 56, ville: 'Lyon'},
    { prenom: "Martin", nom: "Hollande", agfge : 56, ville: 'Lyon'},
];

function uneFonction(objectArray, propertyName){               
        let valueArray = []
        // je parcours le tableau d'objet
    for (let i = 0; i < objectArray.length; i++) {
        // pour chaque objet je parours les cles et je les compare au parametre
        valueArray[i] = objectArray[i][propertyName]
            // si c'est different : ne rien faire
            // on va cherche la valeur qui correspond a la cle 
            // on la stocke dans valueArray

        
    }return valueArray
}
console.log(" ")
console.log("6 Écrivez une fonction qui prend un tableau d'objets et un nom de propriété et renvoie un tableau des valeurs de cette propriété dans chaque objet.")
// stocker le retour de la fonction dans une variable 
console.log("6 :" + uneFonction(objectArray, 'age'))
// afficher la valeur de la variable dans la console

/**
 * 
 * 7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.
 * 
 */

let r = [80, 9, 700, 8, 4, 3, 5, 8000, 75];

function g(r){                 
    // je fais un trie les chiffre/nombre
    const sortDesc = (a, b) => b - a;
    r.sort(sortDesc);
    return r;
}
console.log(" ")
console.log("7 Écrivez une fonction qui prend un tableau de nombres et renvoie un tableau de nombres triés par ordre décroissant.")
console.log("7 :" + g(r));

/**
 * 
 * 8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.
 * 
 */

const v = 'the quick brown fox jumps over the lazy dog. if the dog reacted, was it really lazy?';

function k(v){
    // retire les minuscule et je les remplace par les majuscule
const resu = v.split('a').join('A').split('e').join('E').split('u').join('U').split('o').join('O').split('i').join('I').split('y').join('Y');
    return resu;
}
console.log(" ")
console.log("8 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les voyelles en majuscules.")
console.log("8 :" + k(v));


/**
 * 
 * 9 Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.
 * 
 */

y = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
function i(y) {
    let nbvoyelle = 0;
    let compte = ['a', 'e', 'i', 'o', 'u', 'y'];
    let maj = (y.toLowerCase())
    // declaration des variable et retire les majuscule
    for (let qw of maj) {      
        // division du champs de caractère en lettre
        if (compte.includes(qw)) {
            nbvoyelle ++;
        }
    // calcule du nombre de voyelle 
        
    }
    return nbvoyelle;
}
console.log(" ")
console.log("9 Écrivez une fonction qui prend une chaîne de caractères et renvoie le nombre de voyelles dans cette chaîne.")
console.log("9 :" + i(y))

/**
 * 
 * 10 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.
 * 
 */

const o = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';

function h(o){
const resul = o.split('b').join('B').split('d').join('D').split('f').join('F').split('g').join('G').split('h').join('H').split('j').join('J').split('k').join('K').split('l').join('L').split('m').join('M').split('n').join('N').split('p').join('P').split('q').join('Q').split('r').join('R').split('s').join('S').split('t').join('T').split('v').join('V').split('w').join('W').split('x').join('X').split('z').join('Z');
    return resul;
    // retirer les minuscule et les remplacer par des majuscule
}
console.log(" ")
console.log("10 Écrivez une fonction qui prend une chaîne de caractères et renvoie une nouvelle chaîne avec toutes les consonnes en majuscules.")
console.log("10 :" + h(o));




