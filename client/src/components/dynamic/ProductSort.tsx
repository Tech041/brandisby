import Container from "../Container";

const ProductSort = () => {
  return (
    <section className="w-full">
      <Container>
        <div className="w-full h-full flex justify-between">
          <div className="">
            <h2 className="text-2xl font-semibold ">Categories</h2>
            <ul className="text-base text-gray-500">
              <li className="">Expensive</li>
              <li className="">Lucrative</li>
              <li className="">Moderate</li>
            </ul>
          </div>{" "}
          <div className="text-gray-500">
            <span className="text-sm md:text-lg pr-1">Sort By:</span>
            <select className="border py-1 lg:py-3 px-2 lg:px-4">
              <option value="" className="text-sm">
                Price,low to high
              </option>
              <option value="" className="text-sm">
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
