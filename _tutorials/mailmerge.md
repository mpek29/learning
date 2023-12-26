---
layout: page
title: Envoi massif et personnalisé depuis Thunderbird
importance: 2
---
Si vous souhaitez réaliser un envoi massif et personnalisé de mail depuis Thunderbird, vous pouvez utiliser le module Mail Merge. Sur cette page, je vais vous décrire comment faire usage de ce module.

## Installer Mail Merge
1. Installer [Thunderbird](https://www.thunderbird.net) et lancer le.
2. Aller dans menu **Outils** > **Modules Complémentaires** .
3. Rechercher "Mail Merge".
4. Cliquer sur le bouton **Ajouter à Thunderbird** .


## Créer la source de données dans un tableur
Attention, il est à noter que cette extension de Thunderbird ne supporte pas les espaces et les caractères accentués que ce soit dans les noms de fichiers (fichier .csv source de données ou fichiers pièces jointes) ou dans les noms de colonnes de la source de données.

<ol>
  <li>Créer dans un tableur les différentes colonnes correspondant aux champs utiles pour le mail. Chaque colonne doit avoir un en-tête nommé ; nom, prenom, message, etc … Ces noms de colonnes ne doivent pas contenir d'espaces ou de caractères accentués. Compléter ensuite chaque colonnes avec les données personnalisés de chaque destinataires du mailing.
    <div class="row">
      <div class="col-sm mt-3 mt-md-0">
        {% include figure.html path="assets/img/tutorials/mailmerge/mailmerge-1_1.png" class="img-fluid rounded z-depth-1" %}
      </div>
    </div>
  </li>
  <li>Sauvegarder en format .CSV (en utilisant des point-virgule en guise de séparateur de champs)<br>
    Rappel : pas d'espace ou de caractère spécial dans le nom du fichier !
</li>
</ol> 

## Envoyer un mailing avec Mail Merge dans Thunderbird
Installer le module complémentaire [mailmerge](https://addons.mozilla.org/fr/thunderbird/addon/mail-merge/)

<ol>
  <li>
    <p>Créer un nouveau message. Chaque champ du tableur qui doit figurer dans le message doit être encadré par une paire de doubles-accolades.</p>
    <ul>
      <li>Dans le champ Pour(destinataire) : entrer le champ correspondant aux adresses mail listées dans le fichier de données.</li>
      <li>Ajouter un sujet</li>
      <li>Rédiger le brouillon du message, en insérant tous les champs utiles du tableur dans le corps du message, utiliser les doubles-accolades.
        <div class="row">
          <div class="col-sm mt-3 mt-md-0">
            {% include figure.html path="assets/img/tutorials/mailmerge/mailmerge-1_2.png" class="img-fluid rounded z-depth-1" %}
          </div>
        </div>
      </li>
    </ul>
  </li>

  <li>
    Cliquer sur Fichier puis Mail Merge et choisir CSV.
    <ul>
      <li>Cliquer sur Parcourir et indiquer le chemin vers le fichier .csv créé plus haut qui contient les données utiles au mailing.</li>
      <li>Dans le champ « Attachements », indiquer l'en-tête correspondant à la liste des fichiers. Cliquer sur OK pour valider l'envoi immédiat des mails.</li> 
      <li>
        En choisissant comme Mode  de Livraison: Envoyer plus tard ; les messages seront stockés dans « Messages en attente ». Cela permettra de vérifier l'exactitude des données. L'envoi définitif devra se faire en choisissant : Fichier > Envoyer les messages en attente
        <div class="row">
          <div class="col-sm mt-3 mt-md-0">
            {% include figure.html path="assets/img/tutorials/mailmerge/mailmerge.png" class="img-fluid rounded z-depth-1" %}
          </div>
        </div>
      </li>
    </ul>
  </li>
</ol> 

## Source
- <https://wiki.enib.fr/dsi/doku.php?id=cri:thunderbird:mailmerge>
