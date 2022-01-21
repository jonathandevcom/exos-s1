import { RandomUUIDOptions } from 'crypto';
import { useState } from 'react';

import postData from '../models/dataTp1.model';
import * as MOCK_POSTS from '../datas/exo1.data';


const TP1Page = () => {

    const [dataProducts, setDataProducts] = useState([MOCK_POSTS]);
    const { id, title, description, url, votes, submitterAvatarUrl, productImageUrl, ...} = dataProducts;

    const handleProductVote = (productId: RandomUUIDOptions, type: string) => {
        const value = (type === 'up') ? 1 : -1;
        const newDataProducts: [postData] = dataProducts.map(product => {
            product.id !== productId ? product : product.votes + 1
        });
        setDataProducts(newDataProducts);

    }


    return (
        
    )
}

export default TP1Page
