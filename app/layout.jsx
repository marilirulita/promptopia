import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
import { Suspense } from 'react';


export const metadata = {
  title: 'Promptopia',
  description: 'Discover prompts & share from AI'
} 
const layout = ({children}) => (
    <html lang='en'>
      <body>
        <Provider>
          <Suspense>
        <div className='main'>
          <div className='gradient' />
        </div>
        <main className='app'>
        <Nav />
          {children}
        </main>
        </Suspense>
        </Provider>
      </body>
    </html>
  )

export default layout;