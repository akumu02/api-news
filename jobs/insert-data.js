const { default: axios } = require("axios"),
    MongoClient = require("mongodb").MongoClient;

async function insertData() {
    async function getData() {
        const toInsertNews = await axios.get(
            "https://hn.algolia.com/api/v1/search_by_date"
        );
        return toInsertNews.data.hits;
    }
    const newsData = await getData();

    async function updateNesData(newsData) {
        try {
            client = await MongoClient.connect("mongodb+srv://kathy:y401Lve@cluster0.ybwd1.mongodb.net/news?retryWrites=true&w=majority");

            let db = client.db("news");
            const collectionNews = db.collection("data");

            newsData.forEach(async function (data) {
                const findNew = await collectionNews.findOne({ objectID: data.objectID });

                if (!findNew) {
                    await collectionNews.insertOne(data);
                }

            });

            return 0;
        } catch (error) {
            console.log("error: ", error);
        }
        client.close();
    }

    await updateNesData(newsData);
}

module.exports.insertData = insertData;