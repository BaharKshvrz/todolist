import './assets/styles/global.css';
import Header from './components/layout/Header';
import ContentContainer from './components/layout/Container';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
import MainContent from './components/layout/MainContent';
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
          <MainContent showTasks={showTasks} todoId={todoId}/>
       </ContentContainer>
       <Footer/>
    </>
  );
}

export default App;
