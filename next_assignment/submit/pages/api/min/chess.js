export default async function handler(req, res) {
    let result = req.query.coloor == "false" ? true : false;
    res.status(200).json(result);
}
