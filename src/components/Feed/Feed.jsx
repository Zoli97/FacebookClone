import StoryReel from "../Stories/StoryReel";
import Post from "../../components/Post/Post";
import "../../styles/Feed.css";
import MessageSender from "../MessageSender/MessageSender";
function Feed() {
  return (
    <div className="feed">
      {/*Story reel*/}
      <StoryReel />
      {/*MessageSender*/}
      <MessageSender />

      {/* Post */}
      <Post
        profilePic="https://images.pexels.com/photos/13835274/pexels-photo-13835274.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
        message="Wow this works"
        timestamp="This is a timestamp"
        username="Toma Robert"
        image="https://images.pexels.com/photos/7778196/pexels-photo-7778196.jpeg?auto=compress&cs=tinysrgb&w=1600"
      />
      <Post />
      <Post />
    </div>
  );
}

export default Feed;
