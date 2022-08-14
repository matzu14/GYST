import React from 'react';

import './TodoCounter.css';

export default function TodoCounter({totalTodos, completedTodos}) {

  return (
    <section>
    <h1 className='todoCounter'>Get your shit together™</h1>
    <span className='todoCounter'>You have done {completedTodos} of {totalTodos} little silly tasks!</span>
    </section>
  ) 
}
export { TodoCounter };
