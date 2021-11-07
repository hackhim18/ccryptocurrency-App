import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';

//import { useGetCryptosQuery } from '../services/cryptoApi';
import { cryptoNewsApi, useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
//import Loader from './Loader';

//const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;


const News = ({ simplified }) => {
 const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'CryptoCurrency',count: simplified ? 10 : 100 });
 console.log(cryptoNews);

    return (
        <div>
            News
        </div>
    )
}

export default News
