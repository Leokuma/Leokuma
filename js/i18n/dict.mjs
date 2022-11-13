export async function download(lang) {
	return (await import(`/js/i18n/dicts/${lang}.mjs`)).default;
}

export function apply(dict) {
	document.querySelectorAll('[data-dict]').forEach(el => {
		el.textContent = el.dataset.dict.split('.').reduce((parent, entry) => parent[entry], dict);
	});

	document.querySelector(`.flag[value=${dict.LANG}]`).checked = true;
}