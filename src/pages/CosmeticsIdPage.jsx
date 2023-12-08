import React from 'react';
import { useParams } from 'react-router-dom';
import CosmeticsDetails from '../components/cosmetics-details/CosmeticsDetails';
import NotFound from '../components/not-found/NotFound';
import { LoadingOutlined } from '@ant-design/icons';
import { useGetCosmeticsByIdQuery } from '../store/api/api';

const CosmeticsIdPage = () => {
    const { id } = useParams();

    const {isLoading, data} = useGetCosmeticsByIdQuery(id);

    return (
        <div>
            {isLoading ? (
                <div style={{fontSize: 130, color: 'grey', margin: '0 auto'}}><LoadingOutlined /></div>
            ) : data ? (
                <CosmeticsDetails cosm={data} />
            ) : (
                <NotFound />
            )}
        </div>
    )
}

export default CosmeticsIdPage;
