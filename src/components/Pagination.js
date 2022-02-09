import React, { useState } from 'react'
import '../styles/Pagination.css'

const Pagination = ({perPage, currentPage, itemsLength, pageChanged}) => {

    let numberPages = Math.ceil( itemsLength / perPage)
    const [currentPageC, setCurrentPageC] = useState(currentPage)

    const prevPage = () => {
        if( currentPageC > 1) {
            let Cp = currentPageC - 1
            pageChanged(Cp)
            setCurrentPageC(Cp)
        }
        console.log("currentPage : " + currentPage)
        console.log("numberPages : " + numberPages)

    }

    const changePage = (i) => {
        setCurrentPageC(i)
        pageChanged(i)
    }

    const nextPage = () => {
        if( currentPageC < numberPages) {
            let Cp = currentPageC + 1
            pageChanged(Cp)
            setCurrentPageC(Cp)        }
        console.log("currentPage : " + currentPageC)
        console.log("numberPages : " + numberPages)
    }
    const displayNumbers = () => {
        let numbers = []
        numbers.push(<li key={0} onClick={prevPage} className="pagination-prev">Prev</li>)
        for(let i = 1; i <= numberPages; i++) {
            numbers.push(
                <li key={i} className={ currentPageC === i ? "active" : ""}
                onClick={ () => changePage(i)}>{i}</li>
            )
        }
        numbers.push(<li key={numberPages + 1} onClick={nextPage} className="pagination-next">Next</li>)
        return numbers
    }

    return (
        <div className="Pagination">
            { displayNumbers() }
        </div>
    )
}

export default Pagination
