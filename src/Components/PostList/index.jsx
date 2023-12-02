import './style.css';

function PostList() {
    return (
        <div className='PostList'>
            
            <article style =  {{color:"black"}}>
                <h2>   <i className="fas fa-bullhorn"></i>  This is a blog post It has an introduction!</h2>
            </article>
            <article style =  {{color:"black"}}>
                <h2>  It has an introduction!   Here's another blog post  <i className="fas fa-cog"></i> </h2>
            </article>
            <article style =  {{color:"black"}}>
                <h2>Blog post number three</h2>
                <p>It has an introduction!</p>
            </article>
            <article style =  {{color:"black"}}>
                <h2>And another one</h2>
                <p>It has an introduction!</p>
            </article>
        </div>
    )
}



export default PostList