import React from 'react'
import './LeftSection.css'
import Select from 'react-select'

const LeftSection = () => {
    const options = [
        { value: "Roadmap", label: "Roadmap" },
        { value: "Feedback", label: "Feedback" },
        { value: "Performance", label: "Performance" },
        { value: "Team", label: "Team" },
        { value: "Analytics", label: "Analytics" },
    ]
    return (
        <section className='left__section'>
            <div>
                <div className="profile__section">
                    <div className='org__info'>
                        <i className="fa-solid fa-i"></i>
                        <div>
                            <p>INC</p>
                            <p>InnovativeHub</p>
                        </div>
                    </div>
                    <i className="fa-solid fa-user"></i>
                </div>
                <div className='departments'>
                    <p className='elements__padding'><i className="fa-solid fa-pen"></i> Design team</p>
                    <p className='elements__padding'><i className="fa-solid fa-bullhorn"></i> Marketing team</p>
                    <p className='elements__padding'><i className="fa-solid fa-code"></i> Development team</p>
                    <p className='text__light elements__padding'><i className="fa-solid fa-camera"></i> Create a forum</p>
                </div>
                <div className="folders">
                    <p className='folder__menu'>FOLDERS <i className="fa-solid fa-plus"></i></p>
                    <Select options={options} placeholder="Products" className='menu' />
                    <Select placeholder="Sales" className='menu' />
                    <Select placeholder="Design" className='menu' />
                    <Select isDisabled placeholder="Office" className='menu' />
                    <Select isDisabled placeholder="Legal" className='menu' />
                </div>
            </div>
            <div className='account__details'>
                <div className='account__options'>
                    <p><i className="fa-solid fa-user-plus"></i> Invite teammates</p>
                    <p><i className="fa-solid fa-question"></i> Help and first Steps</p>
                </div>
                <div className='subscription'>
                    <p>7 days left on trail</p>
                    <button>Add billing</button>
                </div>
            </div>
        </section>
    )
}

export default LeftSection
