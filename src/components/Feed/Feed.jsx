import StoryReel from "../Stories/StoryReel";
import Post from "../../components/Post/Post";
import "../../styles/Feed.css";
import MessageSender from "../MessageSender/MessageSender";
import { useTheme } from "../../ThemeContext";
import { useEffect, useState } from "react";
import db from "../../firebase";
import {
  collection,
  onSnapshot,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";

function Feed() {
  //track the post
  const { theme } = useTheme();
  const [posts, setPosts] = useState([]);
  const currentTimestamp = new Date().toISOString();
  //its a real time connection to the db.
  //run a code when the feed actually loads, but only run it once.
  useEffect(() => {
    //only run the code when the feed loads.

    const snapshot = onSnapshot(
      collection(db, "fb_posts"),
      orderBy("timestamp", "desc"),
      (snap) => {
        //when i get that snapshot update the post and get an array of docs and map thorugh every single one and for each one i want to return  custom obj.
        setPosts(
          snap.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      }
    );

    return () => {
      snapshot();
    };
  }, []);
  return (
    <div className={`feed __feed__ ${theme}`}>
      {/*Story reel*/}
      <StoryReel />
      {/*MessageSender*/}
      <MessageSender />

      {/* Post */}
      {/*map through every single post*/}
      {posts.map((post) => (
        <Post
          key={post.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.timestamp || currentTimestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}
    </div>
  );
}

export default Feed;
