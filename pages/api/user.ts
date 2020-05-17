import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
    try{
        switch (req.method.toUpperCase()) {
            case "GET":
                _get(req,res);
                break;
            case "POST":
                _post(req,res);
                break;
            default:
                res.status(404).send("");
                break;
        }
    } catch (e){
        //make some logs
        console.debug("error");
        console.debug(e);
        res.status(500).send("");
    }
};

async function _get(req: NextApiRequest, res: NextApiResponse){
    res.status(200).json({code:501,msg:'post'});
}

async function _post(req: NextApiRequest, res: NextApiResponse){

    res.status(200).send({status:"ok"});
}


// function _post(req: NextApiRequest, res: NextApiResponse){
//     res.status(200).send({status:"ok"});
// }