import React from 'react'
import './DescriptionBox.css'


const DescriptionBox = () => {
    return (
        <div className='descriptionbox'>
            <div className="descriptionbox-navigator">
                <div className="descriptionbox-nav-box">Description</div>
                <div className="descriptionbox-nav-box fade">Reviews (122)</div>
            </div>
            <div className="descriptionbox-description">
                <p>E-commerce, or electronic commerce, is the buying and selling of goods and services online.
                  It involves digital storefronts, secure transactions, logistics management, and a focus on delivering an excellent customer experience.</p>
               <p>Marketing efforts, data analysis, and mobile optimization  are essential for success in this rapidly growing industry.
                     E-commerce offers convenience, accessibility, and global reach, revolutionizing traditional retail.</p>
            </div>
        </div>
    )
}
export default DescriptionBox