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
  { id: 1, name: 'monthly', title: 'Bill monthly', price: 390, period: 'month', checked: true },
  { id: 2, name: 'yearly', title: 'Bill yearly', price: 3900, period: 'year', checked: false },
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
                    <div className='col-12 col-md-6 d-flex align-items-center'>
                      <input type='radio' name={item.name} className='card-input-element mr-3' checked={select === item.name} onChange={e => handleChange(e)} />
                      <div className="">{item.title}</div>
                    </div>

                    <div className='col-12 col-md-6 d-flex align-items-center'>
                      <div className='price'>{`$${item.price}`}</div>
                      <div className='period'>{`/${item.period}`}</div>
                    </div>
                  </label>
                </div>
              ))}

              <button className='btn btn-lg btn-primary btn-block btn-send'>Subscribe now</button>

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
