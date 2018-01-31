import React from 'react';
import { ART, Dimensions } from 'react-native';
const {
  Surface,
  Group,
  Shape
} = ART;
import * as shape from 'd3-shape';
import { arcs } from './arcs';

let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height / 2;

console.log('width, height: ', width, height);

export default () => (
  <Surface width={width} height={height}>
    <Group x={width/2} y={height/2}> 
      {arcs.map((arc, i) => (
        <Shape
          key={i}
          d={shape.arc()
            .outerRadius(150)
            .padAngle(.05)
            .innerRadius(100)
            .cornerRadius(4)
            (arc)
          }
          fill={arc.data.color}
          stroke={"#000"}  // green line
          strokeWidth={1}     
        />
      ))}
    </Group>
  </Surface>
);