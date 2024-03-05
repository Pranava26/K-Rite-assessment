import React from 'react'
import './RightSection.css'
import Table from './Table'

const RightSection = () => {
    return (
        <section className='right__section'>
            <div className='table__container'>
                <div className='products__page'>
                    <p>Products</p>
                    <div className="options">
                        <div className="search__box">
                            <i className="fa-solid fa-magnifying-glass"></i>
                            <p>Search for..</p>
                        </div>
                        <i className="fa-solid fa-computer"></i>
                        <i className="fa-solid fa-gear"></i>
                    </div>
                </div>
                <hr />
                <div className="toggle__options">
                    <div className="options__left">
                        <p><i className="fa-solid fa-border-all"></i> All brands <i className="fa-solid fa-caret-down"></i></p>
                        <p>Desk <i className="fa-solid fa-caret-down"></i></p>
                        <p>Tags <i className="fa-solid fa-caret-down"></i></p>
                        <p className='content__gray'><i className="fa-solid fa-sort"></i> Sort</p>
                        <p className='content__gray'><i className="fa-solid fa-arrow-down-short-wide"></i> Filter</p>
                    </div>
                    <div className="options__right">
                        <p><i className="fa-solid fa-square-plus"></i> Meeting</p>
                        <p><i className="fa-solid fa-upload"></i> Import/Export</p>
                    </div>
                </div>
                <hr />
                <div className='table__container'>
                    <Table />
                </div>
            </div>
            <div className='table__options'>
                <p>3 selected</p>
                <p><i className="fa-solid fa-folder-minus"></i> Archive</p>
                <p><i className="fa-solid fa-trash"></i> Delete</p>
                <p>More <i className="fa-solid fa-angle-down"></i></p>
            </div>
        </section>
    )
}

export default RightSection
