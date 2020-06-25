import React, { useState } from 'react';

const list = [
  { id: 1, text: 'Control center', icon: '' },
  { id: 2, text: 'Metrics', icon: '' },
  { id: 3, text: 'Forecast', icon: '' },
  { id: 4, text: 'Control center', icon: '' },
  { id: 5, text: 'Metrics', icon: '' },
  { id: 6, text: 'Forecast', icon: '' }
]

const form = [
  { id: 1, name: 'monthly', title: 'Bill monthly', price: 390, period: 'month', message: '', checked: true },
  { id: 2, name: 'yearly', title: 'Bill yearly', price: 3900, period: 'year', message: 'Save 2 month', checked: false },
]

function App() {
  const [select, setSelect] = useState('monthly')
  const [show, setShow] = useState(false)

  const handleChange = e => {
    const { name } = e.target
    setSelect(name)
  }
  const handleSubmit = e => {
    e.preventDefault();
    setShow(true)
  }
  const handleClick = () => {
    setShow(false)
  }

  return (
    <div className='container-sm wrapper text-center'>
      <div className='content p-4 p-sm-5 shadow'>
        <div className='text-left mb-3 pt-3 pt-lg-4'>
          <h1 className='h4'>Metrics</h1>
          <p>Everything you need to understand your business</p>
        </div>

        <div className='row pt-3 pt-lg-4'>
          <div className='col-12'>
            <ul className='list'>
              {list.map(item => (
                <li className='d-flex align-items-center mb-2 pb-2' key={item.id}>
                  <span className='icon'><img src='checked.png' alt='' /></span>
                  <div className="pl-2">
                    <p className="font-size-md mb-0">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className='row pt-3 pt-lg-4'>
          <div className='col-12'>
            <form className='form' onSubmit={handleSubmit}>
              {form.map(item => (
                <div className='form-group' key={item.id}>
                  <label className={`card card-body d-flex flex-row justify-content-between align-items-center ${select === item.name ? 'active' : ''}`}>
                    <div className='col-12 col-md-6 d-flex align-items-center item-content'>
                      <input type='radio' name={item.name} className='item-input mr-3' checked={select === item.name} onChange={e => handleChange(e)} />
                      <span className='item-checkmark'></span>
                      <div className='item-title'>{item.title}</div>
                      {item.message && <div className='item-message'>{item.message}</div>}
                    </div>

                    <div className='col-12 col-md-6 d-flex align-items-center'>
                      <div className='item-price'>{`$${item.price}`}</div>
                      <div className='item-period'>{`/${item.period}`}</div>
                    </div>
                  </label>
                </div>
              ))}

              <button className='btn btn-lg btn-primary btn-block btn-send mt-4'>Subscribe now</button>

            </form>
          </div>
        </div>

        {show &&
          <div className='alert-wrap alert alert-success' role='alert'>
            {`You chose ${select} billing period`}
            <button type='button' className='close' aria-label='Close' onClick={handleClick}><span aria-hidden='true'>&times;</span></button>
          </div>
        }

      </div >
    </div >
  );
}

export default App;
