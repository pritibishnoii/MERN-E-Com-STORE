import asyncHandler from "../middlewares/asyncHandler.js";

export const createOrder = asyncHandler(async (req, res) => {
  console.log(req.body);
});
