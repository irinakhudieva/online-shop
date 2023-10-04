import React from 'react';
import { useGetTeaByIdQuery } from '../store/api/api';
import { useParams } from 'react-router-dom';
import TeaDetails from '../components/tea-details/TeaDetails';
import NotFound from '../components/not-found/NotFound';
import { LoadingOutlined } from '@ant-design/icons';

const TeaIdPage = () => {
    const { id } = useParams();

    const {isLoading, data} = useGetTeaByIdQuery(id);

    return (
        <div>
        {isLoading ? (
            <div style={{fontSize: 130, color: 'grey', margin: '0 auto'}}><LoadingOutlined /></div>
        ) : data ? (
            <TeaDetails tea={data} />
        ) : (
            <NotFound />
        )}
        </div>
    )
}

export default TeaIdPage;
