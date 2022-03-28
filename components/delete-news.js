const MongoClient = require("mongodb").MongoClient,
    ObjectId = require('mongodb').ObjectId;

async function deleteNewsData(queryFilter) {
    try {
        client = await MongoClient.connect("mongodb+srv://kathy:y401Lve@cluster0.ybwd1.mongodb.net/news?retryWrites=true&w=majority");

        let db = client.db("news");
        const collectionNews = db.collection("data");

        console.log({ "_id": { '$in': queryFilter.map(filter => new ObjectId(filter._id)) } });

        const newsData = await collectionNews.updateMany(
            { "_id": { '$in': queryFilter.map(filter => new ObjectId(filter._id)) } },
            { $set: { "deleted": 1 } });

        return { total: newsData };
    } catch (error) {
        console.log("error: ", error);
    }
    client.close();
}

module.exports.deleteNewsData = deleteNewsData;