import { useProductStore } from "../../store/productStore";
import Container from "../Container";

const ProductSort = () => {
  const { sortProducts, products, sortByCategory } = useProductStore();
   
  const categories = Array.from(new Set(products.map((p) => p.category)));

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "asc" || value === "desc") {
      sortProducts(value);
    }
  };
  const handleSortByCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    sortByCategory(value);
  };

  return (
    <section className="w-full border-b border-b-gray-300">
      <Container>
        <div className="w-full h-full flex flex-col sm:flex-row justify-between">
          <div className="">
            <h2 className="text-2xl font-semibold ">Categories</h2>
            <select
              onChange={handleSortByCategory}
              className="border py-1 lg:py-3 px-2 lg:px-4"
            ><option value="all">All</option>
              {categories.map((cat) => (
                <option className="capitalize" key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>{" "}
          <div className="text-gray-500 flex flex-col sm:flex-row  sm:items-center pt-5 md:pt-0">
            <span className="text-sm md:text-base pr-1">Sort by:</span>
            <select
              onChange={handleSortChange}
              className="border py-1 lg:py-3 px-2 lg:px-4"
            >
              <option value="asc" className="text-sm">
                Price,low to high
              </option>
              <option value="desc" className="text-sm">
                Price,high to low
              </option>
            </select>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProductSort;
