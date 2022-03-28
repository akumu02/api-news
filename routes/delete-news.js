const { Router } = require("express"),
    { deleteNewsData } = require("../components/delete-news");

const router = Router();

router.delete('/', async (req, res) => {
    const totalDeleted = await deleteNewsData(req.body.documents);

    res.status(200).json({
        message: "Request executed successfully!",
        code: 200,
        totalDeleted
    });
});

module.exports = router;