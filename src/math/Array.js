function randomTerm(ray, determ) {
	return ray[Math.floor((determ ? rng.get() : Math.random()) * ray.length)];
}

function randomTermWeighted(ray, weightgen = ()=>1) {
	var weights = ray.map(oj=>Math.max(0, weightgen(oj)));
	var total = 0;
	var upto = weights.map(wuh=>total+=wuh);
	var rand = Math.random()*total;
	var dex = upto.findIndex(oj=>oj>=rand);
	return ray[dex];
}

function maxTerm(ray, criteria) {
	return ray.reduce((accum, cur) => {
		let newVal = criteria(cur);
		//console.log(cur, newVal);
		if (newVal >= accum.val)
			return {item: cur, val: newVal}
		else
			return accum;
	}, {item: ray[0], val: -Infinity}).item;
}

function newArray2d(i, j, fill = 0) {
	return new Array(i).fill(fill).map(()=>new Array(j).fill(fill));
}

function newArray2dLambda(i, j, func) {
	return new Array(i).fill(0).map((oji, i)=>new Array(j).fill(0).map((ojj, j)=>func(i, j)));
}

function slice2d(ray) {
	return ray.map(row=>row.slice());
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// https://tc39.github.io/ecma262/#sec-array.prototype.findindex
Object.defineProperty(Array.prototype, 'findIndexFrom', {
	value: function(predicate, from) {
		// 1. Let O be ? ToObject(this value).
		if (this == null) {
			throw new TypeError('"this" is null or not defined');
		}

		var o = Object(this);

		// 2. Let len be ? ToLength(? Get(O, "length")).
		var len = o.length >>> 0;

		// 3. If IsCallable(predicate) is false, throw a TypeError exception.
		if (typeof predicate !== 'function') {
		throw new TypeError('predicate must be a function');
		}

		// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
		var thisArg = arguments[1];

		// 5. Let k be 0.
		var k = from; //slight modification here

		// 6. Repeat, while k < len
		while (k < len) {
			// a. Let Pk be ! ToString(k).
			// b. Let kValue be ? Get(O, Pk).
			// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
			// d. If testResult is true, return k.
			var kValue = o[k];
			if (predicate.call(thisArg, kValue, k, o)) {
				return k;
			}
			// e. Increase k by 1.
		k++;
		}

		// 7. Return -1.
		return -1;
	},
	configurable: true,
	writable: true
});

//https://stackoverflow.com/questions/17428587/transposing-a-2d-array-in-javascript
function transposeArray(array) {
	var newArray = [];
	for(var i = 0; i < array[0].length; i++){
		newArray.push([]);
	}
	for(var i = 0; i < array.length; i++){
		for(var j = 0; j < array[0].length; j++){
			newArray[j].push(array[i][j]);
		}
	}
	return newArray;
}

//Fisher-Yates shuffle
function shuffleArray(orig, determ) {
	ray = orig.slice();
	for (var i = ray.length-1; i > 0; i--) {
		let r  = Math.floor((determ ? rng.get() : Math.random()) * (i+1));
		let temp = ray[i];
		ray[i] = ray[r];
		ray[r] = temp;
	}
	return ray;
}