

const newCity = (req, res, next) => {
    res.json({message: "POST new city"}); 
};

module.exports = {newCity};