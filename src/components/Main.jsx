import React from 'react';
import { Image, Gif, Poll, Emoticon, Schedule } from '../assets/ToolbarImages';
import TweetList from './TweetList'
import data from '../tweets.json'

const images = [Image, Gif, Poll, Emoticon, Schedule]
const Toolbar = () => {
  return (
    <div className="tools-content">
      {images.map((Item, index) => {
        return <Item key={index} />
      })}
    </div>
  )
}
const Header = () => {
  return (
    <div className="header">
      <h2>Inicio</h2>
    </div>
  )
}

const TweetForm = ({ onSubmit }) => {
  const [ content, setContent ] = React.useState('')

  const submit = (event) => {
    event.preventDefault()
    if(content !== '') {
      onsubmit(content)
    }
    
  }

  const updateValue = (event) => {
    setContent(event.currentTarget. value)
  }
  return (
    <form className="tweet-form" onSubmit={submit}>
      <img src="" className="avatar" />
      <div className="container">
        <textarea placeholder="¿Qué está pasando?" rows={1} onChange={updateValue} />
        <div className="tools">
          <Toolbar />
          <button disabled>Twittear</button>
        </div>
      </div>
    </form>
  )
}

const Main = () => {
  const user = {
    avatar: 'https://pbs.twimg.com/profile_images/735242324293210112/H8YfgQHP_400x400.jpg',
    author: 'Egghead',
    tag: 'eggheadio',
  }
  const onSubmit = (tweet) => {
    const newTweet = {
      content: tweet,
      date: new Date(Date.now()).toLocaleString(),
      id: Date.now(),
      ...user
    }
    console.log('Nuevo Tweet', newTweet)
  }
  return (
    <main className="main">
      <Header />
      <TweetForm onSubmit={onSubmit} />
      <TweetList tweets={data} x />
    </main>
  )
}



export default Main






























// import data from "../tweets.json";
// import Tweet from "./Tweet";

// const Main = () => {
//   const [tweets, setTweets] = React.useState(data);
//   const user = {
//     avatar:
//       "https://pbs.twimg.com/profile_images/1321505148909297665/0AfZqBHl_reasonably_small.jpg",
//     author: "Matías Hernández",
//     tag: "matiasfha",
//   };
//
//   const onSubmit = (tweet) => {
//     const newTweet = {
//       ...user,
//       content: tweet,
//       date: new Date(Date.now()).toLocaleString(),
//       id: Date.now(),
//     };
//     setTweets((state) => [newTweet, ...state]);
//   };
//   return (
//     <main className="main">
//       <div className="header">
//         <h2>Inicio</h2>
//       </div>
//       <TweetForm user={user} onSubmit={onSubmit} />
//       <div className="tweets">
//         {tweets.map((tweet) => {
//           return <Tweet key={tweet.id} tweet={tweet} />;
//         })}
//       </div>
//     </main>
//   );
// };
//
