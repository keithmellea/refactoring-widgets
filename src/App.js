import React from 'react';
import ClockFunc from './components/ClockFunc';
import FolderFunc from './components/FolderFunc';
import WeatherFunc from './components/WeatherFunc';
import AutoFunc from './components/AutoFunc';

const names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];

const folders = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second folder here' },
  { title: 'three', content: 'Third folder here' }
];

const App = () => (
  <div>
    <FolderFunc folders={folders} />
    <AutoFunc names={names} />
    <WeatherFunc />
    <ClockFunc />
  </div>
);

export default App;
