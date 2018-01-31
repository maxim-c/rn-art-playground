import React from 'react';
import PT from 'prop-types';
import { ART, Dimensions } from 'react-native';
const {
  Surface,
  Group,
  Shape,
  Path,
  Text
} = ART;

import * as shape from 'd3-shape';
import { line, dots, x, y } from './lines';

let width = Dimensions.get('window').width - 20;
let height = Dimensions.get('window').height / 2;
let padding = 20;

let btick = (i) => Path().
  move(i*50, 256)
  .line(0, 8)

class Circle extends React.Component {
  render() {
    const {radius, x, y, ...rest} = this.props
    const circle = Path()
      .move(x, y - radius)
      .arc(0, radius * 2, radius)
      .arc(0, radius * -2, radius)
    return <Shape {...rest} d={circle} stroke="rgba(84, 93, 149, 0.956)" strokeWidth={2}/>
  }
}

class Axis extends React.Component {
  static propTypes = {
    padding: PT.number.isRequired,
    width: PT.number.isRequired,
    height: PT.number.isRequired,
    ticks: PT.number.isRequired
  };
  static defaultProps = {
    padding: 0,
    ticks: 6
  };
  getLine() {
    let {height, padding} = this.props
    return Path()
      .move(0, height - padding*2)
      .line(width - padding*2, 0);
  }
  renderTicks() {
    let {width, height, padding, ticks} = this.props;
    let distance = (width - padding * 2) / (ticks - 1);
    let py = height - padding * 2;
    return [...Array(ticks)].map((v, i) => {
      let xo = distance*i;
      let path = Path().move(xo, py - 4).line(0, 8);
      let value = (Math.round(x.invert(xo)*10)/10).toString();
      return [
        <Shape
          key={`tick_${i}`}
          d={path}
          stroke={"#000"}
          strokeWidth={1}
        />,
        <Text
          key={`value_${i}`}
          y={py}
          x={xo}
          font={`13px "Helvetica Neue", "Helvetica", Arial`}
          fill = "#000"
          alignment = "center"
        >
          {value}
        </Text>
      ]
    })
  }
  render() {
    return (
      <Group>
        <Shape
          d={this.getLine()}
          stroke={"#000"}
          strokeWidth={1}
        />
        {this.renderTicks()}
      </Group>
    )
  }
}



export default () => (
  <Surface width={width} height={height}>
   <Group x={padding} y={padding}> 
      <Shape
        d={line}
        stroke={"#000"}
        strokeWidth={1}
      />
      {dots.map((dot, i) => <Circle key={i} radius={10} fill={'rgba(241, 136, 160, 0.5)'} {...dot}/>)}
      <Axis 
        padding={padding}
        width={width} 
        height={300}
      />
    </Group>
  </Surface>
);