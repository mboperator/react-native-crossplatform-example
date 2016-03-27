import React from 'react';

const TodoItem = (actions, {id, title, description, checked}, i) => (
  <li>
    <div className="checkbox">
      <input
        onChange={e =>
          actions.updateTodo(i, {checked: e.target.checked})
        }
        type='checkbox'
        value={checked}
      />
    </div>
    <p>
      {description}
    </p>
    <aside>
      <button onClick={() => actions.destroyTodo(i)}>
        Delete Todo
      </button>
    </aside>
  </li>
);

export default TodoItem;
