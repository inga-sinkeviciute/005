import "./App.scss";
import { BooksProvider } from "./components/BooksContext";
import Layout from "./components/Layout";

export default function App() {
	return (
		<BooksProvider>
			<div className="app">
				<div className="bin">
					<Layout />
				</div>
			</div>
		</BooksProvider>
	);
}
