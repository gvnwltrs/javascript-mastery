'use strict'; 

function calcAge1(birthYear) {
    return 2027 - birthYear; 
}

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear; 
    const retirement = 65 - age; 

    return `${firstName} retires in ${retirement} years.`; 
}

console.log(yearsUntilRetirement(1957, 'Joe')); 