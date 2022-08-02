// import React from 'react';
// import { Link } from 'react-router-dom';
// const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage}) => {
// console.log("postperpag "+postsPerPage)
// console.log("totalPosts "+totalPosts)
// console.log("currentpage "+currentPage)
// const maxNumberOfOptions=5
// const options=[]
// const getPageIndexOptions = function (totalPosts, maxNumberOfOptions, postsPerPage, currentPage) {
//     const pivot = Math.ceil(maxNumberOfOptions/2);
//     console.log("pivot "+pivot)
//     const lastPageIndex = Math.floor((totalPosts + postsPerPage - 1) / postsPerPage) -1 ;
//     console.log("lastpageindex "+lastPageIndex)
//     if (lastPageIndex <= maxNumberOfOptions) {
//       while(options.length < lastPageIndex) options.push(options.length + 1);
//     } else if (currentPage < pivot) {
//       while(options.length < maxNumberOfOptions) options.push(options.length + 1);
//     } else if (currentPage > (lastPageIndex - pivot)) {
//       while(options.length < maxNumberOfOptions) options.unshift(lastPageIndex - options.length + 1);
//     } else {
//       for (var i = currentPage - (pivot - 1); options.length < maxNumberOfOptions; i++) {
//         options.push(i + 1);
//       }
//     }
//     return(options);
// }
// getPageIndexOptions(totalPosts, maxNumberOfOptions, postsPerPage, currentPage) 
// console.log(options.length)
//   return (
//     <div id="pagination-container" className="light-theme simple-pagination">
//       <ul>
//       {options.includes(currentPage - 1) && 
//       <li><Link to="#" className="page-link" onClick={() => {
//                     paginate(currentPage - 1);
//                 }}>«</Link></li>} 
//                 {options.map(number => 
//           (<li className={number===currentPage ? "active" : ""} key={number}>
//                {number===currentPage ? ( <span className={number===currentPage ? "current" : ""}>{number}</span>):
//           (<Link to="#" className={number!==currentPage ? "page-link" : ""} onClick={()=>paginate(number)}>{number}</Link>)}   
//           </li>))}
//         {options.includes(currentPage + 1) && 
//       <li> 
//         <Link to="#" className="page-link" onClick={() => {
//             paginate(currentPage + 1);
//         }}>» 
//         </Link></li>}
//       </ul>
//     </div>
    
    
//   );
// };

// export default Pagination;





import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage}) => {
  const pageNumbers = [];
  const [show, setshow] = useState(true)
  for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
    pageNumbers.push(i);
  }
useEffect(() => {
  if(currentPage<5){
    setshow(true)
  }
  else{
    setshow(false)
  }
}, [currentPage])
  return (
    <div id="pagination-container" className="light-theme simple-pagination">
      <ul>
      {pageNumbers.includes(currentPage - 1) && 
      <li><Link to="#" className="page-link" onClick={() => {
                    paginate(currentPage - 1);
                }}>«</Link></li>}
        {pageNumbers.map(number =>
        
        show===true && number < 5 ?
          (<li className={number===currentPage ? "active" : ""} key={number}>
               {number===currentPage ? ( <span className={number===currentPage ? "current" : ""}>{number}</span>):
          (<Link to="#" className={number!==currentPage ? "page-link" : ""} onClick={()=>paginate(number)}>{number}</Link>)}   
          </li>)
        :
        show===false && number >=5 && (<li className={number===currentPage ? "active" : ""} key={number}>
          {number===currentPage ? ( <span className={number===currentPage ? "current" : ""}>{number}</span>):
        (<Link to="#" className={number!==currentPage ? "page-link" : ""} onClick={()=>paginate(number)}>{number}</Link>)}   
        </li>)
        )}
        {pageNumbers.includes(currentPage + 1) && 
      <li> 
        <Link to="#" className="page-link" onClick={() => {
            paginate(currentPage + 1);
        }}>» 
        </Link></li>}
      </ul>
    </div>
    
    
  );
};

export default Pagination;