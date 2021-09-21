import React from 'react'
import Layout from '../components/User/Layout';
import ReviewsComponent from '../components/Common/Reviews';
import CustomerLayout from '../components/User/Customer-Layout';


const Reviews = () => {
    return (
        <CustomerLayout>
            <div>
                <h3 className="mb-47">Reviews</h3>
                <ReviewsComponent />
            </div>
        </CustomerLayout>
    )
}

export default Reviews
