import React from 'react'
import './Table.css'

const Table = () => {
    return (
        <>
            <table className='table'>
                <thead className='table__head'>
                    <tr>
                        <th>Brand</th>
                        <th>Description</th>
                        <th className='members'>Members</th>
                        <th>Categories</th>
                        <th>Tags</th>
                        <th>Next meeting</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><i className="fa-solid fa-w wix__icon"></i> Wix</td>
                        <td>Develop a personalized fit..</td>
                        <td className='members'><i className="fa-solid fa-users"></i></td>
                        <td><span className='text__voilet'>Automation</span></td>
                        <td><span className='text__gray'>#Digital/Transformation</span></td>
                        <td><span className='text__green'>in 30 minutes</span></td>
                    </tr>
                    <tr>
                        <td><i className="fa-brands fa-shopify"></i> Shopify</td>
                        <td>Introduce a cloud-based..</td>
                        <td className='members'><i className="fa-solid fa-users"></i></td>
                        <td className='content__flex'>
                            <span className='text__brown'>E-commerce</span>
                            <span className='text__brown'>B2B</span>
                        </td>
                        <td><span className='text__gray'>#OnlineShopping</span></td>
                        <td><span className='text__blue'>Tomorrow</span></td>
                    </tr>
                    <tr>
                        <td><i className="fa-brands fa-mailchimp"></i> MailChimp</td>
                        <td>Develop a mobile app aim..</td>
                        <td className='members'><i className="fa-solid fa-users"></i></td>
                        <td className='content__flex'><span className='text__green'>SAAS</span>
                            <span className='text__brown'>Mobile</span>
                        </td>
                        <td><span className='text__gray'>#Cloud</span></td>
                        <td><span className='text__blue'>Tomorrow</span></td>
                    </tr>
                    <tr>
                        <td><i className="fa-brands fa-paypal"></i> Paypal</td>
                        <td>This program could include..</td>
                        <td className='members'><i className="fa-solid fa-users"></i></td>
                        <td><span className='text__green'>Marketplace</span></td>
                        <td><span className='text__gray'>#BuySellOnline</span></td>
                        <td><span className='text__green'>in 6 hours</span></td>
                    </tr>
                    <tr>
                        <td><i className="fa-solid fa-d"></i> Disney</td>
                        <td>Introduce a B2B solution..</td>
                        <td className='members'><i className="fa-solid fa-users"></i></td>
                        <td className='content__flex'>
                            <span className='text__brown'>B2B</span>
                            <span className='text__brown'>B2C</span>
                        </td>
                        <td><span className='text__gray'>#BusinessPartnerships</span></td>
                        <td><span className='text__brown'>No contact</span></td>
                    </tr>
                    <tr>
                        <td><i className="fa-brands fa-intercom"></i> Intercom</td>
                        <td>Implement an AI-driven..</td>
                        <td className='members'><i className="fa-solid fa-users"></i></td>
                        <td className='content__flex'>
                            <span className='text__blue'>Technology</span>
                            <span className='text__green'>SAAS</span>
                        </td>
                        <td><span className='text__gray'>#Digital/Transformation</span></td>
                        <td><span className='text__green'>in 1 hour</span></td>
                    </tr>
                    <tr>
                        <td><i className="fa-brands fa-google"></i> Google</td>
                        <td>Offer a comprehensive..</td>
                        <td className='members'><i className="fa-solid fa-users"></i></td>
                        <td className='content__flex'>
                            <span className='text__brown'>Finance</span>
                            <span className='text__voilet'>Automation</span>
                        </td>
                        <td><span className='text__gray'>#SmartFinance</span></td>
                        <td><span className='text__green'>in 30 minutes</span></td>
                    </tr>
                    <tr>
                        <td><i className="fa-brands fa-evernote"></i> Evernote</td>
                        <td>This could include smart..</td>
                        <td className='members'><i className="fa-solid fa-users"></i></td>
                        <td>
                            <span className='text__brown'>Transportation</span>
                        </td>
                        <td><span className='text__gray'>#LogisticsTech</span></td>
                        <td><span className='text__gray'>Next month</span></td>
                    </tr>
                    <tr>
                        <td><i className="fa-brands fa-microsoft"></i> Microsoft</td>
                        <td>Launch an advisory service..</td>
                        <td className='members'><i className="fa-solid fa-users"></i></td>
                        <td className='content__flex'>
                            <span className='text__voilet'>Publishing</span>
                            <span className='text__brown'>B2C</span>
                        </td>
                        <td><span className='text__gray'>#B2CMarketing</span></td>
                        <td><span className='text__brown'>No contact</span></td>
                    </tr>
                    <tr>
                        <td><i className="fa-brands fa-invision"></i> Invision</td>
                        <td>The tool would analyze tre..</td>
                        <td className='members'><i className="fa-solid fa-users"></i></td>
                        <td>
                            <span className='text__blue'>Web Services</span>
                        </td>
                        <td><span className='text__gray'>#APIsIntegration</span></td>
                        <td><span className='text__gray'>Next month</span></td>
                    </tr>
                    <tr className='font__gray'>
                        <td>10 count</td>
                        <td>+ Add calculation</td>
                        <td>+ Add calculation</td>
                        <td>+ Add calculation</td>
                        <td>+ Add calculation</td>
                    </tr>
                </tbody>
            </table>
        </>
    )
}

export default Table
