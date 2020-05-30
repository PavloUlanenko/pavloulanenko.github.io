ES2020
Install node 14.3.0 to run the examples on Node.

1. Promises in loops (for-await loop)
const emulate = (id, ms) => new Promise(res => setTimeout(() => res(id), ms));
const promises = [
	emulate(1,250),
	emulate(2,600),
	emulate(3,2000),
];

//old version
(async () => {
	for(let promise of await Promise.all(promises)) {
		console.log(promise);
	}
})();

//new version
(async () => {
	for await(let promise of promises) {
		console.log(promise);
	}
})();

The difference in behavior is - the old version waits until the promise with the longest timeout resolves and than prints out the results simultaniously.
The new version prints out as soon as the promise wa resolved, one by one.

2. Using for-of loop for objects.
let entries = [
    ['name', 'Pavel'],
    ['age', 30],
];

let person = Object.fromEntries(entries);

//old version
for(let entry of Object.entries(person)) {
	console.log(entry[0]); // would be a key
	console.log(entry[1]); // would be a value
}

//new version
for(let [key, value] of Object.entries(person)) {
	console.log(key);
	console.log(value);
}

//Also available iteration by Object.keys(obj) and Object.values(obj)

3. Strings
Trimming:
let str1 = '    lorem';
let str2 = 'ipsum    ';

//old version
let combinedStr = (str1+str2).trim();

//new version
let combinedStr = str1.trimStart() + str2.trimEnd();

Pads:
let str = 'fb';
str.padStart(6, 'www.');

4. Tag functions

5. Arrays - flat(), flatMap()
let arr = [1, 2, [3], [[4], [5]]];
arr.flat();
arr.flat(2); // depth of recursion. If it is not known it's possible to provide bigger value

let arr = ['lorem ipsum', 'dolor sit amet', 'lorem'];
//old version 
arr.map(el => el.split(' ')).flat()
//new version
arr.flatMap(el => el.split(' '));

6. Classes
class Person {
    name = 'guest'; //field prop syntax
    #age = 17; //private props
    static #address = 'Chicago, IL'; //static private props

    constructor(name) {
        this.name = name; //overwrites the default name if passed to constructor
    }

    get age() {
        return this.#age;
    }

    set age(age) {
        if(age > this.#age) {
            this.#age = age;
        }
    }

    static printAddress() {
        console.log(this.#address); //access to staric private prop
    }
}

7. BigInt
It is a new data type
Number.MAX_SAFE_INTEGER;
Number.MIN_SAFE_INTEGER; 
Those are the max and min values for precise calculation.
If we need to exceed it use BigInt
100n
typeof 100n => BigInt
5n / 2n => 2 //fractions are ignored as it is Int
parseInt(10n);
BigInt(5);

8. Dynamic imports

9. Promises - allSettled
let p1 = Promise.resolve(1);
let p2 = Promise.reject('Error occured');
let p3 = Promise.resolve(3);

//old version
(async () => {
    let res = await Promise.all([p1,p2,p3]).catch(err => console.log(err));
    console.log(res); // if one promise is rejected we won't get any results
})();

//new version
(async () => {
    let res = await Promise.allSettled([p1,p2,p3]);
    console.log(res);
})();

10. Global this
Different globals:
Node - global
Browsers - window
globalThis = window in browser and global in Node.

11. New coalescial operator ??
const values = {
    null: null,
    undefined: undefined,
    zero: 0,
    false: false,
    empty: '',
};
values.zero || 'default' => default
values.zero ?? 'default' => 0
For null and undefined results are the same

12. Optional operator 
Can be used e.g. document.querySelector('.block1')?.textContent; // won't throw an error if not found