const container = document.getElementById('container');
const colors = ['#FF577F', '#BC6FF1', '#E71414', '#018383', '#EFA8E4', '#6930C3', '#64DFDF', '#F58634', '#C70039', '#FF577F', '#E8F044', '#54E346', '#32FF6A', '#D8F8B7'];

const SQUARES = 500;

for (let i = 0; i < SQUARES; i++){
  const square = document.createElement('div')
  square.classList.add('square')
  container.appendChild(square)

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseout', () => removeColor(square))
}

function setColor(element) {
  const color = getRandomColor()
  element.style.background = color
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
  element.style.background = '#1d1d1d'
  element.style.boxShadow = '0 0 2px #000'
}

function getRandomColor() {
  return colors[Math.floor(Math.random()* colors.length)]
}
