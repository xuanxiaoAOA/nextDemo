import { NextApiRequest, NextApiResponse } from 'next';
var query=require("../../../db");

export default (req: NextApiRequest, res: NextApiResponse) => {
    try{
        switch (req.method.toUpperCase()) {
            case "GET":
                _get(req,res);
                break;
            case "POST":
                _post(req,res);
                break;
            case "PUT":
                _put(req,res);
                break;
            case "DELETE":
                _delete(req,res);
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

function _get(req: NextApiRequest, res: NextApiResponse){
    console.log(22222,req.query.name)
    const {name,password}=req.query
    var selectSQL = `select name from userinfo where name='${name}' and password='${password}'`;
    query(selectSQL, (err, result) => {
        if(result.length > 0){
            res.status(200).send({code:501,msg:'登录成功'});
            
        }else{
            res.status(200).send({code:501,msg:'用户名密码错误',err,result});
        }
    })
    
    
}

function _post(req: NextApiRequest, res: NextApiResponse){
    console.log(111111,req.query)
    const sql = `SELECT * FROM userinfo WHERE id = '${req.query.id}'`;
    query(sql, (err, result) => {
        res.status(200).send({respones:req.query});
    })
}

function _put(req: NextApiRequest, res: NextApiResponse){
    res.status(200).send("PUT");
}

function _delete(req: NextApiRequest, res: NextApiResponse){
    res.status(200).send("DELETE");
}
