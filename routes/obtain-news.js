const { Router } = require("express"),
    { obtainNewsData } = require("../components/obtain-news")

const router = Router();

router.get('/', async (req, res) => {
    const newsData = await obtainNewsData(req.body);
    res.status(200).json({
        message: "Request executed successfully!",
        code: 200,
        totalByFilter: newsData?.total,
        totalByPage: newsData?.data.length,
        news: newsData?.data,
    });
});

module.exports = router;