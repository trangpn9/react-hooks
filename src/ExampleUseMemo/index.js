import React, { useRef, useState, useMemo } from "react";

function ExampleUseMemo() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productList, setProductList] = useState([]);

  const productNameRef = useRef();
  const productPriceRef = useRef();

  const handleAddProduct = () => {
    setProductList([
      ...productList,
      { productName, productPrice: +productPrice },
    ]);
    setProductName('');
    setProductPrice('');
    
    productNameRef.current.focus();
  };

  const total = useMemo(() => {
    const result = productList.reduce((result, product) => result + product.productPrice , 0);

    return result;
  }, [productList]);

  return (
    <div id="ExampleUseMemo">
      <h1 style={{color: 'red'}}>Example using useMemo</h1>
      <input
        ref={productNameRef}
        placeholder="Enter product name"
        type="text"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />
      <input
        ref={productPriceRef}
        placeholder="Enter product price"
        type="text"
        value={productPrice}
        onChange={(e) => setProductPrice(e.target.value)}
      />
      <button type="button" onClick={handleAddProduct}>
        Add
      </button>
      <h2>Total: {total}</h2>
      <ul>
        {productList.map((product, index) => (
          <li key={index}>
            {product.productName} - {product.productPrice}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExampleUseMemo;
