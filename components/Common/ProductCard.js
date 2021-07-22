import styles from './ProductCard.module.scss';
import { Rate } from 'antd';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { removeProvider } from '../../actions/sponsoredProviders'

const ProductCard = (data) => {
    const dispatch = useDispatch();

    return (
        <div className={styles['product-card']} onClick={() => dispatch(removeProvider(data.product.id))}>
            <div className={styles['product-image']}>
                <Image layout="fill" src={ data.product.image } alt={ data.product.image } />
            </div>
            <div className={styles['product-details']}>
                <h6 className="mb-3">{ data.product.name }</h6>
                <div className={styles['product-rating']}>
                    <Rate className="mr-10" value={ data.product.rating } /> <span>{ data.product.rating } ({ data.product.reviews })</span>
                </div>
                <p>{ data.product.sortDesc }</p>
            </div>
        </div>
    )
}

export default ProductCard
