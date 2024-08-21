import Dropdown from './components/Dropdown';

const App = () => {
  const radioOptions = ['Option 1', 'Option 2', 'Option 3'];
  const checkboxOptions = ['Option A', 'Option B', 'Option C', 'Option D'];

  return (
    <div className='App'>
      <h2>Single Selection (Radio Buttons)</h2>
      <Dropdown options={radioOptions} multiple={false} />

      <h2>Multiple Selections (Checkboxes)</h2>
      <Dropdown options={checkboxOptions} multiple={true} />
    </div>
  );
};

export default App;
