
const asyncHandler = (requesthandler)=>{
(req, res , next)=>{
    promise.resolve(

        requesthandler(req, res, next)
    ).catch((err)=> next(err))
}



}

export {asyncHandler}


// const asyncHandler = (fnc )=> async (req, res ,next)=>{
//     try {
//         await fnc(req, res , next)
//     } catch (error) {

//         res.status(err.code || 500).json({
//             success: false,
//             message:err.message
//         })
        
//     }
// }