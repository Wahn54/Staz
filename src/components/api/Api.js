import { useEffect, useState, } from "react";
import './/style.css';
function Api() {
  const chunkSize = 10;
  const [data, setData] = useState([]);
  const [pages, setPages] = useState([]);
  useEffect(() => {
    const result = [];
    for(let i = 0; i < data.length; i += chunkSize){
        result.push(data.slice(i, i + chunkSize));
    }
    console.log(result);
    setPages(result);
  }, [data])
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setTimeout(() => setData(json),4000));
  }, []);
  const [currentPage, setCurrentPage] = useState(0);
  const handlePrevPage = () => {
    if(currentPage === 0) return; 
    setCurrentPage(prev => prev - 1);
  }
  const handleNextPage = () => {
    if(currentPage === pages.length - 1) return; 
    setCurrentPage(prev => prev + 1);
  }
  if(pages.length === 0) {
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
                    <input type="search" id="search" placeholder="Search..."/>
                  </div>
                <button  onClick={handleNextPage} type='button'>
                  <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                    <g><path d="M0,0h24v24H0V0z" fill="none"/></g>
                    <g><polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/></g>
                  </svg>
                </button>
              </>
  
                <ul className="siema">
                    {pages[currentPage].map((post) => (
                    <li key={post.id}>`${post.title} ${post.id} ${post.body}`</li>
                    ))}
                </ul>
        </div>
  )
}
export default Api;
