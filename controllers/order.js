const Order = require('../models/Order');

exports.insertOrder = async (req,res,next)=>{
    try{
        if(!req.body.price){
            throw new Error('Price is mandatory')
        }
    const price=req.body.price;
    const dish=req.body.dish;
    const tableno=req.body.tablenum;

    const data = await Order.create({price: price, dish:dish, tableno:tableno});
    res.status(201).json({newOrderDetail:data});
    } catch(err){
        res.status(500).json({
            error:err
        })
    }
}

exports.getOrders = async (req,res,next)=>{
    try{
        const orders=await Order.findAll();
        res.status(200).json({allOrders:orders});
    } catch(error){
        console.log('Get user is failing',JSON.stringify(error));
        res.status(500).json({error:error})
    }
}

exports.deleteOrder = async (req,res,next)=>{
    try{
        if(req.params.id=='undefined'){
            console.log('ID is missing');
            return res.status(400).json({err:'ID is missing'})
        }
        const oId=req.params.id;
        await Order.destroy({where:{id:oId}});
        res.sendStatus(200);
    } catch(error){
        console.log(err);
        res.status(500).json(err);
    }
}

