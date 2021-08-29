import './index.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'Take out the trash',
      day: 'Feb 7th at 1:30pm',
      reminder: false
    },
    {
      id: 3,
      text: 'Meeting at the school',
      day: 'Feb 6th at 10:30am',
      reminder: true
    },
    {
      id: 4,
      text: 'Food shopping',
      day: 'Feb 6th at 2:30pm',
      reminder: true
    }
  ]);
  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
};

export default App;
