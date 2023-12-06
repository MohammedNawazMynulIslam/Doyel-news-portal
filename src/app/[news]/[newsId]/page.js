import { getSpecificNews } from '@/utils/getSpecificNews';
import React from 'react';

const NewsDetailPage = async({params}) => {
    const {data }= await getSpecificNews(params.newsId)
    console.log(data);
    return (
        <div>
            {params.newsId}
        </div>
    );
};

export default NewsDetailPage;