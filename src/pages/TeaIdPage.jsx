import React from 'react';
import { useGetTeaByIdQuery } from '../store/api/api';
import { useParams } from 'react-router-dom';
import TeaDetails from '../components/tea-details/TeaDetails';

const TeaIdPage = () => {
    const { id } = useParams();

    const {isLoading, data} = useGetTeaByIdQuery(id);

    return (
        <div>
        {isLoading ? (
            <div>LOADING....</div>
        ) : data ? (
            <TeaDetails tea={data} />
        ) : (
            <div>NOT FOUND</div>
        )}
        </div>
    )
}

export default TeaIdPage;
