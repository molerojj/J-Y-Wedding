import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** import all component**/
import Home from './components/Home';

/** root routes **/
const router = createBrowserRouter([
	{
		path: '/',
		element: <Home />
	}
])

const App = () => {
	return (
		<main>
			<RouterProvider router={router}></RouterProvider>
		</main>
	)
}

export default App;