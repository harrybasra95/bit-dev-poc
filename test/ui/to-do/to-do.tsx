import React, { useState } from 'react';
import { Input } from '@harrybasra95/test.ui.input';
import { Button } from '@harrybasra95/test.ui.button';
import { AddTaskStyled, TaskListStyled, TaskStyled } from './style';

type TaskProps = {
  id: Number;
  title: String;
}

export function ToDo() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);
  const [taskName, setTaskName] = useState('');

  const renderTasks = () =>
    tasks.map(({ id, title }) => <TaskStyled key={id}>{title}</TaskStyled>);

  const handleAddTask = () => {
    if (!taskName) return;
    setTasks([...tasks, { id:tasks.length+1, title: taskName }])
  };

  const onChange = ({ target: { value } }) => {
    setTaskName(value);
  };

  return (
    <div>
      <p>Basic ToDo Component</p>
      <AddTaskStyled>
        <Input onChange={onChange} name="task-name" placeholder="Task name" />
        <Button onClick={handleAddTask} primary title="Add Task" />
      </AddTaskStyled>
      <TaskListStyled>{renderTasks()}</TaskListStyled>
    </div>
  );
}
