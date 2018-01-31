import * as shape from 'd3-shape';

const data = [
  {"number":  10, "name": 'Fun activities', color: '#b22222'},
  {"number": 30, "name": 'Dog', color: '#1e90ff'},
  {"number": 25, "name": 'Food', color: '#ff8c00'},
  {"number": 5, "name": 'Car', color: '#ba55d3'},
  {"number": 50, "name": 'Rent', color: '#d8bfd8'},
  {"number":  4, "name": 'Misc', color: '#ffe909'},
];

export let arcs = shape.pie()
  .value(d => d.number)
  .sort(null)
  // .startAngle(90)
  // .endAngle(30)
  (data)

console.log('arcs: ', arcs);

