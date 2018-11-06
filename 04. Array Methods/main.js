// Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's
    const result_1 = inventors.filter(inventor => (inventor.year >=1500 && inventor.year<=1599));
    console.log("Number of inventors born in 1500\'s: ");
    console.table(result_1);

    // Array.prototype.map()
    // 2. Give us an array of the inventors' first and last names
    const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
    console.table(fullNames);

    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest
    const orderSort = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
    console.table(orderSort);
    

    // Array.prototype.reduce()
    // 4. How many years did all the inventors live?
    const totalYears = inventors.reduce((total, inventor) => {
        return total + (inventor.passed - inventor.year);
    }, 0);
    console.log("Number of years all the inventors lived are: ", totalYears);
    

    // 5. Sort the inventors by years lived
    const oldestInventor = inventors.sort(function(a,b){
        const lastGuy = a.passed - a.year;
        const nextGuy = b.passed - b.year;
        return lastGuy > nextGuy ? 1 : -1;
    });

    console.table(oldestInventor);


    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    //CODE: Has to be checked with the console in the Console
    // const category = document.querySelector('.mw-category');
    // const links = Array.from(category.querySelectorAll('a'));
    // const de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'));


    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const sortPeople = people.sort(function(lastName, firstName){
        const [a_last, a_first] = lastName.split(', ');
        const [b_last, b_first] = firstName.split(', ');
        return a_last > b_last ? 1 : -1;
    });

    console.table(sortPeople);

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const transport = data.reduce(function(obj, item){
        if(!obj[item]){
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    }, {});

    console.log(transport);
    
