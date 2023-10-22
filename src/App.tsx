import { KeyboardEvent, useState } from 'react';
import './App.css';
import { Sprite, Stage } from '@pixi/react';

function App() {
  const [y, setY] = useState<number>(200);
  const handleKeyDown = (e: KeyboardEvent) => {
    console.log('zizi');
    if (e.key === 'ArrowUp') {
      setY(y - 10);
    }

    if (e.key === 'ArrowDown') {
      setY(y + 10);
    }

    console.log(e.key);
  };

  return (
    <div>
      <h2>Splash Pong !</h2>
      <Stage onKeyDown={handleKeyDown} tabIndex={0} width={800} height={600}>
        {/** For test purposes, to be removed */}
        <Sprite
          image="https://pixijs.io/pixi-react/img/bunny.png"
          x={10}
          y={y}
        />
        {/***/}
      </Stage>
    </div>
  );
}

export default App;
