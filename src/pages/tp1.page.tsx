import { RandomUUIDOptions } from 'crypto';
import { useState } from 'react';

import postData from '../models/dataTp1.model';
import MOCK_POSTS from '../datas/exo1.data';
import Post from '../components/tp1.component.tsx/Post.component';


const TP1Page = () => {

    const [dataProducts, setDataProducts]: postData[] = useState([MOCK_POSTS]);

    useEffect(() => {
        console.log(dataProducts);
      return () => {
        setDataProducts(dataProducts)
      };
    }, []);

    const handleProductVote = (productId: RandomUUIDOptions, type: string) => {
        const value = (type === 'up') ? 1 : -1;
        const newDataProducts: postData[] = dataProducts.map((key= productId, product: postData) => {
            product.id !== productId ? product : product.votes + value;
        });
        setDataProducts(newDataProducts);
    };

    const handleProductDelete = (productId: RandomUUIDOptions) => {
        const newDataProducts: postData[] = dataProducts.filter((product: postData) => {
            product.id !== productId
        });
        setDataProducts(newDataProducts);
    };

    const dataProductsList: postData[] = dataProducts.sort((a: number, b: number) => {
        return b.votes - a.votes;
    });

    const dataProductsListComponent: postData[] = dataProductsList.filter((product: postData) => {
        return product.votes > 0;
    })
    .map((product: postData) => (
        <Post />
    ))



    return (
        <div></div>
        
    )
}

export default TP1Page
