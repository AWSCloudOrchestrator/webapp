import catchAsync from '../utils/catchAsync.js';
import ProductService from '../services/product.service.js';
import responseHandler from '../utils/responseHandler.js';

export const create = catchAsync(async (req, res) => {
  const { body, user: { id } } = req;
  const product = await ProductService.createProduct(body, id);
  responseHandler(res, product, 201);
});

export const get = catchAsync(async (req, res) => {
  const { params: { productId } } = req;
  const product = await ProductService.getProduct(productId);
  responseHandler(res, product);
});

export const update = catchAsync(async (req, res) => {
  const { params: { productId }, body, user } = req;
  await ProductService.updateProduct(productId, body, user);
  responseHandler(res, null, 204);
});

export const deleteProduct = catchAsync(async (req, res) => {
  const { params: { productId }, user } = req;
  await ProductService.deleteProduct(productId, user);
  responseHandler(res, null, 204);
});

export const patch = catchAsync(async (req, res) => {
  const { params: { productId }, body, user } = req;
  const product = await ProductService.patchProduct(productId, body, user);
  responseHandler(res, product);
});
