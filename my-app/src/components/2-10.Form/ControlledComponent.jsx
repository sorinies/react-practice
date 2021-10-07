import React, {useState} from 'react'

/*
  Controlled Component : input의 value를 state로 관리 == 리액트가 알고 있다 !
*/

export default function ControlledComponent() {
  const [name, setName] = useState('');
  const [essay, setEssay] = useState('Please write an essay about your favorite DOM element.');
  const [flavor, setFlavor] = useState('coconut');

  function handleChange(event) {
    const name = event.target.name;
    if(name === 'name') {
      setName(event.target.value);
    }
    if(name === 'essay') {
      setEssay(event.target.value);
    }
    if(name === 'flavor') {
      setFlavor(event.target.value);
    }
  }

  // function handleEssayChange(event) {
  //   setEssay(event.target.value);
  // }

  // function handleFlavorChange(event) {
  //   setFlavor(event.target.value);
  // }
  
  function handleSubmit(event) {
    alert(`name: ${name}, essay: ${essay}, flavor: ${flavor}`);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input name="name" type="text" value={name} onChange={handleChange} />
      </label>
      <br/>
      <label>
        Essay:
        <textarea name="essay" value={essay} onChange={handleChange} />
      </label>
      <br/>
      <label>
        Pick your favorite flavor:
        <select name="flavor" value={flavor} onChange={handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">Coconut</option>
          <option value="mango">Mango</option>
        </select>
      </label>
      <input type="submit" value="Submit" />
    </form>
  )
}
