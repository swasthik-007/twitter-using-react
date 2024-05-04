

import TweetList from './tweetList';
import AddTweet from './AddTweet';
import { useState } from 'react';


const InitialDummyTweets=[
    {id:0 , content: ' we have a new twitter called as threads', likeCount: 3,createdAt: new Date() },
    {id:1 , content: ' what should we post??', likeCount: 4 ,createdAt: new Date()},
    {id:2 , content: ' what is up with the tech-community? ', likeCount: 5 ,createdAt: new Date()}
  ];

function Twitter(){

    const [tweets,setTweets]=useState(InitialDummyTweets);
   
    const handleAddTweet=(text)=>{
   
        let nextId=(tweets.length>0) ? tweets[tweets.length-1].id+1 : 0;
   
        setTweets([...tweets,{
   
            content:text,
            likeCount:Math.floor(Math.random()*10), //this is a random like count
            id: nextId,
            createdAt: new Date()
        }]);
    }
   
    return (
        <>
        <AddTweet  onAddTweet={handleAddTweet} />
          <TweetList  tweets={tweets}/>
        </>
      );
}
export default Twitter;