import { useEffect, useState, } from "react";
import './/style.css';
import useFilter from "../hooks/useFilter";
function Api() {
  const chunkSize = 10;
  const [pages, setPages] = useState([]);
  const { filter, setFilter, filteredData, setData} = useFilter();
  const [loading, setLoading] = useState(true);

  const handleInputChange = (e) => {
    setFilter(e.target.value)
  }
  useEffect(() => {
    const result = [];
    for(let i = 0; i < filteredData.length; i += chunkSize){
        result.push(filteredData.slice(i, i + chunkSize));
    }
    setPages(result);
  }, [filteredData])
  useEffect(() => {
      let timeout
      const getData = async () => {
        try{
          const response = await fetch("https://jsonplaceholder.typicode.com/posts")
          const data = await response.json()
          timeout = setTimeout(() => {
            setData(data)
          }
          , 4000)
          setData(data)
        }
        catch(error){
          console.error(error)
        }
      }
      getData()
      return() => clearTimeout(timeout)
  }, [setData]);
  useEffect(() =>{
    if(pages.length) setLoading(false)
  }, [pages])
  const [currentPage, setCurrentPage] = useState(0);
  const handlePrevPage = () => {
    if(currentPage === 0) return; 
    setCurrentPage(prev => prev - 1);
  }
  const handleNextPage = () => {
    if(currentPage === pages.length - 1) return; 
    setCurrentPage(prev => prev + 1);
  }
  if(loading) {
    return (
      <div>
      <h1>Loading...</h1>
      <div className="loader">
      <div className="div1"></div>
      <div className="div1"></div>
      <div className="div1"></div>
      <div className="div1"></div>
      <div className="div1"></div>
      <div className="div1"></div>
      <div className="div1"></div>
      <div className="div1"></div>
    </div> 
    </div>);
  }
  return (
    <div>
            <h1>API</h1>
              <>
                <button onClick={handlePrevPage} type='button'>
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                    <path d="M0 0h24v24H0V0z" fill="none" opacity=".87"/>
                    <path d="M17.51 3.87L15.73 2.1 5.84 12l9.9 9.9 1.77-1.77L9.38 12l8.13-8.13z"/>
                  </svg>
                </button>
                  <div>
                    <input type="search" id="source" placeholder="Search..." value={filter} onChange={handleInputChange}/>
                  </div>
                <button  onClick={handleNextPage} type='button'>
                  <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                    <g><path d="M0,0h24v24H0V0z" fill="none"/></g>
                    <g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g>
                  </svg>
                </button>
              </>
                <ul className="siema">
                    {pages.length && pages[currentPage].map((post) => (
                    <li key={post.id}>`${post.title} ${post.body}`</li>
                    ))}
                </ul>
        </div>
  )
}
export default Api;
