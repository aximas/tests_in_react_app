import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';

function App() {
    const [data, setData] = useState('');
    const [toggle, setToggle] = useState(false);
    const [value, setValue] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setData('Current Data');
        }, 100);
    }, []);

    const handleClick = () => setToggle(prevState => !prevState);
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
    return (
        <div className="App">
            <header className="App-header">
                {data && <div className='accent'>data</div>}
                {toggle ? (<ul data-testid='list' className='list'>
                    <li>Ball</li>
                    <li>Doll</li>
                    <li>Cat</li>
                </ul>) : null}
                <p data-testid='value-element'>{value}</p>)
                <h1>Hello from React</h1>
                <button data-testid='toggle-btn' onClick={handleClick}>Create new contract</button>
                <input onChange={handleChange} type="text" placeholder='Type here ...' />
            </header>
        </div>
    );
}

export default App;
