export const getCategoryNews = async(category)=>{
    const res = await fetch(
        `https://the-news-portal-server.vercel.app/news?category=${category}`,
        {
            catch:"no-store"
        }
    );
    return res.json()
};