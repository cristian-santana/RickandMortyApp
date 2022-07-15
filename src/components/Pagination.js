import React from 'react'

const Pagination = ({prev, next, onPrevios, onNext}) => {
        
    const handlePrevious = () => {
        onPrevios();
    }

    const handleNext = () => {
        onNext();
    }


    return (
        <nav>
           <ul className='pagination justify-content-center'>
            { prev ? (
              <li className='page-item'>
                <button className='page-link' onclick={handlePrevious}>Previous</button>
              </li>
             ) : null}
            
            {
                next ? (
              <li className='page-item'>
                <button className='page-link' onclick={ handleNext}>Next</button>
              </li> 
                ):null}

           
           </ul>
        </nav>
    )
}

export default Pagination;