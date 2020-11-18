<!-- TYPE DE DOCUMENT HTML5 -->
<!doctype html>
<!-- BALISE OUVRANTE ET FERMANTE html + ATTRIBUT LANGUE -->
<html lang="fr">
<!-- BALISE HEAD + META + APPEL DE FEUILLES DE STYLE BOOTSTAP EN CDN (distant sur un serveur) et CSS en local (depuis index.html / dossier CSS / fichier styles.css -->
<head>
    <!-- ENCODAGE DES CARACTERES (FR pour ç, à, ê, etc ...-->
    <meta charset="utf-8">
    <!-- Accepte tous les écrans + mobile + tablette -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Appel de fichier bootstrap minifié css -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css">
    <!-- Appel de votre feuille de style locale -->
    <link rel="stylesheet" type="text/css" href="../css/styles.css"/>
    <!-- Appel de la police CDN -->
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet">
    <!-- Appel de font awesone icone gratuite distante -->
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <!-- Titre de l'onglet du site dans le navigateur -->
    <title>MON CV - Commentaire -</title>
</head>
<body>
<div class="container">
    <h1 class="text-warning">Commentaire</h1>
    <form action="contact.php" method="post">
        <div class="form-group">
            <label for="genre">Genre</label>
            <select class="form-control" name="genre" id="genre">
                <option value="Madame">Madame</option>
                <option value="Monsieur">Monsieur</option>
            </select>
        </div>
        <!-- nom du posteur -->
        <div class="form-group">
            <label for="name">Votre nom</label>
            <input type="text" id="name" name="name" class="form-control" placeholder="Votre nom">
        </div>
        <div class="form-group">
            <label for="message">Votre message</label>
            <textarea rows="3" id="message" name="message" class="form-control" placeholder="Votre message"></textarea>
        </div>

        <div class="form-check form-check-inline">
            <input class="form-check-input" name="radio" type="checkbox" id="radio1" value="inscrit">
            <label class="form-check-label" for="radio1">Je suis inscrit sur le site</label>
        </div>
        <div class="form-check form-check-inline">
            <input class="form-check-input" name="radio" type="checkbox" id="radio2" value="non-inscrit">
            <label class="form-check-label" for="radio2">Je ne suis pas inscrit sur le site</label>
        </div>
        <hr>
        <button type="submit" class="btn btn-outline-danger">Poster le message</button>
        <a href="../index.html" type="submit" class="btn btn-outline-success">Retour</a>
        <a href="js.html" type="submit" class="btn btn-outline-dark">Test JavaScript</a>
        <hr>
    </form>
</div>



<!-- SCRIPT jQuery et Bootstrap -->
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"></script>
<!-- SCRIPT local dossier -> js -> fichier main.js -->
<script type="text/javascript" src="../"></script>
<!-- Création d'un variable qui est égale a la fonction principale de main.js -->
<script>
    let js = new JS();
</script>
</body>
</html>

<?php
var_dump("Genre du posteur : " .$_POST['genre']);
var_dump("Nom du posteur : " .$_POST['name']);
var_dump("Message du posteur : " .$_POST['message']);


$radioVal = $_POST["radio"];

if ($radioVal == "inscrit") {
    var_dump("La valeur du radio 1 :" .$radioVal);
} else if ($radioVal == "non-inscrit") {
    var_dump("La valeur du radio 2 :" .$radioVal);
}
