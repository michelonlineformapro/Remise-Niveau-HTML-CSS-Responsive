function JS(){
    //Variables();
    //TypeVariables()
    //ConditionSimple()
    //BoucleLectureFor()
    //BoucleLectureTantQue()
    //BoucleIn()
    //BoucleOf()
    //UnSwitchCase()
    //UnObjet()
    //ClasseEtConstructeur()
    //TableauOrdone();
}

function Variables(){
    //chaine de caractères entre 2 quote '' ou double quotes " "
    let nom = "michael"
    //chiffres et nombre entier (sans virgule)
    let nombreDeJeux = 4
    let age = 45
    //Chiffre a virgule
    let pi = 3.14

    //Opération de base (addition + )  (soustraction - ) (multiplication *) et (division /)
    let addition = age + pi

    //LES OPÉRATEURS += -= *= et /=
    //Afficher du texte en console = console.log(contenu) et en html document.write(contenu)
    document.write("age + pi = " + addition + "<br>")
    addition += 20;
    document.write("Avec opérateur (addition += 20) : " + addition + "<br>")
    //INCREMENTATION + ou - 1
    addition++;
    addition--;
    /*
    déclarer les variables par le mot clé let et un nom en "camel case", et les initialiser avec l'opérateur = ;

    modifier le contenu d'une variable en la réaffectant ; ou avec des opérateurs ;

    utiliser des constantes pour éviter le remplacement d'éléments de données essentiels.
    Dans le chapitre qui suit, nous verrons un attribut important des variables : leur type.
    */
}

function TypeVariables(){
    //Chaine de caractères + chaine de caractères
    let nom = "TRUMP"
    let prenom = "Donald"

    //Addition de chaine de caractères
    let fullName = "Votre nom est : " + nom + " et votre prénom est : " + prenom + " !<br>"
    //Afficher
    document.write(fullName + "<br>")

}

function ConditionSimple(){
    //Int
    let age = 18
    //Boolean
    let estAdulte = true
    //La condition
    if(age >= 18){
        document.write("Vous êtes un adulte car vous avez plus de : " + age + " ans !<br>")
    }else{
        document.write("Vous êtes un mineur car vous avez  moins de : " + age + " ans !<br>")
    }
}

function BoucleLectureFor(){
    //Valeur Int
    let uneValeur = 100
    //Si i = o et i est plus petit que 100 alors on incrément i (i++ = i+1)
    for(let i = 0; i <= uneValeur; i++){
        document.write("une valeur = 100<br>")
    }
}

function BoucleLectureTantQue(){
    let livresEnStock = 100
    let livresDisponible = 30
    let livresEnPret = 70

    while(livresEnStock > 0 && livresDisponible > 0){
        livresEnPret++;
        livresDisponible--;
        livresEnStock--;
    }
    document.write("Livre dispo  : " + livresDisponible + " Livre en Stock : " + livresEnStock + " Livre prété : " + livresEnPret)
}

//Boucle avec in a utilisé avec des objets ou tableaux
function BoucleIn(){
    //Création d'un tableau entre []
    const films = [
        "Jurasic Park",
        "Star War",
        "Vendredi 13"
    ]
    //Pour la valeur i dans le tableau films = on affiche les elements du tableau en fonction de la valeur de i
    for(let i in films){
        document.write("Lister les films avec IN = " + films[i])
    }
}

//Boucle of
function BoucleOf(){
    //Encore un tableau
    const films = [
        "Wall-e",
        "Indiana Jones",
        "Dikenek"
    ]
    //pour la variables desFilms du tableau films
    for(let desFilms of films){
        document.write("Lister les films avec OF = " + desFilms)
    }
}


function UnSwitchCase(){
    //On définit une valeur entier : ici  3
    let jeVeuxLeCas = 3
    //On définit plusieurs cas possible (si la valeur de la variables est null on affiche le cas par defaut
    switch(jeVeuxLeCas){
        case 1:
            document.write("Cas 1 car variable jeVeux le cas = 1")
            break
        case 2:
            document.write("Cas 2 car variable jeVeux le cas = 2")
            break
        case 3:
            document.write("Cas 3 car variable jeVeux le cas = 3")
            break
        default:
            document.write("jeVeuxLeCas n'a pas de valeur ( = null) alors on déclenche le cas par defaut")
    }
}

function UnObjet(){
    //Dans un objet on remplace les crochet [] du tableau par des accolades {}
    let objet1 = {
        titre: "Indiana Jones",
        nombreDePages: 400,
        enStock: true
    }
    //Pour afficher une valeur on utilise nom de l'objet . nom de l'éléments (ici objet1.titre)
    document.write("Nom du film : " + objet1.titre + " Nombre de pages = " + objet1.nombreDePages + " En stock = " + objet1.enStock + "<br>")
}

function ClasseEtConstructeur(){
    //Création d'une classe (class + bom + 2 accolades)
    class BandeDessinee{
        //Création d'un construteur avec les paramètres souhaité
        constructor(titre, auteur, pages){
            //Utilisation de this (= objet courant soit le constucteur) + paramètres
            this.titre = titre
            this.auteur = auteur
            this.pages = pages
        }
    }
    //Utilisé la classe
    //Instance de la classe avec le mot clé new + Nom de la classe et entre parenthèses les paramètres (ici titre + auteur + nombre de page)
    let bd1 = new BandeDessinee("Titin","Hergé",450)
    document.write(bd1.titre + " est ecrit par : " + bd1.auteur + " et possède : " + bd1.pages + " pages<br>")
}

//Des tableaux
function TableauOrdone(){
    //On initialise un tableau avec des crochet let + nom du tableau + ["","" etc...] éléments avec des quotes simples ou doubles
    let tableau = ["ICI element1 <br> ", " un autre truc ", " ici élément 3 mais index2 car un tableau commence par 0 !<br> "]
    let tableau1 = tableau[0] // Designe le 1er element du tableau
    let tableau3 = tableau[2] // Designe l'element 3 du tableau
    document.write(tableau1 + tableau3)
    //Compter les elements
    document.write("Ce tableau a : " + tableau.length + " éléments <br>")
    //Ajouter un element
    tableau.push("Ajoute un element")
    //Ajouter au debut
    tableau.unshift("Element au debut du tableau")
    //Suprimer le dernier element -> pas de paramètre
    tableau.pop()
    //set = ensemble de liste non ordonnée et map liste avec valeur pair clé + valeur
}

function ExempleInstanceClasse(){
     class CompteBanque{
         //init
         constructor(proprio, montant) {
             this.proprio = proprio
             this.montant = montant
         }
         //Creation de fonction dans la classe
         //Afficher le solde du compte
         VoirSolde(){
             document.write("Solde : " + montant)
         }
         FaireDepot(montantDepot){
             this.montant += montantDepot
         }
     }
     //Créer une instance de la classe
    const solde = new CompteBanque("Michael", 10500)
    solde.VoirSolde()
    //Solde après le depot
    solde.FaireDepot()
    //Le nouveau solde
    solde.VoirSolde()
}

