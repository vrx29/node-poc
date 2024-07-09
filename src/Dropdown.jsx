const Dropdown = ({ topics, onSelect }) => {
  const handleChange = (event) => {
    onSelect(event.target.value);
  };

  return (
    <div>
      <label htmlFor='topic-select'>Choose a topic:</label>
      <select id='topic-select' onChange={handleChange}>
        <option value=''>--Please choose a topic--</option>
        {topics.map((topic, index) => (
          <option key={index} value={topic}>
            {topic}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
