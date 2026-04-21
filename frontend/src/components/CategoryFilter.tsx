interface CategoryFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

function CategoryFilter({ categories, activeCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="store-category-filter" aria-label="Bộ lọc danh mục">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          className={`store-category-pill ${activeCategory === category ? 'is-active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter