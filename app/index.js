import Deferred from '../src/deferred'

var d1 = new Deferred();

var d2 = new Deferred();

Deferred.when(d1, d2).done((data1, data2) => {
	console.log(data1, data2);
});
setTimeout(() => {
	d1.resolve(new Date());
	d2.resolve(new Date());
}, 1000);

