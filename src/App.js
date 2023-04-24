import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Card from './components/card/Card';
import Footer from './components/footer/Footer';

function App() {
  return (
  <>
  <Header title ="Galeria de imagenes con React"/>
  <Card title="Gato" description="Mascota" ImageUrl="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg"/>
  <Card title="Perro" description="Mascota" ImageUrl="https://cdn.pixabay.com/photo/2016/01/05/17/51/maltese-1123016_1280.jpg"/>
  <Card title="Tortuga" description="Mascota" ImageUrl="https://cdn.pixabay.com/photo/2016/11/29/08/31/animal-1868436_1280.jpg"/>
  <Footer title ="Animales Domésticos"/>

  </>
  );
}

export default App;
