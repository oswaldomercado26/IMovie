const responseWithData = (res, statusCode, data) => res.status(statusCode).json(data);
//mostrar errores de autorizocion o de carga 
const error = (res) => responseWithData(res, 500, {
  status: 500,
  message: "Oops! Error de carga!"
});

const badrequest = (res, message) => responseWithData(res, 400, {
  status: 400,
  message
});

const ok = (res, data) => responseWithData(res, 200, data);

const created = (res, data) => responseWithData(res, 201, data);

const unauthorize = (res) => responseWithData(res, 401, {
  status: 401,
  message: "No autorizado"
});

const notfound = (res) => responseWithData(res, 404, {
  status: 404,
  message: "Recurso no disponible"
});

export default {
  error,
  badrequest,
  ok,
  created,
  unauthorize,
  notfound
};