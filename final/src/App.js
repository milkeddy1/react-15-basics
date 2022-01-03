import React, { useState } from 'react';
import datas from './datas';
import List from './List';
function App() {
  const [people, setPeople] = useState(datas)
  const [trans, setTrans] = useState(false)
  return <main>
    <section className={`container ${trans ? 'hide' : 'show'}`}>
      <h3>{people.length} brithdaystoday!</h3>
      <List people={people} />
      <button onClick={() => {
        setPeople([])
        setTrans(true)
      }}>Clear All</button>
    </section>
  </main>
}

export default App;
