import './game.css'

export const Colors = () => {
  const boxes = [...Array(64).keys()].map((num, index) => (
    <b key={index} className={'color'}></b>
  ))

  return <div className={'colors colored-board'}>{boxes}</div>
}
