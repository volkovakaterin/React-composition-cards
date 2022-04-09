import React from 'react';
import Card from './components/Card';

function App() {
  const firstCard = {
    title: "Card title",
    text: "Some quick example text to build on the card title and make up the bulk of the card's content."
  };
  const secondCard = {
    title: "Special title treatment",
    text: "With supporting text below as a natural lead-in to additional content."
  };
  const cap = <div className='cap' style={{height: '158px', backgroundColor: "gray", textAlign: "center", lineHeight: '158px'}}>Image cap</div>;
  return (
    <>
    <Card {...firstCard}>
    {cap}
    </Card>
    <Card {...secondCard}/>
    </>
    
  );
}

export default App;
