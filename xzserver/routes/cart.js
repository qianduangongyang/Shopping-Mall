const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
    var sql = "select * from xz_shoppingcart_item";
    pool.query(sql,[],(err,result)=>{
        if(err){
            throw err;
        }else{
            res.send(result);
        }
    })
})

module.exports=router;