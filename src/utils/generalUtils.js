function checkLocalUrl(url) {
   return /indexeddb:|localstorage:/i.test(url);
}

function isLocalStorage(url) {
   return url.toLowerCase().includes('localstorage:');
}

export {
  checkLocalUrl,
	isLocalStorage,
};
