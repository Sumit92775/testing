import Image from 'next/image';
import ProductCard from '../components/Common/ProductCard';

import 'react-alice-carousel/lib/alice-carousel.css';
import { Button } from 'antd';
import PublicLayout from '../components/Public/Layout';
import Tag from '../components/Common/Tag';
import Icon from '@material-ui/core/Icon';
import { useSelector, useDispatch } from 'react-redux';
import { addProvider } from '../actions/sponsoredProviders'
import styles from '../styles/pages/Index.module.scss';

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

export default function Home() {
  const dispatch = useDispatch();
  let items = useSelector((state:{sponsoredProviders: any}) => state.sponsoredProviders);

  let products = [
    {
      image: '/product (1).png',
      name: 'Dorman Beauty Clinic',
      rating: 5.0,
      reviews: 24,
      sortDesc: 'All kind of beauty services at an affordable rate'
    },
    {
      image: '/product (2).png',
      name: 'Dorman Beauty Clinic',
      rating: 3.2,
      reviews: 24,
      sortDesc: 'All kind of beauty services at an affordable rate'
    },
    {
      image: '/product (3).png',
      name: 'Dorman Beauty Clinic',
      rating: 5,
      reviews: 24,
      sortDesc: 'All kind of beauty services at an affordable rate'
    },
    {
      image: '/product (4).png',
      name: 'Dorman Beauty Clinic',
      rating: 5,
      reviews: 24,
      sortDesc: 'All kind of beauty services at an affordable rate'
    },
    {
      image: '/product (5).png',
      name: 'Dorman Beauty Clinic',
      rating: 5,
      reviews: 24,
      sortDesc: 'All kind of beauty services at an affordable rate'
    },
  ];
  let tags = [
    {
      name: 'Restaurants',
      icon: 'room_service',
      selected: true
    },
    {
      name: 'Beauty Shops',
      icon: 'local_florist',
      selected: false
    },
    {
      name: 'Clinics',
      icon: 'local_pharmacy',
      selected: false
    },
    {
      name: 'Driving Training',
      icon: 'bluetooth_drive',
      selected: false
    },
    {
      name: 'Beverages',
      icon: 'local_bar',
      selected: false
    },
    {
      name: 'Bakery and Desserts',
      icon: 'fastfood',
      selected: true
    },
    {
      name: 'Sports Clubs',
      icon: 'directions_bike',
      selected: true
    },
    {
      name: 'Venue',
      icon: 'meeting_room',
      selected: false
    },
    {
      name: 'Gift Shop',
      icon: 'card_giftcard',
      selected: false
    }
  ],
  loadMore = () => {
    products.map((product, j) => {
      const id = `${Date.now()}${j}`;
      dispatch(addProvider(<ProductCard product={{...product, id: id}} key={id} />))
    })
  };

  return (
    <PublicLayout>
      <section className="banner home">
        <Image layout="fill" src="/slider 1.jpg" alt="" />
      </section>
      <section className={ styles['providers-section'] }>
        <h2>Our Top Providers</h2>
        <h4 className="regular mb-56">Browse few of the top performers of the week</h4>
        <div className="products-wrapper">
          { products.map((product, i) => {
              return <ProductCard product={product} key={i} />
            })
          }
        </div>
      </section>

      <section className="banner home banner-2"></section>

      <section className={ styles['sponsored-providers'] }>
        <h2>Sponsored Providers</h2>
        <h4 className="regular mb-43">Browse few of the top performers of the week</h4>
        <div className="tags-wrap mb-40">
        {
          tags.map((tag, i) => {
            return <Tag key={i} name={tag.name} icon={<Icon>{tag.icon}</Icon>} selected={tag.selected} />
          })
        }
        </div>
        <div className="products-wrapper">
          { items }
        </div>
        <div className="mt-55 mb-25 center">
          <Button className="primary" onClick={loadMore}>Load More</Button>
        </div>
      </section>
      
      <section className="p-35">
        <div className="banner home banner-3"></div>
      </section>
    </PublicLayout>
  )
}