import "./post.css";
import { Users } from "../../dummyData";
import { useState } from "react";


export default function Post({post}) {
    const [like, setLike] = useState(post.like);
    const [isLiked, setIsLiked] = useState(false);

    const likeHandler = () => {
        setLike(isLiked ? like - 1 : like + 1);
        setIsLiked(!isLiked);
    }
  return (
    <>
    <div className="post">
        <div className="postwrapper">
            <div className="posttop">
                <div className="posttopleft">
                    <img className="postprofileimg" src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" />
                    <span className="postusername">{Users.filter((u) => u.id === post?.userId)[0].username}</span>
                    <span className="postdate">{post.date}</span>
                </div>
                <div className="posttopright">
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
            </div>
            <div className="postcenter">
                <span className="postcentertext">{post?.desc}</span>
                <img className="postcenterimg" src={post.photo} alt="" />
            </div>
            <div className="postbottom">
                <div className="postbottomleft">
                    <img className="postbottomlefticon" src="/assets/like.png" alt="" onClick={likeHandler} />
                    <img className="postbottomlefticon" src="/assets/heart.png" alt="" onClick={likeHandler} />
                    <span className="postbottomlefttext">{like} people like this</span>
                </div>
                <div className="postbottomright">
                    <span className="postbottomrighttext">{post.comment} Comment</span>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
