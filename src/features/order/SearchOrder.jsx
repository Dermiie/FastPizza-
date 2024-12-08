import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchOrder() {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  function submitHandler(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery('');
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        placeholder="Input order ID #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className='px-4 py-2 text-sm transition-all duration-300 bg-yellow-100 rounded-full w-28 sm:w-64 sm:focus:w-72 placeholder:text-stone-400 focus:ring focus:ring-yellow-500 focus:ring-opacity-50 focus:outline-none'
      ></input>
    </form>
  );
}

export default SearchOrder;
