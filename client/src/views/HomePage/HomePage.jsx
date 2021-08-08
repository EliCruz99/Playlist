import { useState, useEffect } from 'react'
import Layout from "../../components/Layout/Layout"
import { Link } from "react-router-dom"
import { getAllPlaylist } from "../../services/playlists.js"
import PlaylistCard from '../PlaylistCard/PlaylistCard'
import "./HomePage.css"


export default function HomePage(props) {
  const [playlist, setPlaylist] = useState([])
  

  useEffect(() => {
    fetchData()
  }, [])
  
  const fetchData = async () => {
    const res = await getAllPlaylist()
    console.log(res)
    setPlaylist(res)
  }

  
  const filterByCategory = (category) => {
    const filtered = playlist.filter((cat) => cat.category[0] === category)
    return filtered
  }
  

  return (
    <Layout user={props.user} setUser={props.setUser}>
      <div className="homepage">
      <h1>PLAYLISTIFY</h1> 
      <h2>Discover</h2> <Link to="/Discover-all">See more</Link>
      <div className="discoverPlaylist">
      {playlist.map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
      </div>
      <h2>Music</h2> <Link to="/categories/Music">See more</Link>
      <div className="discoverPlaylist">
      {filterByCategory("Music").map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
      </div>
      <h2>Videos</h2> <Link to="/categories/Videos">See more</Link>
      <div className="discoverPlaylist">
      {filterByCategory("Videos").map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
      </div>
      <h2>Gaming</h2> <Link to="/categories/Gaming">See more</Link>
      <div className="discoverPlaylist">
      {filterByCategory("Gaming").map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
      </div>
      <h2>Education</h2> <Link to="/categories/Education">See more</Link>
      <div className="discoverPlaylist">
      {filterByCategory("Education").map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
      </div>
      <h2>Sports</h2> <Link to="/categories/Sports">See more</Link>
      <div className="discoverPlaylist">
      {filterByCategory("Sports").map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
      </div>
      <h2>Entertainment</h2> <Link to="/categories/Entertainment">See more</Link>
      <div className="discoverPlaylist">
      {filterByCategory("Entertainment").map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
      </div>
      <h2>Family</h2> <Link to="/categories/Family">See more</Link>
      <div className="videoPlaylist">
      {filterByCategory("Family").map((playlist, index) => {
        return (
          <PlaylistCard key={index} playlist={playlist} />
        )
      })}
        </div>
      </div>
    </Layout>
  );
}