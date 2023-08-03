import React from 'react';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './utils/store';
import Header from './components/Header';
import MainConatiner from './components/MainConatiner';
import WatchPage from './components/WatchPage';
import Body from './components/Body';
import SearchPage from './components/SearchPage'; // Import the SearchPage component
import Shimmer from './components/Shimmer';

// function App() {
//   return (
//     <Provider store={store}>
//       <Router>
//         <div className='App'>
//           <Header />
//           <Routes>
//             <Route path='/' element={<MainConatiner />} />
//             <Route path='/watch' element={<WatchPage />} />
//             {/* Set up the route for the SearchPage with the search query parameter */}
//             <Route path='/search/:searchQuery' element={<SearchPage />} />
//           </Routes>
//         </div>
//       </Router>
//     </Provider>
//   );
// }

function App() {
  return (
   
      
    <Provider store={store}>
    <Header/>
    <Outlet/>
    </Provider>
        
        
      
     
      
   
  );
}

 const AppRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainConatiner/>
      },
      {
        path:"watch",
        element:<WatchPage/>
      },
      
        {
         
              path:"/search/:searchTerm",
              element:<SearchPage/>
            
        }
    ]
    
  }
])



export default AppRouter;
