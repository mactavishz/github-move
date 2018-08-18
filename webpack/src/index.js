import './sass/style.scss'
import webpack from './assets/webpack.png'

function init() {
  let element = document.createElement('h1')

  element.innerHTML = ['Hello', 'World', 'Webpack'].join(' ')

  let logo = new Image()
  logo.src = webpack
  logo.width = 200
  logo.style.display = 'block'
  logo.style.margin = '0 auto'

  document.body.appendChild(element)
  document.body.appendChild(logo)
}

init()