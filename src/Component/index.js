import {Component} from 'react'

import './index.css'

class History extends Component {
  state = {inputSearch: '', updatelist: this.props.initialHistoryList}

  onChangeInput = event => {
    this.setState({inputSearch: event.target.value})
  }

  onclickButton = id => {
    const {initialHistoryList} = this.props
    const Resultfinal = initialHistoryList.filter(each => each.id !== id)
    this.setState({updatelist: Resultfinal})
  }

  render() {
    const {initialHistoryList} = this.props

    const {inputSearch, updatelist} = this.state
    console.log(updatelist)

    const Result = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(inputSearch.toLowerCase()),
    )

    return (
      <div>
        <div className="bg-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="image"
            alt="app logo"
          />
          <div className="container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search"
            />
            <input
              type="search"
              className="input-value"
              placeholder="Search"
              value={inputSearch}
              onChange={this.onChangeInput}
            />
          </div>
        </div>
        <ul className="un-list">
          <li>
            {updatelist.map(eachItem => (
              <div className="bg-container2" key={eachItem.id}>
                <p className="heading2">{eachItem.timeAccessed}</p>
                <img
                  src={eachItem.logoUrl}
                  alt="domain logo"
                  className="image3"
                />
                <p className="heading3">{eachItem.title}</p>
                <div className="container3">
                  <p className="paragraph"> {eachItem.domainUrl}</p>
                  <button
                    type="button"
                    className="button"
                    data-testid="delete"
                    onClick={() => this.onclickButton(eachItem.id)}
                  >
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
                      alt="delete"
                    />
                  </button>
                </div>
              </div>
            ))}
          </li>
        </ul>
      </div>
    )
  }
}
export default History
