module.exports={
    index: (req,res)=>{
        res.render('index', { title: `${process.env.TITLE}` });
    }
}
