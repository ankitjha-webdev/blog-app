import "./post.css";

export const Post = () => {
    return (
        <div className="post">
            <img className="postImg" src="https://i.postimg.cc/cHhjnHyX/https-postimg-cc-mt3-VWXT8.jpg" alt="" />
            <div className="postInfo">
                <div className="postCats"> 
                    <span className="postCat">Music</span>
                    <span className="postCat">Art</span>
                    <span className="postCat">Travel</span>
                </div>
                <span className="postTitle">
                    The best way to predict the future is to create it.
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum dolor possimus exercitationem ipsam nisi, molestias vel vitae quis eos corporis natus, debitis explicabo iure, aut autem dolorem quaerat nihil totam!
                Ratione incidunt earum dignissimos hic autem numquam, cupiditate quaerat necessitatibus laborum reprehenderit nisi eius magnam vitae. Odit, temporibus quo provident rerum hic ratione fugiat quos blanditiis ad quae, repellendus sapiente.
                Laborum quis quaerat iure recusandae dolorum nesciunt. Impedit, recusandae illo necessitatibus sed itaque, natus maiores, dolor expedita nemo vero alias eveniet nihil quidem. Officiis, distinctio ullam mollitia odio voluptas sed.
            </p>
        </div>
    )
}
