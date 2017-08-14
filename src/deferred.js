function Deferred() {
	this.init();
}
Deferred.prototype.init = function () {
	this.resolveList = [];
	this.rejectList = [];
	this.notifyList = [];
};
Deferred.prototype.resolve = function () {
	this.resolveList.forEach((fn, key) => {
		fn.apply(this, arguments);
	});
	this.resolveList = [];
	return this;
}
Deferred.prototype.resolveWith = function (contexts, args) {
	this.resolveList.forEach((fn, key) => {
		fn.apply(this, args);
	});	
};
Deferred.prototype.reject = function () {
	this.rejectList.forEach((fn, key) => {
		fn.apply(this, arguments);
	});
	this.rejectList = [];
	return this;
}
Deferred.prototype.notify = function () {
	this.notifyList.forEach((fn, key) => {
		fn.apply(this, arguments);
	});
	this.rejectList = [];
	return this;	
}
Deferred.prototype.done = function(callback) {
	
	this.resolveList.push(callback);
	return this;
}
Deferred.prototype.fail = function (callback) {
	
	this.rejectList.push(callback);
	return this;	
}
Deferred.prototype.progress = function (callback) {
	
	this.notifyList.push(callback);
	return this;		
}
Deferred.when = function (deferred) {
	var length = [].slice.call(arguments, 0).length;
	var deferreds = [].slice.call(arguments, 0);
	var master = new Deferred(); // 返回的deferred
	var count = length;
	var masterArgs = [];
	for (let i = 0;i < length;i++) {
		deferreds[i].done(resolveFunc(i));
	}
	function resolveFunc (i) {
		return function (value) {
			masterArgs[i] = [].slice.call(arguments, 0);
			if (!(--count)) {
				master.resolveWith(this, masterArgs);
			}
		}
	}
	return master;
}

module.exports = Deferred;



