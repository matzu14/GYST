import React from 'react';
import img from './piko-dancing.gif'

import './TodoCounter.css';

export default function TodoCounter({ totalTodos, completedTodos, loading }) {

  return (
    <section className='counter-wrapper'>
      <a title='Github' className='img-wrapper' href='https://github.com/matzu14'>
        <img className='header-logo' src={img} alt='header-img' />
        <img className='header-logo' src='https://static1.e621.net/data/b4/bb/b4bb26f5eeba7b6481458e117fed8ad5.gif' alt='header-img' />
      </a>
      <section className='counter-text'>
        <h1
          className={`todoCounter ${!!loading && "todoCounter--loading"}`}
        >
          Get your shit together™
        </h1>

        <span
          className={`todoCounter ${!!loading && "todoCounter--loading"}`}
        >
          You have done {completedTodos} of {totalTodos} little silly tasks!
        </span>
      </section>
    </section>
  )
}
export { TodoCounter };
