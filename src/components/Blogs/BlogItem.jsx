import "./BlogItem.css"
const BlogItem = () => {
  return (
    <li className="blog-item">
    <a href="#" className="blog-image">
      <img src="img/blogs/blog1.jpg" alt="" />
    </a>
    <div className="blog-info">
      <div className="blog-info-top">
        <span>25 Şubat 2021 </span>
        -
        <span>0 Yorumlar</span>
      </div>
      <div className="blog-info-center">
        <a href="#">Türkiye ilk moda sitesi</a>
      </div>
      <div className="blog-info-bottom">
        <a href="#">Daha fazla bilgi edinin</a>
      </div>
    </div>
  </li>
  )
}

export default BlogItem
