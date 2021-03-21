import React from 'react';

const Header = () => {
  return (
    <div className="header">
      <h2>Inicio</h2>
    </div>
  )
}

const TweetForm = () => {
  return (
    <div className="tweet-form">
      <img src="https://avatars.githubusercontent.com/u/282006?s=48&amp;v=4" className="avatar" />
      <div className="container">
        <textarea placeholder="¿Qué está pasando?" row="1" />
        <div className="tools">
          "Herramientas" 
          <button disabled="disabled">Twittear</button>
        </div>
      </div>
    </div>
  )
}

const Main = () => {
  return (
      <main className="main">
        <Header />
        <TweetForm />
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
