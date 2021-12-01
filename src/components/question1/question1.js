import React, { useState } from 'react'
import { Link } from 'react-router-dom';

export default function Question1() {
  const [value, setvalue] = useState(null)
  const [result, setresult] = useState(null)
  const [isPrime, setisPrime] = useState('prime')

  const isFibonacci = (num, count = 1, last = 0) => {
    if (count < num) {
      return isFibonacci(num, count + last, count);
    };
    if (count === num) {
      return true;
    }
    return false;
  };

  const isPrimeFn = num => {
    for (let i = 2; i < num; i++)
      if (num % i === 0) return false;
    return num > 1;
  }

  const check = (value, mode) => {
    if (mode === 'prime') {
      const itIsPrime = isPrimeFn(parseInt(value))
      setresult(itIsPrime + '')
    } else {
      const fiboResult = isFibonacci(parseInt(value));
      console.log(fiboResult);
      setresult(fiboResult + '')
    }
  }

  return (
    <div>
      <div>
        <Link to="/question1">Question 1</Link>
        <Link to="/question2" style={{ float: 'right' }} >Question 2</Link>
      </div>

      <div style={{ display: 'flex' }} >
        <div style={{ padding: 10, flexShrink: 0, width: '200px', height: '100vh', border: '1px solid black' }}>
          <input onChange={(e) => {
            setvalue(e.target.value)
            check(e.target.value, isPrime)
          }} style={{ width: '100%' }} />
        </div>
        <div style={{ padding: 10, flexShrink: 1, width: '100vw', flexFlow: 'column nowrap', justifyContent: 'center', height: 'auto', border: '1px solid black' }}>
          <select onChange={async (e) => {
            await setisPrime(e.target.value)
            check(value, e.target.value)
          }}>
            <option value={'prime'}>
              isPrime
            </option>
            <option value={'fibo'}>
              isFibonacci
            </option>
          </select>
        </div>
        <div style={{ padding: 10, flexShrink: 0, width: '300px', height: 'auto', border: '1px solid black' }}>
          {result}
        </div>
      </div>
    </div>
  )
}
