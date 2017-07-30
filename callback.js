const text = 'Domo Arigato!';

function getText(){
	console.log('I\'m in child gettext f(x)');
	return text;
}

function useless(ninjaCallback) {
	console.log('I\'m in useless parent f(x)');
	return ninjaCallback();
}

console.log(useless(getText));
console.log('finished easy f(x)');

console.log(useless(function() {
	console.log('I\'m in useless parent and now calling anonymous f(x)');
	return text;
}));
