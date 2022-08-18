import React from 'react';

import './TodoCounter.css';

export default function TodoCounter({ totalTodos, completedTodos, loading }) {

  return (
    <section className='counter-wrapper'>
      <img className='header-logo' src='/piko-dancing.gif' />
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
