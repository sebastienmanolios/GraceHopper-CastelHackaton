const City = require("../models/cityModel");

// const newCity = (req, res, next) => {
//   res.json({ message: "POST new city" });
// };

// GET 
const getCities = async (req, res, next) => {
  const cities = await City.find({});
  res.json(cities);
};

//GET {id}
const getById = async(req, res) => {
    try{
        let lib_zone = req.body.lib_zone;
        const city = await City.findOne({lib_zone});
        console.log(city);
        res.status(200);
    } catch(err) {
        res.send(err);
        console.log(err);
    }
    
    
}
// UPDATE (NOT working)
const updateCity = (req, res) => {
    let lib_zone = req.params.lib_zone;
    City.findOneAndUpdate({lib_zone:lib_zone}, {$set:{
        X: req.body.X,
        Y: req.body.Y,
        lib_zone: req.body.lib_zone,
        lib_qual: req.body.lib_qual,
        code_qual: req.body.code_qual,
        code_o3: req.body.code_o3,
        code_no2: req.body.code_no2,
        code_so2: req.body.code_so2,
        code_pm10: req.body.code_pm10,
        code_pm25: req.body.code_pm25
    }}, {new: true}, (err, data) =>{    
        if(err || !data){
            console.log(data);
            return res.json({err})
        } else {
            console.log(arguments);
            res.status(200);
        }
    })
};



module.exports = { getCities, updateCity, getById };

/**
 * X: { type: Number, required: true },
    Y: { type: Number, required: true },
    lib_zone: { type: String, required: true },
    code_qual: { type: Number, required: true },
    lib_qual: { type: String, required: true },
    code_o3: { type: Number },
    code_no2: { type: Number },
    code_so2: { type: Number },
    code_pm10: { type: Number },
    code_pm25: { type: Number },
 */