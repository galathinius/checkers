import './game.css'
import { exercises } from '../../first'

export const Pieces = () => {
  const first = exercises[0]

  const listItems = first.map(piece => {
    let classes = `row-${piece.y} col-${piece.x} piece`

    return (
      <p key={`${piece.x}${piece.y}`} className={classes}>
        {piece.code}
      </p>
    )
  })

  return <div className={'pieces all-board'}>{listItems}</div>
}
