'use client'

import data from '@/public/data.json'

const Svg = ({ className, pClassName }) => {
  const Change = (id) => {
    document.getElementById('_title').innerText = id.title
    let str = ''
    for (let i = 0; i < id.desc.length; i++)
      str += '<li>'+id.desc[i]+'</li>'
    document.getElementById('_desc').innerHTML = str
    if (id.time)
    {
      str = ''
      for (let i = 0; i < id.time.length; i++)
        str += '<li>'+id.time[i]+'</li>'
      document.getElementById('_time').innerHTML = str
    }
    else document.getElementById('_time').innerHTML = ""
  }
  return (
    <svg className={className} width="3000" height="4000" viewBox="0 0 793.75 1058.333" style={{strokeWidth: '2pt'}} >
      <path onClick={() => Change(data.list[0])} className={pClassName} transform="translate(364.465 361.805)" d="M-176.13-23.365c20.926-25.755 28.975-28.975 28.975-28.975l-.403-4.829s23.907-11.258 35.816-13.28c.519-.088 1.207 1.207 1.207 1.207l18.11-3.22 4.829 19.72 9.658-2.012 4.427 31.791-1.208 12.475s1.368 17.217 0 17.305c-16.14 1.034-38.225 13.587-47.084 24.548-.505.626-7.243-4.025-7.243-4.025l.973 15.903-2.985 7.84.402 17.305-4.829.402 4.83 8.049-.806 14.89-15.292 6.036v5.232s-12.705 7.201-13.28 6.84c-8.952-5.615-15.695-23.34-15.695-23.34l.403-17.707 1.61-1.207V39.011l2.414-10.866-.805-15.694 1.61-2.415-2.415-1.207V-6.463l-4.024-1.61z"/>
      <path onClick={() => Change(data.list[1])} className={pClassName} transform="translate(364.465 361.805)" d="M-105.86 76.251c-6.52 2.863-9.432-.612-12.93 4.158-3.499 4.77-2.068 14.63 2.862 17.014 4.929 2.385 14.47 5.407 22.58-5.247 8.109-10.654 10.037-20.331 7.632-22.103-.357-.263-.795-6.042-.795-6.042l-7.633-4.135-7.791 4.612.636 7.314s-.803 2.513-4.561 4.43z"/>
      <path onClick={() => Change(data.list[2])} className={pClassName} transform="translate(364.465 361.805)" d="M-74.45 44.675c8.363 13.905 20.85.747 29.7 3.081 8.848 2.334 9.237 15.558 20.225 15.072 10.987-.486 17.6-9.14 13.03-17.503-4.57-8.362-8.85-4.667-8.85-7.876 0-3.209 12.35 1.361 14.197-.292 1.848-1.653.584-8.46.584-8.46S8.438 25.684 5.812 12.655C3.187-.376-8.287.304-16.26 1.86c-7.974 1.556-5.835-.972-5.835-.972l3.89.389-.292-3.987s9.53-1.653 12.447-2.917c2.917-1.264 5.542-6.029 5.542-6.029S1.34-9.322 5.521-9.614c4.181-.291 9.14-2.43 9.14-2.43s-.68 6.417 4.084 7.584c4.765 1.167 7.876-.389 9.043-4.376 1.167-3.986-.486-4.278-.486-4.278s1.264-4.181-.195-6.515c-1.458-2.334-3.695-2.82-3.695-2.82v-1.264s2.042-.875 2.723-4.376c.68-3.5-.292-4.764-.292-4.764s1.945-4.668-2.528-7.585-9.14-.097-9.918 2.431c-.778 2.528-.292 4.181-.292 4.181l-.972 1.459s-4.376-2.625-7.098-2.334c-2.723.292-5.543 3.21-5.543 3.21s-7.098-11.961-19.058-12.642c-11.96-.68-26.497 8.372-27.032 23.92-.092 2.672 1.458 6.515 1.847 9.53.39 3.014.292 7.39.292 7.39l-3.014 1.07 1.361 6.612h.68s-.777 6.32-4.083 10.501c-3.306 4.181-18.515 8.478-24.31 16.044-2.16 2.821-2.824 8.932-.624 13.74z"/>
      <path onClick={() => Change(data.list[3])} className={pClassName} transform="translate(364.465 361.805)" d="M51.179 196.207l9.849-22.922 30.623 10.924.358 2.507-8.954 22.385-32.235-10.924z"/>
      <path onClick={() => Change(data.list[4])} className={pClassName} transform="translate(364.465 361.805)" d="m29.51 189.76 21.669 6.984 10.207-23.997-24.534-9.133-6.984 21.49.18.716z"/>
      <path onClick={() => Change(data.list[5])} className={pClassName} transform="translate(364.465 361.805)" d="M-201.018 201.312l14.913-38.774 93.058 31.616-11.334 28.037h3.579l-7.755 19.685-93.058-35.791z"/>
      <path onClick={() => Change(data.list[6])} className={pClassName} transform="translate(364.465 361.805)" d="M17.013 188.495c.352.088 11.267 3.433 11.267 3.433l1.408-1.76.176-5.458 6.25-18.748-11.355-3.785-.88 2.289-24.382-8.538 3.433-8.714-.352-5.81-36.264-12.674-.088-7.042-35.737-12.235-17.604 45.595.088 6.337 7.306 2.377-24.733 58.533 3.96-.176-19.804 50.611.264 9.507 37.79 12.884 3.413-8.532 16.722 4.778-.341 9.896 13.166 4.347.273 3.48 22.45 7.847-1.501 3.89.068 5.664 14.466 4.64 1.57-3.48 7.028 2.456-.068 4.23 39.781 13.511-.205 4.504 18.492 6.55 9.622-24.496-.342-3.139-17.946-6.21-.136-2.32-25.384-8.324 1.16-2.866-.136-6.005-27.977-9.621-.546-3.07-6.96-2.457-.41-1.024-18.423-5.459-.205-4.094-16.376-5.8 10.03-25.793-.068-8.734-6.346-2.662 9.28-23.131 7.438 2.524 8.939-21.426 5.663 2.047 3.685-9.826 26.203 9.212z"/>
      <path onClick={() => Change(data.list[7])} className={pClassName} transform="translate(364.465 361.805)" d="M-203.466 160.084l16.1 5.625-13.87 35.886-.193 3.297 68.764 23.762 2.618 5.432-6.207 15.13.776 4.655-6.013 15.324-13.19-4.461-20.077 43.644-1.552-49.658-5.334 14.16-37.728-13.19.097-4.364 13.675-34.14-17.36-5.819-.098-4.85z"/>
      <path onClick={() => Change(data.list[8])} className={pClassName} transform="translate(364.465 361.805)" d="M-4.46 232.505 8.02 200.464l66.24 22.49-12.17 32.35Z"/>
      <path onClick={() => Change(data.list[9])} className={pClassName} transform="translate(364.465 361.805)" d="M129.65 122.873l36.324-47.542 29.558 20.477-34.721 47.898Z"/>
      <path onClick={() => Change(data.list[10])} className={pClassName} transform="translate(364.465 361.805)" d="M221.707 97.054l71.758-3.027 2.137 34.188-71.402 3.027z"/>
      <path onClick={() => Change(data.list[11])} className={pClassName} transform="translate(364.465 361.805)" d="M227.227 42.568l3.027 37.037 48.432-4.096-3.205-37.214-3.917.178-3.027-34.544L226.87 7.49l3.383 34.722z"/>
      <path onClick={() => Change(data.list[12])} className={pClassName} transform="translate(364.465 361.805)" d="M-15.94-107.257l31.764 13.582 9.42-21.03-32.422-13.144z"/>
      <path onClick={() => Change(data.list[13])} className={pClassName} transform="translate(364.465 361.805)" d="M12.976-58.845l.657 4.382 46.66 12.486 18.401-56.299-49.508-14.458-5.038 15.116 1.972.876z"/>
      <path onClick={() => Change(data.list[14])} className={pClassName} transform="translate(364.465 361.805)" d="M145.272 441.558v-15.886l6.574-3.835-.274-13.421 7.67-5.204-.275-9.587 17.256-12.052 4.541 5.568 11.894-9.129 5.752 7.944 13.147-9.86 22.734 27.116.548 14.79-18.352 13.422-7.395-7.67.274 13.422-1.643.822v5.752l-6.026 4.108-3.287-3.013-3.835 3.287-7.943-7.943.274 13.421-18.078 13.422z"/>
      <path onClick={() => Change(data.list[15])} className={pClassName} transform="translate(364.465 361.805)" d="M-16.545 498.625l27.703 8.148 2.988-13.308 52.69-12.766 24.173 20.914 24.987-30.148.272-8.42s-19.556-16.024-25.53-44.27c-5.976-28.247.814-38.025.814-38.025l-1.358-7.333-38.567-13.58-1.087 5.704-3.53-1.358s-3.26 6.79-4.346 14.666c-1.087 7.877-.272 16.568-.272 16.568s-12.493 1.901-21.728 4.345C11.43 402.207 1.11 406.01 1.11 406.01s-4.346-9.234-9.506-14.938c-5.16-5.703-11.679-10.864-11.679-10.864L-39.36 400.85v18.74s6.955 5.489 7.895 6.898c.939 1.408 1.878 3.22 1.878 3.22l-.134 10.8s5.232 6.507 7.379 13.014c2.146 6.507 3.086 11.807 3.086 11.807l-.067 11.404 3.085.067-.536 1.878z"/>
      <path onClick={() => Change(data.list[16])} className={pClassName} transform="translate(364.465 361.805)" d="M119.936 288.894l10.808-21.371 15.475 6.632.491 6.141 2.702-4.912 15.476 6.386.491 5.65-4.176 8.843 1.965.982 5.159-10.562v-2.948l12.527-27.757h2.948l2.21-2.702-.245-8.106 2.21-3.93-14-4.913.49-4.667-20.142-6.878-.491-9.826 9.334-18.177 85.729 38.565v9.58l-8.598 20.88-29.231-12.774-16.95 35.372 50.357 23.09.491 9.58-10.071 22.354-36.109-14.493-18.423 37.828-28.74-10.808v-3.193l-10.808-3.93v-3.44l.491-5.158-17.686-7.369.057-3.258 1.497-3.743-5.147-2.995.187-3.276 5.803-12.54 5.334 2.152 3.37-6.925 15.722 5.99.467-1.592-11.23-4.024-.187-6.644-3.088 5.053-16.097-6.644z"/>
      <path onClick={() => Change(data.list[17])} className={pClassName} transform="translate(364.465 361.805)" d="M-184.126 456.192s68.281-17.62 68.832-16.52c.55 1.102 9.086 30.837 9.086 30.837l-68.281 18.998z"/>
    </svg>
  )
}

export default Svg