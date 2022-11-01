import './styles/App.css';
import Header from './components/Title';
import ProductList from './components/ProductList';
import CarButton from './components/CarButton';
const App = () => {
	return (
		<div className='container'>
			<div className='app-wrapper'>
				<CarButton />
				<div>
					<Header />
				</div>
				<ProductList/>
			</div>
			<br />

		</div>
	);
};

export default App;
