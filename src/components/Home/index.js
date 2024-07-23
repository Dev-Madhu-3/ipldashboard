import { Component } from 'react'
import { Blocks } from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

class Home extends Component {
  state = { teamList: [], isLoading: true }

  componentDidMount() {
    this.renderList()
  }

  renderList = async () => {
    const responce = await fetch('https://apis.ccbp.in/ipl')
    const data = await responce.json()
    const { teams } = data
    const updatedData = teams.map(eachOne => ({
      name: eachOne.name,
      id: eachOne.id,
      teamImageUrl: eachOne.team_image_url,
    }))
    if (responce.ok) {
      this.setState({ teamList: updatedData, isLoading: false })
    }

  }

  render() {
    const { teamList, isLoading } = this.state
    return (
      <div className="bg-container">
        {isLoading ? (
          <div data-testid="loader">
            <Blocks
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              visible={true}
            />
          </div>
        ) : (
          <div className="home-con">
            <div className="home-head-con">
              <img
                className="home-head-logo"
                src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
                alt="ipl logo"
              />
              <h1>IPL Dashboard</h1>
            </div>
            <div className="home-team-cards-con">
              {teamList.map(eachList => (
                <TeamCard teamList={eachList} key={eachList.id} />
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default Home
