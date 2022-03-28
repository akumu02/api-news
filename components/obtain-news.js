const MongoClient = require("mongodb").MongoClient;

async function obtainNewsData(queryFind) {
    try {
        client = await MongoClient.connect("mongodb+srv://kathy:y401Lve@cluster0.ybwd1.mongodb.net/news?retryWrites=true&w=majority");

        let db = client.db("news");
        const collectionNews = db.collection("data");
        const pageNumber = queryFind.page;
        const value = queryFind.value;
        const filter = queryFind.filter;
        const queryFilter = value instanceof Array ? { [filter]: { '$in': value }, deleted: { $ne: 1 } } : { [filter]: value, deleted: { $ne: 1 } };

        const newsData = await collectionNews.aggregate([{ '$match': queryFilter }, {
            $facet: {
                edges: [
                    { $sort: { created_at: -1 } },
                    { $skip: (pageNumber - 1) * 5 },
                    { $limit: 5 },
                ],
                pageInfo: [
                    { $group: { _id: null, count: { $sum: 1 } } },
                ],
            },
        }]).toArray();

        return { total: newsData[0].pageInfo[0]?.count, data: newsData[0]?.edges };
    } catch (error) {
        console.log("error: ", error);
    }
    client.close();
}

module.exports.obtainNewsData = obtainNewsData;