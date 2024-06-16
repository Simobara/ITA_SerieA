import './App.css';
import Header from '../Header/header.jsx';
import Footer from '../Footer/footer.jsx';
import Body from '../Body/Body.jsx';

// overflow-hidden
const App = () => {
	return (
		<div className="h-screen xl:overflow-hidden ">
			<Header />
			<Body />
			<Footer />
		</div>
	);
};

export default App;
