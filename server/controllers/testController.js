const testController = (req,res) => {
     return res.status(200).send({
        success:"true",
        message:"procted route"
     })
}

export default testController;