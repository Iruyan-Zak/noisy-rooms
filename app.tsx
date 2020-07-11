import { React, AudioOutput, oscillator } from "./deps.ts";

const frame = async function() {
  
await AudioOutput(oscillator.default(new AudioBuffer({
    channels: 2, sampleRate: 44100, length: 1024
  }), 440))
  frame()
}

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Hello DenoLand!</h1>
      <button onClick={() => frame()}>Click the 🦕</button>
      <p>You clicked the 🦕 {count} times</p>
    </div>
  );
};

export default App;
