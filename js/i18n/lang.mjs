import * as Dict from './dict.mjs';

export async function apply(lang) {
	const dict = await Dict.download(lang);
	Dict.apply(dict);

	const url = new URL(window.location);
	url.searchParams.set('lang', dict.LANG);
	window.history.replaceState({}, '', url);
}

export function get() {
	const searchParams = new URL(window.location).searchParams;

	if (searchParams.get('lang') == 'en')
		return 'en';
	else if (searchParams.get('lang') == 'pt' || window.navigator.languages.includes('pt'))
		return 'pt';
	else if (window.navigator.languages.includes('en'))
		return 'en';
	else
		return 'pt';
}