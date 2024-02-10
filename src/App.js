import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
// import Footer from './components/Footer';
function App() {
  const productList=[
    {
      price:99999,
      name:'iPhone 13',
      quantity:0,
    },
    {
      price:9999,
      name:'Micromax In',
      quantity:0,
    },
  ]
  return (
    <>
    <Navbar/>
    <main className='container mt-5'>
    <ProductList productList={productList}/>
    </main>
    {/* <Footer/> */}
    </>
  );
}

export default App;
