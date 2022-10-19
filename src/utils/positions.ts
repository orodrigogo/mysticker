import Goleiro from '../assets/goleiro.svg';
import Zagueiro from '../assets/zagueiro.svg';
import Volante from '../assets/volante.svg';
import Meio from '../assets/meio.svg';
import Atacante from '../assets/atacante.svg';

export type PositionProps = typeof POSITIONS[0];

export const POSITIONS = [
  { id: '1', title: 'Goleiro', Icon: Goleiro },
  { id: '2', title: 'Zagueiro', Icon: Zagueiro },
  { id: '3', title: 'Volante', Icon: Volante },
  { id: '4', title: 'Meio', Icon: Meio },
  { id: '5', title: 'Atacante', Icon: Atacante },
]