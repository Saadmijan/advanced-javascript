const students = [
    {id:32, name: 'amir khan'},
    {id:43, name: 'Salman khan'},
    {id:35, name: 'Sahruk khan'},
    {id:71, name: 'Amithab bashhan'},
   
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter(s => s.id>40);
const biggerOne = students.find( s => s.id>40);
console.log(biggerOne);