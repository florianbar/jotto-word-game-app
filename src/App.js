import Input from './components/Input';
import Congrats from './components/Congrats';
import GuessedWords from './components/GuessedWords';
import './App.css';

const App = () => {
  return (
    <div className="container">
      <h1>Jotto</h1>
      <Input />
      <Congrats success={true} />
      <GuessedWords guessedWords={[
        { guessedWord: "train", letterMatchCount: 3 }
      ]} />
    </div>
  );
};

export default App;
