import { Letters } from './Letters'
import { Numbers } from './Numbers'
import { Colors } from './Colors'
import { Pieces } from './Pieces'

import './game.css'

export const Board = () => {
  return (
    <div className='board-container'>
      <div className='board'>
        <Colors />
        <Letters />
        <Numbers />
        <Pieces />
      </div>
    </div>
  )
}
