export const title = "Philosophèmes";

export const src = [
	"https://raw.githubusercontent.com/eyssette/philosophemes/main/data/philosophemes.tsv",
];
/* export const src = ['https://raw.githubusercontent.com/eyssette/textes-philo/main/data/textes-FINAL.tsv', 'https://raw.githubusercontent.com/eyssette/textes-philo/main/data/textes-new.tsv']; */
/* https://raw.githubusercontent.com/eyssette/textes-philo/main/data/textes-new.tsv */
/* https://raw.githubusercontent.com/eyssette/sujets-philosophie-bac/main/data/dissertations.tsv */
/* export const src = ['https://raw.githubusercontent.com/eyssette/sujets-philosophie/main/data/sujets-vrac.tsv'] */

export const contentAfterTable =
	'Site créé par <a href="https://github.com/XenocodeRCE/">Xénocode</a> et <a href="http://eyssette.github.io/">Cédric Eyssette</a>';

/* Si la base de données est trop importante, il faut que la recherche ne se déclenche pas automatiquement, mais seulement en appuyant sur Entrée, et il faut désactiver l'utilisation d'une regex. On peut également choisir de calculer un score de pertinence ou non. */
export const automaticSearch = true;
export const desactivateRegexDefault = false;
export const scoreDisplay = false;

export const activateFilters = false;

export const textToSearchDefaultSmallScreen = "Art";
export const textToSearchDefault = "Art\\t";

/* Pour réorganiser les données (notamment pour faire une version différente sur mobile) */
export const reorganizeData = false;
export const reorganizeDataIfSmallScreen = true;
export function reorganizeDataFunction(arrInit) {
	/* Un exemple qui ne garde que certaines colonnes */
	return arrInit.map((element) => ['<u>'+element[0]+'</u>' + '<br>'+ element[1], element[2]]);
	/* Un exemple de regroupement */
	/* return arrInit.map(element => [element[0],  element[2] + '<br/>' + element[1] + (element[3] ? element[3] : '')]);  */
}

/* Pour changer le titre des colonnes  */
export const dataNoHeader = false;
export const changeHeader = false;
export const newHeader = [];
/* export const newHeader=['Auteur·e','Texte']; */
/* export const newHeader = ['Intitulé du sujet']; */

/* Pour que certaines colonnes s'affichent en plus petit */
export const smallColumns = [];
export const smallColumnsIfSmallScreen = [0,1];

/* Surligner les mots recherchés */
export const markText = true;

/* Si les données sont déjà triées en ordre ascendant pour une colonne, il faut l'indiquer ici, en notant les numéros des colonnes concernées */
export let historyColumnsClickDefault = [0];

export const tableCSS = "";
/* export let tableCSS='small' */

/* Pour indiquer des conditions supplémentaires possibles (cases à cocher) avec le format suivant : intitulé de la condition, regex correspondante. Les conditions supplémentaires ne sont possibles que si desactivateRegexDefault = false */
export const useAdditionalConditions = false;
export const additionalConditionsArray = [
	/* ['Seulement des sujets avec une question', '(?=.*\\?$)'],
	['Seulement des sujets sans question', '(?=.*([A-zÀ-ÿ]|»|\\)|[0-9]|!|>)$)'], */
	[
		"Rechercher seulement dans les intitulés des sujets",
		"(?<=.*?\\t.*?\\t.*?\\t.*?\\t.*)",
	],
];
