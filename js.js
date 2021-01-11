var objet = "none";
var moves = 0;
var score = 0;
var c = 0;
var id_balais = 1;
var items = document.getElementsByClassName("items");

document.getElementById('idle_music').volume = 0.6;

// Ces tableaux permettent de mettre en image les différents volumes de produit dans le pulvérisateur
var tabl_pchit_javel = ['pchit_javel_plein', 'pchit_javel_presque_plein', 'pchit_javel_un_peu_vide', 'pchit_javel_presque_vide', 'pchit_vide'];
var tabl_pchit_vinaigre = ['pchit_vinaigre_plein', 'pchit_vinaigre_presque_plein', 'pchit_vinaigre_un_peu_vide', 'pchit_vinaigre_presque_vide', 'pchit_vide'];


// On définit ici l'ensemble des SFX utilisés
var audio_chasse_deau = new Audio('medias/SOUNDS/chasse-deau.mp3');
var audio_bicarbonate = new Audio('medias/SOUNDS/poudre.mp3');
var audio_brosse1 = new Audio('medias/SOUNDS/brush1.mp3');
var audio_brosse2 = new Audio('medias/SOUNDS/brush2.mp3');
var audio_pchit1 = new Audio('medias/SOUNDS/pchit1.mp3');
var audio_pchit2 = new Audio('medias/SOUNDS/pchit2.mp3');
var audio_pelle_remplie = new Audio('medias/SOUNDS/pelle_remplie.mp3');
var audio_pelle_vidage = new Audio('medias/SOUNDS/pelle_vidage.mp3');
var audio_plouf = new Audio('medias/SOUNDS/plouf.mp3');
var audio_sponge1 = new Audio('medias/SOUNDS/sponge1.mp3');
var audio_sponge2 = new Audio('medias/SOUNDS/sponge2.mp3');
var audio_sponge3 = new Audio('medias/SOUNDS/sponge3.mp3');
var audio_verser = new Audio('medias/SOUNDS/verser.mp3');
var audio_serpilliere = new Audio('medias/SOUNDS/serpilliere.mp3');

// On utilise des tableaux pour les items ayant plusieurs SFX (sélection aléatoire)
var tabl_audio_brosse = [audio_brosse1, audio_brosse2];
var tabl_audio_pchit = [audio_pchit1, audio_pchit2];
var tabl_audio_sponge = [audio_sponge1, audio_sponge2, audio_sponge3];



function validate() {
	audio_chasse_deau.play();
	if (score == 17) {
		alert("Bravo ! Les toilettes sont archis propres ! Tu as réalisé " + moves + " mouvements.");
	} else {
		alert("Non ! Les toilettes ne sont pas propres, tout doit être lavé ! Ton score est de " + score + " avec " + moves + " mouvements.")
	}
}

function count_moves() {
	moves++;
	console.log('--- Mouvement ' + moves + ' :');
	return moves;
}

function destroy(ev) {
	ev.preventDefault();
	score++;
	console.log(ev.target.id + ' a été supprimé');
	ev.target.remove();
	console.log('Le score actuel est de ' + score);
	// Arrête le cooldown
	for (var i = 0; i < items.length; i++) {
		items[i].setAttribute('ondragstart', "drag(event);");
	}
}

function drag(ev) {
	count_moves();
	objet = ev.target.id;	
	console.log("L'objet sélectionné est " + objet);
	return objet;
}



function detect(ev) {
	switch (ev.target.id) {
		case 'sol_sale':
			if (objet=='seau_javelise') {
				ev.preventDefault();
			}
			break;


		case 'tag1':
			if (objet=='brosse_imbibee') {
				ev.preventDefault();
			}
			break;
		case 'tag2':
			if (objet=='brosse_imbibee') {
				ev.preventDefault();
			}
			break;
		case 'tag3':
			if (objet=='brosse_imbibee') {
				ev.preventDefault();
			}
			break;



		case 'calcaire_couvercle':
			if (objet=='pchit_vinaigre_plein' || objet=='pchit_vinaigre_presque_plein' || objet=='pchit_vinaigre_un_peu_vide' || objet=='pchit_vinaigre_presque_vide') {
				ev.preventDefault();
			}
			break;
		case 'calcaire_pied':
			if (objet=='pchit_vinaigre_plein' || objet=='pchit_vinaigre_presque_plein' || objet=='pchit_vinaigre_un_peu_vide' || objet=='pchit_vinaigre_presque_vide') {
				ev.preventDefault();
			}
			break;
		case 'calcaire_couvercle_vinaigre':
			if (objet=='brosse_bicarbonatee') {
				ev.preventDefault();
			}
			break;
		case 'calcaire_pied_vinaigre':
			if (objet=='brosse_bicarbonatee') {
				ev.preventDefault();
			}
			break;

		case 'calcaire_cuvette':
			if (objet=='bicarbonate' || objet=='vinaigre' || objet=='pchit_vinaigre_plein' || objet=='pchit_vinaigre_presque_plein' || objet=='pchit_vinaigre_un_peu_vide' || objet=='pchit_vinaigre_presque_vide') {
				ev.preventDefault();
			}
			break;
		case 'calcaire_cuvette_bicarbonate':
			if (objet=='vinaigre' || objet=='pchit_vinaigre_presque_plein' || objet=='pchit_vinaigre_un_peu_vide' || objet=='pchit_vinaigre_presque_vide') {
				ev.preventDefault();
			}
			break;
		case 'calcaire_cuvette_vinaigre':
			if (objet=='bicarbonate') {
				ev.preventDefault();
			}
			break;
		case 'calcaire_cuvette_traite':
			if (objet=='brosseWC') {
				ev.preventDefault();
			}
			break;



		case 'mousse_chasse_deau':
			if (objet=='pchit_javel_plein' || objet=='pchit_javel_presque_plein' || objet=='pchit_javel_un_peu_vide' || objet=='pchit_javel_presque_vide') {
				ev.preventDefault();
			}
			break;
		case 'mousse_cuvette_ext':
			if (objet=='pchit_javel_plein' || objet=='pchit_javel_presque_plein' || objet=='pchit_javel_un_peu_vide' || objet=='pchit_javel_presque_vide') {
				ev.preventDefault();
			}
			break;
		case 'mousse_cuvette_int':
			if (objet=='javel' || objet=='pchit_javel_plein' || objet=='pchit_javel_presque_plein' || objet=='pchit_javel_un_peu_vide' || objet=='pchit_javel_presque_vide') {
				ev.preventDefault();
			}
			break;
		case 'mousse_chasse_deau_traitee':
			if (objet=='brosse') {
				ev.preventDefault();
			}
			break;
		case 'mousse_cuvette_ext_traitee':
			if (objet=='brosse') {
				ev.preventDefault();
			}
			break;
		case 'mousse_cuvette_int_traitee':
			if (objet=='brosseWC') {
				ev.preventDefault();
			}
			break;



		case 'pisse_couvercle':
			if (objet=='sponge_javelisee') {
				ev.preventDefault();
			}
			break;
		case 'pisse_cuvette':
			if (objet=='sponge_javelisee') {
				ev.preventDefault();
			}
			break;
		case 'pisse_sol':
			if (objet=='seau_javelise') {
				ev.preventDefault();
			}
			break;



		case 'caca_cuvette_1':
			if (objet=='pelle_vide') {
				ev.preventDefault();
			}
			break;
		case 'caca_cuvette_2':
			if (objet=='pelle_vide') {
				ev.preventDefault();
			}
			break;
		case 'caca_cuvette_3':
			if (objet=='pelle_vide') {
				ev.preventDefault();
			}
			break;
		case 'caca_pied':
			if (objet=='pelle_vide') {
				ev.preventDefault();
			}
			break;


		// INTERACTIONS AVEC D'AUTRES OBJETS //
		case 'sponge':
			if (objet=='javel') {
				ev.preventDefault();
			} else if (objet=='pchit_javel_plein' || objet=='pchit_javel_presque_plein' || objet=='pchit_javel_un_peu_vide' || objet=='pchit_javel_presque_vide') {
				ev.preventDefault();
			}
			break;



		case 'brosse':
			if (objet=='bicarbonate' || objet=='pchit_javel_plein' || objet=='pchit_javel_presque_plein' || objet=='pchit_javel_un_peu_vide' || objet=='pchit_javel_presque_vide') {
				ev.preventDefault();
			}
			break;
		case 'brosse_javelisee':
			if (objet=='bicarbonate') {
				ev.preventDefault();
			}
			break;
		case 'brosse_bicarbonatee':
			if (objet=='pchit_javel_plein' || objet=='pchit_javel_presque_plein' || objet=='pchit_javel_un_peu_vide' || objet=='pchit_javel_presque_vide') {
				ev.preventDefault();
			}
			break;



		case 'javel':
			if (objet=='pchit_javel_plein' || objet=='pchit_javel_presque_plein' || objet=='pchit_javel_presque_vide' || objet=='pchit_javel_un_peu_vide') {
				ev.preventDefault();
			}
			break;



		case 'pchit_vide':
			if (objet=='javel' || objet=='vinaigre') {
				ev.preventDefault();
			}
			break;
		case 'pchit_javel_presque_plein':
			if (objet=='javel') {
				ev.preventDefault();
			}
			break;
		case 'pchit_javel_presque_vide':
			if (objet=='javel') {
				ev.preventDefault();
			}
			break;
		case 'pchit_javel_un_peu_vide':
			if (objet=='javel') {
				ev.preventDefault();
			}
			break;
		case 'pchit_vinaigre_presque_plein':
			if (objet=='vinaigre') {
				ev.preventDefault();
			}
			break;
		case 'pchit_vinaigre_presque_vide':
			if (objet=='vinaigre') {
				ev.preventDefault();
			}
			break;
		case 'pchit_vinaigre_un_peu_vide':
			if (objet=='vinaigre') {
				ev.preventDefault();
			}
			break;



		case 'vinaigre':
			if (objet=='pchit_vinaigre_plein' || objet=='pchit_vinaigre_presque_plein' || objet=='pchit_vinaigre_presque_vide' || objet=='pchit_vinaigre_un_peu_vide') {
				ev.preventDefault();
			}
			break;



		case 'bicarbonate':
			if (objet=='brosse'){
				ev.preventDefault();
			}
			break;



		case 'poubelle':
			if (objet=='pelle_pleine') {
				ev.preventDefault();
				ev.target.src = 'medias/items/png/poubelle_ouverte.png';
			}
			break;



		case 'seau':
			if (objet=='javel' || objet=='sponge_javelisee' || objet=='brosse_imbibee' || objet=='brosse_bicarbonatee' || objet=='brosse_javelisee') {
				ev.preventDefault();
			}
			break;
		case 'seau_javelise':
			if (objet=='sponge_javelisee' || objet=='brosse_imbibee' || objet=='brosse_bicarbonatee' || objet=='brosse_javelisee') {
				ev.preventDefault();
			}
			break;

		default:
			break;
	}
}

function drop(ev) {
	ev.preventDefault();

	switch (ev.target.id) {
		case 'sol_sale':
			if (objet=='seau_javelise') {
				// Lancement du cooldown
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}

				setTimeout(function() {audio_serpilliere.play();}, 300);

				document.getElementById("jeu").insertAdjacentHTML('beforeend', '<img id="balais" src="medias/ANIMATIONS/balais/balais1.png">');
				// Lancement de l'animation du balais
				var anim_balais = setInterval(function() {
					document.getElementById("balais").src = "medias/ANIMATIONS/balais/balais"+id_balais+".png";
					id_balais++;
					console.log(id_balais);
				}, 100);

				ev.preventDefault();
				score++;
				
				setTimeout(function() {
					ev.target.id = 'sol_propre';
					ev.target.src = 'medias/environnement/sol_propre.png';
					// Détruit l'animation du balais
					var balais = document.getElementById("balais").remove();
					clearInterval(anim_balais);
					id_balais = 1;
					// Arrête le cooldown
					for (var i = 0; i < items.length; i++) {
						items[i].setAttribute('ondragstart', "drag(event);");
					}
				}, 1900);

				console.log('Le sol a été nettoyé');
				console.log('Le score actuel est de ' + score);
			}
			break;



		case 'tag1':
			if (objet=='brosse_imbibee') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}

				// Sélection aléatoire d'un SFX de brosse
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_brosse[alea].play();

				setTimeout(function() {destroy(ev);}, 1000);
			}
			break;
		case 'tag2':
			if (objet=='brosse_imbibee') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_brosse[alea].play();

				setTimeout(function() {destroy(ev);}, 1000);
			}
			break;
		case 'tag3':
			if (objet=='brosse_imbibee') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_brosse[alea].play();

				setTimeout(function() {destroy(ev);}, 1000);
			}
			break;



		case 'calcaire_couvercle':
			if (objet=='pchit_vinaigre_plein' || objet=='pchit_vinaigre_presque_plein' || objet=='pchit_vinaigre_un_peu_vide' || objet=='pchit_vinaigre_presque_vide') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				// Sélection aléatoire d'un SFX de pchit
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_pchit[alea].play();

				setTimeout(function() {
					ev.preventDefault();
					ev.target.id = 'calcaire_couvercle_vinaigre';
					for (var i = 0; i < items.length; i++) {
						items[i].setAttribute('ondragstart', "drag(event);");
					}
				}, 200);

				// A chaque utilisation du pchit, le volume de ce qu'il contient diminue.
				// On le met en image ici :
				c++;
				document.getElementById(objet).src = 'medias/items/png/' + tabl_pchit_vinaigre[c] + '.png';
				document.getElementById(objet).id = tabl_pchit_vinaigre[c];
			}
			break;
		case 'calcaire_pied':
			if (objet=='pchit_vinaigre_plein' || objet=='pchit_vinaigre_presque_plein' || objet=='pchit_vinaigre_un_peu_vide' || objet=='pchit_vinaigre_presque_vide') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_pchit[alea].play();

				setTimeout(function() {
					ev.preventDefault();
					ev.target.id = 'calcaire_pied_vinaigre';
					for (var i = 0; i < items.length; i++) {
						items[i].setAttribute('ondragstart', "drag(event);");
					}
				}, 200);

				c++;
				document.getElementById(objet).src = 'medias/items/png/' + tabl_pchit_vinaigre[c] + '.png';
				document.getElementById(objet).id = tabl_pchit_vinaigre[c];
			}
			break;
		case 'calcaire_couvercle_vinaigre':
			if (objet=='brosse_bicarbonatee') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_brosse[alea].play();

				setTimeout(function() {destroy(ev);}, 1000);
			}
			break;
		case 'calcaire_pied_vinaigre':
			if (objet=='brosse_bicarbonatee') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_brosse[alea].play();

				setTimeout(function() {destroy(ev);}, 1000);
			}
			break;

		case 'calcaire_cuvette':
			if (objet=='bicarbonate' || objet=='vinaigre' || objet=='pchit_vinaigre_plein' || objet=='pchit_vinaigre_presque_plein' || objet=='pchit_vinaigre_un_peu_vide' || objet=='pchit_vinaigre_presque_vide') {
				ev.preventDefault();
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}

				if (objet=='bicarbonate') {
					audio_bicarbonate.play();
					setTimeout(function() {
						ev.preventDefault();
						ev.target.id = 'calcaire_cuvette_bicarbonate';
						for (var i = 0; i < items.length; i++) {
							items[i].setAttribute('ondragstart', "drag(event);");
						}
					}, 200);

				} else if (objet=='vinaigre') {
					audio_verser.play();
					setTimeout(function() {
						ev.preventDefault();
						ev.target.id = 'calcaire_cuvette_vinaigre';
						for (var i = 0; i < items.length; i++) {
							items[i].setAttribute('ondragstart', "drag(event);");
						}
					}, 200);

				} else if (objet=='pchit_vinaigre_plein' || objet=='pchit_vinaigre_presque_plein' || objet=='pchit_vinaigre_un_peu_vide' || objet=='pchit_vinaigre_presque_vide') {
					var alea = Math.floor(Math.random() * Math.floor(2));
					tabl_audio_pchit[alea].play();

					setTimeout(function() {
						ev.preventDefault();
						ev.target.id = 'calcaire_cuvette_vinaigre';
						for (var i = 0; i < items.length; i++) {
							items[i].setAttribute('ondragstart', "drag(event);");
						}
					}, 200);

					c++;
					document.getElementById(objet).src = 'medias/items/png/' + tabl_pchit_vinaigre[c] + '.png';
					document.getElementById(objet).id = tabl_pchit_vinaigre[c];
				}
			}
			break;
		case 'calcaire_cuvette_bicarbonate':
			if (objet=='vinaigre') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				audio_verser.play();

				setTimeout(function() {
					ev.preventDefault();
					ev.target.id = 'calcaire_cuvette_traite';
					for (var i = 0; i < items.length; i++) {
						items[i].setAttribute('ondragstart', "drag(event);");
					}
				}, 200);
			} else if (objet=='pchit_vinaigre_presque_plein' || objet=='pchit_vinaigre_un_peu_vide' || objet=='pchit_vinaigre_presque_vide') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_pchit[alea].play();

				setTimeout(function() {
					ev.preventDefault();
					ev.target.id = 'calcaire_cuvette_traite';
					for (var i = 0; i < items.length; i++) {
						items[i].setAttribute('ondragstart', "drag(event);");
					}
				}, 200);

				c++;
				document.getElementById(objet).src = 'medias/items/png/' + tabl_pchit_vinaigre[c] + '.png';
				document.getElementById(objet).id = tabl_pchit_vinaigre[c];
			}
			break;
		case 'calcaire_cuvette_vinaigre':
			if (objet=='bicarbonate') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				audio_bicarbonate.play();
				setTimeout(function() {
					ev.preventDefault();
					ev.target.id = 'calcaire_cuvette_traite';
					for (var i = 0; i < items.length; i++) {
						items[i].setAttribute('ondragstart', "drag(event);");
					}
				}, 200);
			}
			break;
		case 'calcaire_cuvette_traite':
			if (objet=='brosseWC') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_brosse[alea].play();

				setTimeout(function() {destroy(ev);}, 1000);
			}
			break;



		case 'mousse_chasse_deau':
			if (objet=='pchit_javel_plein' || objet=='pchit_javel_presque_plein' || objet=='pchit_javel_un_peu_vide' || objet=='pchit_javel_presque_vide') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_pchit[alea].play();

				setTimeout(function() {
					ev.preventDefault();
					ev.target.id = 'mousse_chasse_deau_traitee';
					for (var i = 0; i < items.length; i++) {
						items[i].setAttribute('ondragstart', "drag(event);");
					}
				}, 200);

				c++;
				document.getElementById(objet).src = 'medias/items/png/' + tabl_pchit_javel[c] + '.png';
				document.getElementById(objet).id = tabl_pchit_javel[c];
			}
			break;
		case 'mousse_cuvette_ext':
			if (objet=='pchit_javel_plein' || objet=='pchit_javel_presque_plein' || objet=='pchit_javel_un_peu_vide' || objet=='pchit_javel_presque_vide') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_pchit[alea].play();

				setTimeout(function() {
					ev.preventDefault();
					ev.target.id = 'mousse_cuvette_ext_traitee';
					for (var i = 0; i < items.length; i++) {
						items[i].setAttribute('ondragstart', "drag(event);");
					}
				}, 200);

				c++;
				document.getElementById(objet).src = 'medias/items/png/' + tabl_pchit_javel[c] + '.png';
				document.getElementById(objet).id = tabl_pchit_javel[c];
			}
			break;
		case 'mousse_cuvette_int':
			if (objet=='javel') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				audio_verser.play();

				setTimeout(function () {
					ev.preventDefault();
					ev.target.id = 'mousse_cuvette_int_traitee';
					for (var i = 0; i < items.length; i++) {
						items[i].setAttribute('ondragstart', "drag(event);");
					}
				}, 200);
			} else if (objet=='pchit_javel_plein' || objet=='pchit_javel_presque_plein' || objet=='pchit_javel_un_peu_vide' || objet=='pchit_javel_presque_vide') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_pchit[alea].play();

				setTimeout(function () {
					ev.preventDefault();
					ev.target.id = 'mousse_cuvette_int_traitee';
					for (var i = 0; i < items.length; i++) {
						items[i].setAttribute('ondragstart', "drag(event);");
					}
				}, 200);

				c++;
				document.getElementById(objet).src = 'medias/items/png/' + tabl_pchit_javel[c] + '.png';
				document.getElementById(objet).id = tabl_pchit_javel[c];
			}
			break;
		case 'mousse_chasse_deau_traitee':
			if (objet=='brosse') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_brosse[alea].play();

				setTimeout(function() {destroy(ev);}, 1000);
			}
			break;
		case 'mousse_cuvette_ext_traitee':
			if (objet=='brosse') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_brosse[alea].play();

				setTimeout(function() {destroy(ev);}, 1000);
			}
			break;
		case 'mousse_cuvette_int_traitee':
			if (objet=='brosseWC') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_brosse[alea].play();

				setTimeout(function() {destroy(ev);}, 1000);
			}
			break;



		case 'pisse_couvercle':
			if (objet=='sponge_javelisee') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				var alea = Math.floor(Math.random() * Math.floor(3));
				tabl_audio_sponge[alea].play();

				setTimeout(function() {destroy(ev);}, 1000);
			}
			break;
		case 'pisse_cuvette':
			if (objet=='sponge_javelisee') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				var alea = Math.floor(Math.random() * Math.floor(3));
				tabl_audio_sponge[alea].play();

				setTimeout(function() {destroy(ev);}, 1000);
			}
			break;
		case 'pisse_sol':
			if (objet=='seau_javelise') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				setTimeout(function() {audio_serpilliere.play();}, 300);

				document.getElementById("jeu").insertAdjacentHTML('beforeend', '<img id="balais" src="medias/ANIMATIONS/balais/balais1.png">');
				var anim_balais = setInterval(function() {
					document.getElementById("balais").src = "medias/ANIMATIONS/balais/balais"+id_balais+".png";
					id_balais++;
					console.log(id_balais);
				}, 100);

				ev.preventDefault();
				
				setTimeout(function() {
					destroy(ev);
					var balais = document.getElementById("balais").remove();
					clearInterval(anim_balais);
					id_balais = 1;
					for (var i = 0; i < items.length; i++) {
						items[i].setAttribute('ondragstart', "drag(event);");
					}
				}, 1900);
			}
			break;



		case 'caca_cuvette_1':
			if (objet=='pelle_vide') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				audio_pelle_remplie.play();
				setTimeout(function() {destroy(ev);}, 200);

				document.getElementById(objet).src = 'medias/items/png/pelle_pleine.png';
				document.getElementById(objet).id = 'pelle_pleine';
			}
			break;

		case 'caca_cuvette_2':
			if (objet=='pelle_vide') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				audio_pelle_remplie.play();
				setTimeout(function() {destroy(ev);}, 200);

				document.getElementById(objet).src = 'medias/items/png/pelle_pleine.png';
				document.getElementById(objet).id = 'pelle_pleine';
			}
			break;

		case 'caca_cuvette_3':
			if (objet=='pelle_vide') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				audio_pelle_remplie.play();
				setTimeout(function() {destroy(ev);}, 200);

				document.getElementById(objet).src = 'medias/items/png/pelle_pleine.png';
				document.getElementById(objet).id = 'pelle_pleine';
			}
			break;

		case 'caca_pied':
			if (objet=='pelle_vide') {
				for (var i = 0; i < items.length; i++) {
					items[i].setAttribute('ondragstart', "return false;");
				}
				
				audio_pelle_remplie.play();
				setTimeout(function() {destroy(ev);}, 200);

				document.getElementById(objet).src = 'medias/items/png/pelle_pleine.png';
				document.getElementById(objet).id = 'pelle_pleine';
			}
			break;


		// INTERACTIONS AVEC D'AUTRES OBJETS //
		case 'sponge':
			if (objet=='javel') {
				audio_verser.play();

				ev.preventDefault();
				ev.target.id = 'sponge_javelisee';
				ev.target.src = 'medias/items/png/sponge_javelisee.png';
			} else if (objet=='pchit_javel_plein' || objet=='pchit_javel_presque_plein' || objet=='pchit_javel_un_peu_vide' || objet=='pchit_javel_presque_vide') {
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_pchit[alea].play();

				ev.preventDefault();
				ev.target.id = 'sponge_javelisee';
				ev.target.src = 'medias/items/png/sponge_javelisee.png';

				c++;
				document.getElementById(objet).src = 'medias/items/png/' + tabl_pchit_javel[c] + '.png';
				document.getElementById(objet).id = tabl_pchit_javel[c];
			}
			break;



		case 'brosse':
			if (objet=='bicarbonate') {
				audio_bicarbonate.play();

				ev.preventDefault();
				ev.target.id = 'brosse_bicarbonatee';
				ev.target.src = 'medias/items/png/brosse_bicarbonatee.png';
			} else if (objet=='pchit_javel_plein' || objet=='pchit_javel_presque_plein' || objet=='pchit_javel_un_peu_vide' || objet=='pchit_javel_presque_vide') {
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_pchit[alea].play();

				ev.preventDefault();
				ev.target.id = 'brosse_javelisee';
				ev.target.src = 'medias/items/png/brosse_javelisee.png';

				c++;
				document.getElementById(objet).src = 'medias/items/png/' + tabl_pchit_javel[c] + '.png';
				document.getElementById(objet).id = tabl_pchit_javel[c];
			}
			break;

		case 'brosse_javelisee':
			if (objet=='bicarbonate') {
				audio_bicarbonate.play();

				ev.preventDefault();
				ev.target.id = 'brosse_imbibee';
				ev.target.src = 'medias/items/png/brosse_imbibee.png';
			}
			break;

		case 'brosse_bicarbonatee':
			if (objet=='pchit_javel_plein' || objet=='pchit_javel_presque_plein' || objet=='pchit_javel_un_peu_vide' || objet=='pchit_javel_presque_vide') {
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_pchit[alea].play();

				ev.preventDefault();
				ev.target.id = 'brosse_imbibee';
				ev.target.src = 'medias/items/png/brosse_imbibee.png';

				c++;
				document.getElementById(objet).src = 'medias/items/png/' + tabl_pchit_javel[c] + '.png';
				document.getElementById(objet).id = tabl_pchit_javel[c];
			}
			break;



		case 'javel':
			if (objet=='pchit_javel_plein' || objet=='pchit_javel_presque_plein' || objet=='pchit_javel_presque_vide' || objet=='pchit_javel_un_peu_vide') {
				audio_verser.play();

				ev.preventDefault();
				document.getElementById(objet).src = 'medias/items/png/pchit_vide.png';
				document.getElementById(objet).id = 'pchit_vide';
				c=4;
			}
			break;



		case 'pchit_vide':
			if (objet=='javel') {
				audio_verser.play();

				ev.preventDefault();
				ev.target.id = 'pchit_javel_plein';
				ev.target.src = 'medias/items/png/pchit_javel_plein.png';
				c=0;
			} else if (objet=='vinaigre') {
				audio_verser.play();

				ev.preventDefault();
				ev.target.id = 'pchit_vinaigre_plein';
				ev.target.src = 'medias/items/png/pchit_vinaigre_plein.png';
				c=0;
			}
			break;

		case 'pchit_javel_presque_plein':
			if (objet=='javel') {
				audio_verser.play();

				ev.preventDefault();
				ev.target.id = 'pchit_javel_plein';
				ev.target.src = 'medias/items/png/pchit_javel_plein.png';
				c=0;
			}
			break;
		case 'pchit_javel_presque_vide':
			if (objet=='javel') {
				audio_verser.play();

				ev.preventDefault();
				ev.target.id = 'pchit_javel_plein';
				ev.target.src = 'medias/items/png/pchit_javel_plein.png';
				c=0;
			}
			break;
		case 'pchit_javel_un_peu_vide':
			if (objet=='javel') {
				audio_verser.play();

				ev.preventDefault();
				ev.target.id = 'pchit_javel_plein';
				ev.target.src = 'medias/items/png/pchit_javel_plein.png';
				c=0;
			}
			break;

		case 'pchit_vinaigre_presque_plein':
			if (objet=='vinaigre') {
				audio_verser.play();

				ev.preventDefault();
				ev.target.id = 'pchit_vinaigre_plein';
				ev.target.src = 'medias/items/png/pchit_vinaigre_plein.png';
				c=0;
			}
			break;
		case 'pchit_vinaigre_presque_vide':
			if (objet=='vinaigre') {
				audio_verser.play();

				ev.preventDefault();
				ev.target.id = 'pchit_vinaigre_plein';
				ev.target.src = 'medias/items/png/pchit_vinaigre_plein.png';
				c=0;
			}
			break;
		case 'pchit_vinaigre_un_peu_vide':
			if (objet=='vinaigre') {
				audio_verser.play();

				ev.preventDefault();
				ev.target.id = 'pchit_vinaigre_plein';
				ev.target.src = 'medias/items/png/pchit_vinaigre_plein.png';
				c=0;
			}
			break;



		case 'vinaigre':
			if (objet=='pchit_vinaigre_plein' || objet=='pchit_vinaigre_presque_plein' || objet=='pchit_vinaigre_presque_vide' || objet=='pchit_vinaigre_un_peu_vide') {
				audio_verser.play();

				ev.preventDefault();
				document.getElementById(objet).src = 'medias/items/png/pchit_vide.png';
				document.getElementById(objet).id = 'pchit_vide';
				c=4;
			}
			break;



		case 'bicarbonate':
			if (objet=='brosse'){
				audio_bicarbonate.play();

				ev.preventDefault();
				document.getElementById(objet).src = 'medias/items/png/brosse_bicarbonatee.png';
				document.getElementById(objet).id = 'brosse_bicarbonatee';
			}
			break;



		case 'poubelle':
			if (objet=='pelle_pleine') {
				audio_pelle_vidage.play();

				setTimeout(function() {
					ev.preventDefault();
					ev.target.src = 'medias/items/png/poubelle_fermee.png';
				}, 540);

				document.getElementById(objet).src = 'medias/items/png/pelle_vide.png';
				document.getElementById(objet).id = 'pelle_vide';
			}
			break;



		case 'seau':
			if (objet=='javel') {
				audio_verser.play();

				setTimeout(function() {
					ev.preventDefault();
					ev.target.id = 'seau_javelise';
					ev.target.src = 'medias/items/png/seau_javelise.png';
				}, 260);
			} else if (objet=='sponge_javelisee') {
				audio_plouf.play();

				ev.preventDefault();
				document.getElementById(objet).src = 'medias/items/png/sponge.png';
				document.getElementById(objet).id = 'sponge';
			} else if (objet=='brosse_imbibee' || objet=='brosse_bicarbonatee' || objet=='brosse_javelisee') {
				audio_plouf.play();

				ev.preventDefault();
				document.getElementById(objet).src = 'medias/items/png/brosse.png';
				document.getElementById(objet).id = 'brosse';
			}
			break;

		case 'seau_javelise':
			if (objet=='sponge_javelisee') {
				audio_plouf.play();

				ev.preventDefault();
				document.getElementById(objet).src = 'medias/items/png/sponge.png';
				document.getElementById(objet).id = 'sponge';
			} else if (objet=='brosse_imbibee' || objet=='brosse_bicarbonatee' || objet=='brosse_javelisee') {
				audio_plouf.play();

				ev.preventDefault();
				document.getElementById(objet).src = 'medias/items/png/brosse.png';
				document.getElementById(objet).id = 'brosse';
			}
			break;

		default:
			console.log('ERREUR');
			break;
	}

  	return score;
}