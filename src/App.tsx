import './assets/styles/global.css';
import Header from './components/layout/Header';
import ContentContainer from './components/layout/Container';
import Footer from './components/layout/Footer';
import Sidebar from './components/layout/Sidebar';
import ListContent from './components/layout/ListContent';

function App() {
  return (
    <>
       <Header/>
       <ContentContainer>
          <Sidebar/>
          <ListContent/>
        </ContentContainer>
       <Footer/>
    </>
  );
}

export default App;
