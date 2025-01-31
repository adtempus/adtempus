import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<div className='text-3xl font-bold'>AdTempus</div>
	</StrictMode>
)
