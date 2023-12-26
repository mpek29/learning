---
layout: page
title: Rédiger un document à l'aide de Latex
importance: 3
---

Si vous souhaitez réaliser un compte-rendu de projet ou bien de stage avec un aspect professionnel, vous pouvez utiliser le langage Latex. Sur cette page, je vais vous décrire comment faire usage de mon template servant à mes comptes-rendus de projet (plusieurs d'entre eux sont disponibles dans la section « Projets » du site où vous vous trouvez.)

## Éditeur Latex
Tout d'abord, afin de transformer, vos documents rédigés en LaTex en un pdf, vous aurez besoin d'un éditeur Latex.

Ici, je vous proposerais de faire usage de l'outil [ShareLaTex](https://latex.enib.fr/project) de l'ENIB si vous en êtes un étudiant ou bien de vous rendre sur [Overleaf](https://www.overleaf.com).

Il vous suffira de vous connecter sur ces différents services (l'usage du [ShareLaTex](https://latex.enib.fr/project) de l'ENIB nécessite une demande d'accès auprès du SNUM via un mail).

L'avantage de ces éditeurs résident dans leurs présences en ligne qui facilite le travail de groupe. Si vous souhaitez plutôt travailler de façon individuelle, je vous recommande le tutoriel qui est d'écrit  [ici](https://vincentchoqueuse.github.io/personal_website/tutorials/latex_document.html).

## Templates

J'ai créé au fil des années mon propre template qui me sert de base pour tous mes rapports. Celui-ci fut dans un premier temps une copie la plus proche de l'original que j'ai réalisé d'un exemple de rapport proposé lors de mon cours de BDD S3 puis je l'ai amélioré au fil du temps et de mes besoins personnels mais aussi en empruntant certaines caractéristiques de celui-ci :

- Template de rapport de Vincent Choqueuse <https://github.com/vincentchoqueuse/ENIB_latex_template> :

<div class="row">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 30%;display: block;margin: auto;">
        {% include figure.html path="assets/img/tutorials/use_template_sharelatex/0.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0" style="max-width: 30%;display: block;margin: auto;">
        {% include figure.html path="assets/img/tutorials/use_template_sharelatex/1.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

Et c'est ainsi que j'ai créé ce template <https://github.com/mpek29/mpek29-latex-template> :

<div class="row">
    <div class="col-sm mt-3 mt-md-0" style="max-width: 30%;display: block;margin: auto;">
        {% include figure.html path="assets/img/tutorials/use_template_sharelatex/2.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0" style="max-width: 30%;display: block;margin: auto;">
        {% include figure.html path="assets/img/tutorials/use_template_sharelatex/3.jpg" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

### Usage
Pour utiliser un modèle,

1. Rendez-vous sur la page GitHub de celui-ci (par exemple les liens ci-dessus).

2. Appuyer sur "Code" puis "Download ZIP"

3. Rendez-vous sur la section projet de l'outil [ShareLaTex](https://latex.enib.fr/project) de l'ENIB ou bien d'[Overleaf](https://www.overleaf.com) (vous êtes normalement par défaut dans cette section).

4. Appuyer sur "Nouveau Projet" puis "Upload Projet" pour [Overleaf](https://www.overleaf.com) ou bien "Importer un projet" pour l'outil [ShareLaTex](https://latex.enib.fr/project) de l'ENIB

5. Sélectionner le ZIP téléchargé précédemment et c'est fini ! Vous n'avez plus qu'à modifier le template choisi comme vous le souhaitez.
