import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';

function App() {
  const [name,setName]=useState('');
  const [datetime,setDatetime]=useState('');
  const [description,setDescription]=useState('');
  const [transactions,setTransactions]=useState([]);
  useEffect(()=>{
    getTransactions().then(setTransactions);
  }, []);
  async function getTransactions(){
    const url = process.env.REACT_APP_API_URL+'/transactions';
    const response= await fetch(url);
    return await response.json();
    
  }
  function addNewTransaction(ev){
    ev.preventDefault();
    const url = process.env.REACT_APP_API_URL+'/transaction';
    const price=name.split(' ')[0];
    console.log('Posting to URL:', url);
    fetch(url,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        price,
        name:name.substring(price.length+1),
        description,
        datetime})
    }).then(response=>{
      response.json().then(json=>{
        setName('');
        setDescription('');
        setDatetime('');
        console.log('result',json);
      });
    });

  }
let balance = 0;
for (let transaction of transactions) {
  balance += transaction.price;
}
balance = balance.toFixed(2); 
const [dollars, cents] = balance.split('.'); 
  return (
    <main>
      <h1>${dollars}<span>.{cents}</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input type="text" 
          value={name}
          onChange={ev=>setName(ev.target.value)}
          placeholder={'+/- Item'}/>
          <input type="datetime-local"
          value={datetime}
          onChange={ev=>setDatetime(ev.target.value)}/>
        </div>
        <div className='description'><input type="text" 
        value={description}
        onChange={ev=>setDescription(ev.target.value)}
        placeholder={'Description'}/>
        </div>
        <button type='submit'>Add new transaction</button>
        
      </form>
      <div className='transactions'>
        {transactions.length>0 && transactions.map(transaction=>(
        <div className='transaction'>
          <div className="left">
            <div className="name">{transaction.name}</div>
            <div className="description">{transaction.description}</div>
          </div>
          <div className="right">
            <div className={"price " +(transaction.price<0?'red':'green')}>{transaction.price}</div>
            <div className="datetime">
              {new Date(transaction.datetime).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
              <br />
              {new Date(transaction.datetime).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit'
              })}
            </div>

          </div>
        </div>
        ))}




      </div>

    </main>
  );
}

export default App;
