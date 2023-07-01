import './assets/styles/global.css';
import Header from './components/layout/Header';
import ContentContainer from './components/layout/Container';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
import ListContent from './components/layout/ListContent';
import { useState } from 'react';

function App() {
  const [showTasks, setShowTasks] = useState(false); 
  const [todoId, setTodoId] = useState("");

  const handleShowTasks = (id: string) => {
      setShowTasks(true);
      setTodoId(id);
  };

  return (
    <>
       <Header/>
       <ContentContainer>
          <Sidebar handleShowTasks={handleShowTasks}/>
          <ListContent todoId={todoId}/>
       </ContentContainer>
       <Footer/>
    </>
  );
}

export default App;
