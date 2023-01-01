const { isValidObjectId } = require("mongoose");
const PasswordResetToken = require("../models/passwordResetToken");
const { sendError } = require("../utils/helper");
exports.isValidPassResetToken = async (req, res, next) => {
    const { token, userId } = req.body;
    //crear un nuevo usuario con las debidas restricciones

    if (!token.trim() || !isValidObjectId(userId))
        return sendError(res, "Respuesta invalida!");

    const resetToken = await PasswordResetToken.findOne({ owner: userId });
    if (!resetToken)
        return sendError(res, "Acceso no autorizado,favor verificar datos!");

    const matched = await resetToken.compareToken(token);
    if (!matched) return sendError(res, "Acceso no autorizado,favor verificar datos!");

    req.resetToken = resetToken;
    next();
};