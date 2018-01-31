import * as scale from 'd3-scale';
import * as shape from 'd3-shape';
import * as format from 'd3-format';
import * as axis from 'd3-axis'
import * as timeformat from 'd3-time-format';
import * as array from 'd3-array';

let data = [
  {a: 5, value: 90},
  {a: 0, value: 91.24},
  {a: 1, value: 92.24},
  {a: 6, value: 95.35},
  {a: 4, value: 96.84},
  {a: 8, value: 97.92},
  {a: 5, value: 98.80},
  {a: 10, value: 99.47},
];
 
let width = 355 - 40;
let height = 300 - 40;

export let x = scale.scaleLinear()
  .domain([90, 100])
  .range([0, width])
export let y = scale.scaleLinear()
  .domain([10, 0])
  .range([0, height])

export let line = shape.line()
  .x(d => x(d.value))
  .y(d => y(d.a))
  .curve(shape.curveMonotoneX)
  (data);


export let dots = data.map(({a, value}) => ({
  x: x(value), y: y(a)
}));



