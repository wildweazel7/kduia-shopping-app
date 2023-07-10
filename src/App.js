import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { AppProvider } from './context/AppContext';
import CartValue from './components/CartValue';
import ExpenseList from './components/ExpenseList';
import ItemSelected from './components/ItemSelected';
import Location from './components/Location';

function App() {
  return (
    <AppProvider>
    <div className="App">
        <div className="row mt-2">
            {
                <div className="col-sm">
                    <CartValue />
                </div>
            }
            {
                <div className="col-sm">
                    <Location />
                </div>
            }
        </div>
        <div className="row mt-2">
        {
                <div className="col-sm">
                    <ExpenseList />
                </div>
        }
        </div>
        <div className="row mt-2">
        {
                <div className="col-sm">
                    <ItemSelected />
                </div>
        }   
        </div>
    </div>
    </AppProvider>
  );
}

export default App;
