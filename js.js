var objet = "none";
var moves = 0;
var score = 0;
var c = 0;
var m = 0;
var id_balais = 1;
var items = document.getElementsByClassName("items");

// Volume musique
document.getElementById('idle_music').volume = 0.30;

// Tableau pour le monologue
var tabl_monolog = ['Bien le bonjour et bienvenue dans les toilettes de mon humble établissement, bien évidemment.',
					'Comme vous pouvez le constater, ceux-ci ont été souillés par de vils personnages !',
					'J\'aimerais pouvoir les nettoyer moi-même mais mon emploi du temps m\'en empêche. M\'accorderiez-vous l\'obligeance de vous en occuper à ma place ?',
					'Afin de rendre à ces latrines leur traditionnelle lueur, j\'ai moi-même modestement noté des instructions qui vous aideront à réaliser cette désagréable tâche, bien évidemment.',
					
					// STEP 1
					'Je ne sais point quel malotru s\'est amusé à réaliser de telles sottises, mais à vous dire vrai, j\'espère vraiment que le personnel de mon humble établissement saura lui mettre le grappin dessus.',
					'Mais trêve de mondanités, je m\'égare !',
					'Pour ce faire, une brosse imbibée est fortement recommandée, bien évidemment.',
					'Celle-ci s\'obtient de la façon suivante : vous devez vaporiser de la javel et verser du bicarbonate sur la brosse.',
					'Une fois ceci fait, vous aurez l\'immense privilège de nettoyer le mur de ce que je considère comme ma seconde demeure afin de retirer toute trace de cet acte malgracieux.',
					'N\'oubliez point d’essorer la brosse dans le seau juste après cela, bien évidemment.',
					
					// STEP 2
					'Veuillez observer l\'acte barbare réalisé par un scélérat de la même trempe que le précédent.',
					'Cet événement me rappelle une sombre affaire dans laquelle était impliqué feu mon oncle...',
					'Oh, veuillez excuser mon comportement, je me fourvoie une fois de plus.',
					'Afin de mener à bien ce baroud contre la mal propreté, vous aurez besoin d\'une pelle, vide bien évidemment, qui vous permettra de récolter une par une ces déjections.',
					'Une fois justice faite, car nulle bouse devrait se trouver sur le bord d\'un WC, il vous faut les vider dans la poubelle, bien évidemment.',

					// STEP 3
					'Que cet infâme personnage aille au diable !',
					'Je ne sais point de quelle façon il est possible de pissoter ainsi, mais il faut vraiment être un poltron pour plier bagage sans prévenir la réception.',
					'La marche à suivre pour éliminer ces impuretés est accessible à toute gent, qu\'elle fasse partie de ma caste ou bien de celle comparable aux plébéiens.',
					'À cet égard, une éponge imbibée de javel est nécessaire pour les traces présentes sur la cuvette et le couvercle des latrines.',
					'Celles situées au sol requièrent un seau rempli de javel.',
					'ATTENTION !',
					'Vous devez nettoyer les traces de la cuvette avant de penser à vous occuper de son nettoyage complet !',
					'Vous pouvez bien évidemment rincer l\'éponge dans le seau.',

					// STEP 4
					'Je ne comprends point mes subordonnés... Comment diable peut-on laisser de telles immondices se déployer ainsi ?',
					'Bon, ressaisissons-nous... Et trêve de bavardage.',
					'Bien évidemment.',
					'Avant toute chose, il vous faut remplir le vaporisateur de javel afin d\'en pulvériser sur ces moultes déchets d\'humidité.',
					'Ceci fait, vous pouvez lui rendre sa pureté en passant la brosse dessus.',
					'Pour celles présentes dans les WC, la brosse de toilettes est nécessaire, bien évidemment.',
					'Dans le cas où du produit est déposé sur la brosse, il vous est impossible de brosser la moisissure.',

					// STEP 5
					'Il est impressionnant de voir ce sédiment être présent dans de si improbables recoins.',
					'De la même façon que l’on nettoie son robinet (dans le cas où celui-ci présente des traces de calcaire, bien évidemment), vous aurez besoin de vinaigre blanc, de bicarbonate, ainsi que d’une brosse.',
					'Pulvérisez le premier sur les tâches, versez du bicarbonate dessus, puis brossez.',
					'ATTENTION !',
					'Le bicarbonate ne peut être versé que dans la cuvette !',
					'Pour le couvercle et le pied des WC, vous devez le verser sur la brosse, puis brosser (après pulvérisation du vinaigre blanc, bien évidemment).',

					// STEP 6
					'La dernière étape ! Et probablement la plus simple et intuitive à réaliser, de toute évidence.',
					'Pour ce faire, versez de la javel dans le seau et amenez le sur le sol maculé.',
					'Le magnifique balai que nous possédons se chargera du reste.',
					'J\'ai oublié de vous prévenir, s’il vous reste du vinaigre blanc ou de la javel dans votre vaporisateur, vous devez le vider dans la bouteille du contenu adéquat, bien évidemment.',

					// FIN
					'Bien. Je pense que cela suffira, bien évidemment.',
					'In fine, je désire vous apporter ma gratitude pour votre intervention.',
					'Sans vous, cette salle d\'eau ne saurait retrouver sa jeunesse étincelante.',
					'Je vous présente mes salutations et vous laisse à vos dépends, bien évidemment, très cher ami.'];

// Ces tableaux qui permettent de mettre en image les différents volumes de produit dans le pulvérisateur
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
var audio_button_hover = new Audio('medias/SOUNDS/button-up.mp3');
var audio_button_click = new Audio('medias/SOUNDS/button-down.mp3');

// Ajustement du volume de chaque SFX
audio_chasse_deau.volume = 0.8;
audio_bicarbonate.volume = 0.4;
audio_brosse1.volume = 0.7;
audio_brosse2.volume = 0.7;
audio_pchit1.volume = 1;
audio_pchit2.volume = 1;
audio_pelle_remplie.volume = 0.4;
audio_pelle_vidage.volume = 1;
audio_plouf.volume = 0.3;
audio_sponge1.volume = 0.6;
audio_sponge2.volume = 0.6;
audio_sponge3.volume = 0.6;
audio_verser.volume = 1;
audio_serpilliere.volume = 1;
audio_button_click.volume = 0.18;
audio_button_hover.volume = 0.18;

// On utilise des tableaux pour les items ayant plusieurs SFX (sélection aléatoire)
var tabl_audio_brosse = [audio_brosse1, audio_brosse2];
var tabl_audio_pchit = [audio_pchit1, audio_pchit2];
var tabl_audio_sponge = [audio_sponge1, audio_sponge2, audio_sponge3];


function update() {
	document.getElementById('scoreboard').innerHTML = 'Score : ' + score + '<br> Mouvements : ' + moves;
}
update();

function validate() {
	audio_chasse_deau.play();
	if (score == 17) {
		alert("Bravo ! Les toilettes sont archis propres ! Tu as réalisé " + moves + " mouvements.");
	} else if (score == 0) {
		alert("Tu rigoles ? T'as encore rien fait ! BOSSE UN PEU, ET PLUS VITE ! Ton score est de " + score + " avec " + moves + " mouvements.");
	} else if (score > 0 && score < 12) {
		alert("Non ! Les toilettes ne sont pas propres, tout doit être lavé ! Ton score est de " + score + " avec " + moves + " mouvements.");
	} else if (score >= 12 && score < 17) {
		alert("Bof... Les toilettes sont presque propres, mais il resque quelques saletés ! Ton score est de " + score + " avec " + moves + " mouvements.");
	}
}

function count_moves() {
	moves++;
	console.log('--- Mouvement ' + moves + ' :');
	update();
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
	update();
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
				}, 100);

				ev.preventDefault();
				score++;
				update();
				
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
				switch (c) {
					case 0:
						document.getElementById(objet).title = 'Pulvérisateur rempli de vinaigre ménager';
						break;
					case 1:
						document.getElementById(objet).title = 'Pulvérisateur presque rempli de vinaigre ménager';
						break;
					case 2:
						document.getElementById(objet).title = 'Pulvérisateur à moitié rempli de vinaigre ménager';
						break;
					case 3:
						document.getElementById(objet).title = 'Pulvérisateur presque vide de vinaigre ménager';
						break;
					case 4:
						document.getElementById(objet).title = 'Pulvérisateur vide';
						break;
				}
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
				switch (c) {
					case 0:
						document.getElementById(objet).title = 'Pulvérisateur rempli de vinaigre ménager';
						break;
					case 1:
						document.getElementById(objet).title = 'Pulvérisateur presque rempli de vinaigre ménager';
						break;
					case 2:
						document.getElementById(objet).title = 'Pulvérisateur à moitié rempli de vinaigre ménager';
						break;
					case 3:
						document.getElementById(objet).title = 'Pulvérisateur presque vide de vinaigre ménager';
						break;
					case 4:
						document.getElementById(objet).title = 'Pulvérisateur vide';
						break;
				}
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
					switch (c) {
						case 0:
							document.getElementById(objet).title = 'Pulvérisateur rempli de vinaigre ménager';
							break;
						case 1:
							document.getElementById(objet).title = 'Pulvérisateur presque rempli de vinaigre ménager';
							break;
						case 2:
							document.getElementById(objet).title = 'Pulvérisateur à moitié rempli de vinaigre ménager';
							break;
						case 3:
							document.getElementById(objet).title = 'Pulvérisateur presque vide de vinaigre ménager';
							break;
						case 4:
							document.getElementById(objet).title = 'Pulvérisateur vide';
							break;
					}
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
				switch (c) {
					case 0:
						document.getElementById(objet).title = 'Pulvérisateur rempli de vinaigre ménager';
						break;
					case 1:
						document.getElementById(objet).title = 'Pulvérisateur presque rempli de vinaigre ménager';
						break;
					case 2:
						document.getElementById(objet).title = 'Pulvérisateur à moitié rempli de vinaigre ménager';
						break;
					case 3:
						document.getElementById(objet).title = 'Pulvérisateur presque vide de vinaigre ménager';
						break;
					case 4:
						document.getElementById(objet).title = 'Pulvérisateur vide';
						break;
				}
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
				switch (c) {
					case 0:
						document.getElementById(objet).title = 'Pulvérisateur rempli de javel';
						break;
					case 1:
						document.getElementById(objet).title = 'Pulvérisateur presque rempli de javel';
						break;
					case 2:
						document.getElementById(objet).title = 'Pulvérisateur à moitié rempli de javel';
						break;
					case 3:
						document.getElementById(objet).title = 'Pulvérisateur presque vide de javel';
						break;
					case 4:
						document.getElementById(objet).title = 'Pulvérisateur vide';
						break;
				}
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
				switch (c) {
					case 0:
						document.getElementById(objet).title = 'Pulvérisateur rempli de javel';
						break;
					case 1:
						document.getElementById(objet).title = 'Pulvérisateur presque rempli de javel';
						break;
					case 2:
						document.getElementById(objet).title = 'Pulvérisateur à moitié rempli de javel';
						break;
					case 3:
						document.getElementById(objet).title = 'Pulvérisateur presque vide de javel';
						break;
					case 4:
						document.getElementById(objet).title = 'Pulvérisateur vide';
						break;
				}
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
				switch (c) {
					case 0:
						document.getElementById(objet).title = 'Pulvérisateur rempli de javel';
						break;
					case 1:
						document.getElementById(objet).title = 'Pulvérisateur presque rempli de javel';
						break;
					case 2:
						document.getElementById(objet).title = 'Pulvérisateur à moitié rempli de javel';
						break;
					case 3:
						document.getElementById(objet).title = 'Pulvérisateur presque vide de javel';
						break;
					case 4:
						document.getElementById(objet).title = 'Pulvérisateur vide';
						break;
				}
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
				ev.target.title = 'Eponge imbibée de javel';
			} else if (objet=='pchit_javel_plein' || objet=='pchit_javel_presque_plein' || objet=='pchit_javel_un_peu_vide' || objet=='pchit_javel_presque_vide') {
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_pchit[alea].play();

				ev.preventDefault();
				ev.target.id = 'sponge_javelisee';
				ev.target.src = 'medias/items/png/sponge_javelisee.png';
				ev.target.title = 'Eponge imbibée de javel';

				c++;
				switch (c) {
					case 0:
						document.getElementById(objet).title = 'Pulvérisateur rempli de javel';
						break;
					case 1:
						document.getElementById(objet).title = 'Pulvérisateur presque rempli de javel';
						break;
					case 2:
						document.getElementById(objet).title = 'Pulvérisateur à moitié rempli de javel';
						break;
					case 3:
						document.getElementById(objet).title = 'Pulvérisateur presque vide de javel';
						break;
					case 4:
						document.getElementById(objet).title = 'Pulvérisateur vide';
						break;
				}
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
				ev.target.title = 'Brosse soupoudrée de bicarbonate';
			} else if (objet=='pchit_javel_plein' || objet=='pchit_javel_presque_plein' || objet=='pchit_javel_un_peu_vide' || objet=='pchit_javel_presque_vide') {
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_pchit[alea].play();

				ev.preventDefault();
				ev.target.id = 'brosse_javelisee';
				ev.target.src = 'medias/items/png/brosse_javelisee.png';
				ev.target.title = 'Brosse humidifiée par de la javel';

				c++;
				switch (c) {
					case 0:
						document.getElementById(objet).title = 'Pulvérisateur rempli de javel';
						break;
					case 1:
						document.getElementById(objet).title = 'Pulvérisateur presque rempli de javel';
						break;
					case 2:
						document.getElementById(objet).title = 'Pulvérisateur à moitié rempli de javel';
						break;
					case 3:
						document.getElementById(objet).title = 'Pulvérisateur presque vide de javel';
						break;
					case 4:
						document.getElementById(objet).title = 'Pulvérisateur vide';
						break;
				}
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
				ev.target.title = 'Brosse imbibée de javel et de bicarbonate';
			}
			break;

		case 'brosse_bicarbonatee':
			if (objet=='pchit_javel_plein' || objet=='pchit_javel_presque_plein' || objet=='pchit_javel_un_peu_vide' || objet=='pchit_javel_presque_vide') {
				var alea = Math.floor(Math.random() * Math.floor(2));
				tabl_audio_pchit[alea].play();

				ev.preventDefault();
				ev.target.id = 'brosse_imbibee';
				ev.target.src = 'medias/items/png/brosse_imbibee.png';
				ev.target.title = 'Brosse imbibée de javel et de bicarbonate';

				c++;
				switch (c) {
					case 0:
						document.getElementById(objet).title = 'Pulvérisateur rempli de javel';
						break;
					case 1:
						document.getElementById(objet).title = 'Pulvérisateur presque rempli de javel';
						break;
					case 2:
						document.getElementById(objet).title = 'Pulvérisateur à moitié rempli de javel';
						break;
					case 3:
						document.getElementById(objet).title = 'Pulvérisateur presque vide de javel';
						break;
					case 4:
						document.getElementById(objet).title = 'Pulvérisateur vide';
						break;
				}
				document.getElementById(objet).src = 'medias/items/png/' + tabl_pchit_javel[c] + '.png';
				document.getElementById(objet).id = tabl_pchit_javel[c];
			}
			break;



		case 'javel':
			if (objet=='pchit_javel_plein' || objet=='pchit_javel_presque_plein' || objet=='pchit_javel_presque_vide' || objet=='pchit_javel_un_peu_vide') {
				audio_verser.play();

				ev.preventDefault();
				document.getElementById(objet).src = 'medias/items/png/pchit_vide.png';
				document.getElementById(objet).title = 'Pulvérisateur vide';
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
				ev.target.title = 'Pulvérisateur rempli de javel';
				c=0;
			} else if (objet=='vinaigre') {
				audio_verser.play();

				ev.preventDefault();
				ev.target.id = 'pchit_vinaigre_plein';
				ev.target.src = 'medias/items/png/pchit_vinaigre_plein.png';
				ev.target.title = 'Pulvérisateur rempli de vinaigre ménager'
				c=0;
			}
			break;

		case 'pchit_javel_presque_plein':
			if (objet=='javel') {
				audio_verser.play();

				ev.preventDefault();
				ev.target.id = 'pchit_javel_plein';
				ev.target.src = 'medias/items/png/pchit_javel_plein.png';
				ev.target.title = 'Pulvérisateur rempli de javel';
				c=0;
			}
			break;
		case 'pchit_javel_presque_vide':
			if (objet=='javel') {
				audio_verser.play();

				ev.preventDefault();
				ev.target.id = 'pchit_javel_plein';
				ev.target.src = 'medias/items/png/pchit_javel_plein.png';
				ev.target.title = 'Pulvérisateur rempli de javel';
				c=0;
			}
			break;
		case 'pchit_javel_un_peu_vide':
			if (objet=='javel') {
				audio_verser.play();

				ev.preventDefault();
				ev.target.id = 'pchit_javel_plein';
				ev.target.src = 'medias/items/png/pchit_javel_plein.png';
				ev.target.title = 'Pulvérisateur rempli de javel';
				c=0;
			}
			break;

		case 'pchit_vinaigre_presque_plein':
			if (objet=='vinaigre') {
				audio_verser.play();

				ev.preventDefault();
				ev.target.id = 'pchit_vinaigre_plein';
				ev.target.src = 'medias/items/png/pchit_vinaigre_plein.png';
				ev.target.title = 'Pulvérisateur rempli de vinaigre ménager';
				c=0;
			}
			break;
		case 'pchit_vinaigre_presque_vide':
			if (objet=='vinaigre') {
				audio_verser.play();

				ev.preventDefault();
				ev.target.id = 'pchit_vinaigre_plein';
				ev.target.src = 'medias/items/png/pchit_vinaigre_plein.png';
				ev.target.title = 'Pulvérisateur rempli de vinaigre ménager';
				c=0;
			}
			break;
		case 'pchit_vinaigre_un_peu_vide':
			if (objet=='vinaigre') {
				audio_verser.play();

				ev.preventDefault();
				ev.target.id = 'pchit_vinaigre_plein';
				ev.target.src = 'medias/items/png/pchit_vinaigre_plein.png';
				ev.target.title = 'Pulvérisateur rempli de vinaigre ménager';
				c=0;
			}
			break;



		case 'vinaigre':
			if (objet=='pchit_vinaigre_plein' || objet=='pchit_vinaigre_presque_plein' || objet=='pchit_vinaigre_presque_vide' || objet=='pchit_vinaigre_un_peu_vide') {
				audio_verser.play();

				ev.preventDefault();
				document.getElementById(objet).title = 'Pulvérisateur vide';
				document.getElementById(objet).src = 'medias/items/png/pchit_vide.png';
				document.getElementById(objet).id = 'pchit_vide';
				c=4;
			}
			break;



		case 'bicarbonate':
			if (objet=='brosse'){
				audio_bicarbonate.play();

				ev.preventDefault();
				document.getElementById(objet).title = 'Brosse soupoudrée de bicarbonate';
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
					ev.target.title = 'Seau d\'eau mélangée à de la javel';
				}, 260);
			} else if (objet=='sponge_javelisee') {
				audio_plouf.play();

				ev.preventDefault();
				document.getElementById(objet).title = 'Eponge';
				document.getElementById(objet).src = 'medias/items/png/sponge.png';
				document.getElementById(objet).id = 'sponge';
			} else if (objet=='brosse_imbibee' || objet=='brosse_bicarbonatee' || objet=='brosse_javelisee') {
				audio_plouf.play();

				ev.preventDefault();
				document.getElementById(objet).title = 'Brosse simple';
				document.getElementById(objet).src = 'medias/items/png/brosse.png';
				document.getElementById(objet).id = 'brosse';
			}
			break;

		case 'seau_javelise':
			if (objet=='sponge_javelisee') {
				audio_plouf.play();

				ev.preventDefault();
				document.getElementById(objet).title = 'Eponge';
				document.getElementById(objet).src = 'medias/items/png/sponge.png';
				document.getElementById(objet).id = 'sponge';
			} else if (objet=='brosse_imbibee' || objet=='brosse_bicarbonatee' || objet=='brosse_javelisee') {
				audio_plouf.play();

				ev.preventDefault();
				document.getElementById(objet).title = 'Brosse simple';
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


function monolog_prev() {
	audio_button_click.play();
	if (m > 0) {
		m--;
		document.getElementById("monologue").innerHTML = tabl_monolog[m];
		
		if (m<4) {
			document.getElementById("titre-monologue").innerHTML = "Tutoriel - Partie 0 : Introduction.";
		}
		else if (m>3 && m<10) {
			document.getElementById("titre-monologue").innerHTML = "Tutoriel - Partie 1 : Nettoyer les grafitis.";
		}
		else if (m>9 && m<15) {
			document.getElementById("titre-monologue").innerHTML = "Tutoriel - Partie 2 : Ramasser les excréments.";
		}
		else if (m>14 && m<23) {
			document.getElementById("titre-monologue").innerHTML = "Tutoriel - Partie 3 : Nettoyer l'urine.";
		}
		else if (m>22 && m<30) {
			document.getElementById("titre-monologue").innerHTML = "Tutoriel - Partie 4 : La moisissure.";
		}
		else if (m>29 && m<36) {
			document.getElementById("titre-monologue").innerHTML = "Tutoriel - Partie 5 : Retirer le calcaire.";
		}
		else if (m>35 && m<40) {
			document.getElementById("titre-monologue").innerHTML = "Tutoriel - Partie 6 : Nettoyage du sol.";
		}
		else if (m>39) {
			document.getElementById("titre-monologue").innerHTML = "Tutoriel - Partie 7 : Conclusion.";
		}
	}
	return m;
}
function monolog_next() {
	audio_button_click.play();
	if (m < tabl_monolog.length-1) {
		m++;
		document.getElementById("monologue").innerHTML = tabl_monolog[m];
		
		if (m<4) {
			document.getElementById("titre-monologue").innerHTML = "Tutoriel - Partie 0 : Introduction.";
		}
		else if (m>3 && m<10) {
			document.getElementById("titre-monologue").innerHTML = "Tutoriel - Partie 1 : Nettoyer les grafitis.";
		}
		else if (m>9 && m<15) {
			document.getElementById("titre-monologue").innerHTML = "Tutoriel - Partie 2 : Ramasser les excréments.";
		}
		else if (m>14 && m<23) {
			document.getElementById("titre-monologue").innerHTML = "Tutoriel - Partie 3 : Nettoyer l'urine.";
		}
		else if (m>22 && m<30) {
			document.getElementById("titre-monologue").innerHTML = "Tutoriel - Partie 4 : La moisissure.";
		}
		else if (m>29 && m<36) {
			document.getElementById("titre-monologue").innerHTML = "Tutoriel - Partie 5 : Retirer le calcaire.";
		}
		else if (m>35 && m<40) {
			document.getElementById("titre-monologue").innerHTML = "Tutoriel - Partie 6 : Nettoyage du sol.";
		}
		else if (m>39) {
			document.getElementById("titre-monologue").innerHTML = "Tutoriel - Partie 7 : Conclusion.";
		}
	}
	return m;
}
function update_meowzart() {
	if(m==3 || m==5 || m==7 || m==19 || m==22 || m==24 || m==27 || m==30 || m==35 || m==40 || m==42) {
		document.getElementById("meowzart").src = "medias/meowzart/meowzart-calme.png";
	}
	else if (m==10 || m==15 || m==16) {
		document.getElementById("meowzart").src = "medias/meowzart/meowzart-colere.png";
	}
	else if (m==14 || m==18 || m==26 || m==32 || m==37) {
		document.getElementById("meowzart").src = "medias/meowzart/meowzart-montre.png";
	}
	else if (m==11 || m==23) {
		document.getElementById("meowzart").src = "medias/meowzart/meowzart-triste.png";
	}
	else if (m==0 || m==6 || m==8 || m==12 || m==13 || m==17 || m==25 || m==29 || m==31 || m==36 || m==39 || m==41 || m==43) {
		document.getElementById("meowzart").src = "medias/meowzart/meowzart-face-calme.png";
	}
	else if (m==4 || m==20 || m==33) {
		document.getElementById("meowzart").src = "medias/meowzart/meowzart-face-colere.png";
	}
	else if (m==1 || m==9 || m==21 || m==28 || m==34) {
		document.getElementById("meowzart").src = "medias/meowzart/meowzart-face-montre.png";
	}
	else if (m==2) {
		document.getElementById("meowzart").src = "medias/meowzart/meowzart-face-triste.png";
	}
	else if (m==38) {
		document.getElementById("meowzart").src = "medias/meowzart/meowzart-sublime.gif";
	}
}
