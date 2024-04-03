import CategoriesItem from "./CategoriesItem"
import "./Categories.css"

const Categories = () => {
  return (
    <section className="categories">
    <div className="container">
      <div className="section-title">
        <h2>Tüm Kategoriler</h2>
        <p>Yaz Koleksiyonu Yeni Morden Tasarım</p>
      </div>
      <ul className="category-list">
       <CategoriesItem />
       <CategoriesItem />
       <CategoriesItem />
       <CategoriesItem />
       <CategoriesItem />
       <CategoriesItem />
      </ul>
    </div>
  </section>
  )
}

export default Categories
