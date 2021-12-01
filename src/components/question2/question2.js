import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { httpClient } from '../../util/HttpClient'
import _ from "lodash";

export default function Question2() {

  const [categories, setcategories] = useState([])

  useEffect(() => {
    getCategories()
  }, [])

  const getCategories = async () => {
    const response = await httpClient.get('https://api.publicapis.org/categories')
    setcategories(response.data)

  }

  const renderTable = () => {
    if (categories.length > 0) {
      return categories.map((item, index) => (
        <tr>
          <td></td>
          <td>{index}</td>
          <td>{item}</td>
        </tr>
      ))
    }
  }

  const debounceSearch = useRef(_.debounce(e => filterCategory(e), 500)).current;
  const searchChanged = (e) => {
    e.persist();
    const data = { categories, e }
    debounceSearch(data);
  };

  const filterCategory = async (data) => {
    const inputValue = data.e.target.value
    if (inputValue != '') {
      let newCategories = []

      for (let index = 0; index < data.categories.length; index++) {
        const item = data.categories[index];
        // console.log(typeof item);
        if (item.includes(inputValue)) {
          newCategories.push(item)
        }
      }
      setcategories(newCategories)
    } else {
      getCategories()
    }
  }

  return (
    <div>
      <div>
        <Link to="/question1">Question 1</Link>
        <Link to="/question2" style={{ float: 'right' }} >Question 2</Link>
      </div>

      <div style={{ padding: '3%' }}>
        <div className="form-group">
          <label>Filter</label>
          <input onChange={(e) => searchChanged(e)} className="form-control" placeholder="Enter filter" />
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th style={{ width: 10 }}>#</th>
              <th>Index</th>
              <th>Categories</th>
            </tr>
          </thead>
          <tbody>
            {renderTable()}
          </tbody>
        </table>
      </div>
    </div>
  )
}
