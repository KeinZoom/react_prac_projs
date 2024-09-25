import useFetch from ".";

function UseFetchHookTest() {
  const [data, pending, error] = useFetch("https://dummyjson.com/products", {});

  return (
    <div>
      {pending ? (
        <div>Pending... please wait...</div>
      ) : (
        <div>
          <h1>Use Fetch Hook</h1>
          {data && data.products && data.products.length
            ? data.products.map((productItem) => (
                <p key={productItem.id}>{productItem.title}</p>
              ))
            : null}
        </div>
      )}
    </div>
  );
}

export default UseFetchHookTest;
