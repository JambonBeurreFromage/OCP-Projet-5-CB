import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './Styles/index.scss'

////////////////importation pages/////////////////////
import Home from './Pages/Home/main.jsx'
import Sheet from './Pages/Sheet/sheet.jsx'
import About from './Pages/About/about.jsx'
import NoFound from './Pages/NoFound/noPage.jsx'

////////////////importation components/////////////////////
import Header from './Components/header.jsx'
import Footer from './Components/footer.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
	<React.StrictMode>
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/sheet" element={<Sheet />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<NoFound />} />
			</Routes>
			<Footer />
		</Router>
	</React.StrictMode>
)
