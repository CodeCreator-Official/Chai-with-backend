// const asyncHandler = (func) => {() => {}}

// USING ASYNC

// const asyncHandler = (func) =>
//     async (req, res, next) => {
//         try {
//             await(func(req, res, next))
//         } catch (error) {
//             res.status(error.code || 500).json(
//                 {
//                     success: false,
//                     message: error.message
//                 }
//             )
//         }
//     }

// USING PROMISES

const asyncHandler = (func) => {
    (req, res, next) => {
        Promise.resolve(func(req, res, next))
        .catch(error => next(error))
    }
}