function Searchbar({ handleChange }) {
  //use state

  return (
    <input
      onChange={handleChange}
      placeholder="search"
      className="w-[70%] flex justify-start items-center border border-black rounded-md p-3"
    />
  );
}

export default Searchbar;
