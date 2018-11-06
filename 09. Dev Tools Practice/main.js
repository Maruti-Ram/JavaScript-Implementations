 const dogs = [{
     name: 'Snickers',
     age: 2
 }, {
     name: 'hugo',
     age: 8
 }];

 function makeGreen() {
     const p = document.querySelector('p');
     p.style.color = '#BADA55';
     p.style.fontSize = '50px';
 }

 // Regular
 console.log('Hello');
 

 // Interpolated
 console.log('I am a %s string', 'dynamic');
 

 // Styled
 console.log('%c I am a styled text', 'font-size: 2rem; color: red;');
 

 // warning!
 console.warn('I am a warning!');
 

 // Error :|
 console.error('I am an Error!!');
 

 // Info
 console.info('This is an Info Message');

 // Testing
 const p = document.querySelector('p');
 console.assert(p.classList.contains('ouch'), 'That is wrong');

 // clearing
 console.clear();


 // Viewing DOM Elements
 console.log(p);
 console.dir(p);

 // Grouping together
 dogs.forEach(dog => {
     console.group(`${dog.name}`);
     console.log(`This is ${dog.name}`);
     console.log(`This is ${dog.name} is ${dog.age} years old.`);
     console.log(`This is ${dog.name} is ${dog.age * 7} do years old`);

     console.groupEnd(`${dog.name}`);
 });


 // counting
 console.count('Wes');
 console.count('Wes');
 console.count('Steve');
 console.count('Wes');
 console.count('Wes');
 console.count('Ram');
 console.count('Ram');
 console.count('Steve');
 console.count('Ram');

 // timing
 console.time('fetching data');
 fetch('http://api.github.com/users/wesbos')
    .then(data => data.json())
    .then (data => {
        console.timeEnd('fetching data');
        console.log('data');
    });