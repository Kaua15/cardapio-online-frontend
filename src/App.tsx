import { useState } from 'react';
import './App.css'
import { Card } from './components/card/card';
import { useFoodData } from './hooks/useFoodData';
import { FoodData } from './interface/FoodData';
import { CreateModal } from './components/create-modal/create-modal';

function App() {
  const {data} = useFoodData();
  const [isModelOpen, setIsModalOpen] = useState(false);  

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <div className='title'>
        <h1>Cardápio</h1>
        <button onClick={handleOpenModal}>+</button>
      </div>
     
      <div className="card-grid">
        {data?.map(foodData => 
          <Card 
            price={foodData.price} 
            title={foodData.title} 
            image={foodData.image}/>
          )
        }
        {isModelOpen && <CreateModal closeModal={handleOpenModal}/>}     
      </div>
    </div>
  )
}

export default App
