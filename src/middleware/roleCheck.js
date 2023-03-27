const statusMessages = require("../../assets/StatusMessages.json");
const { User } = require("../database/models/user.model");

const roleCheck = () => {
    return async (req, res, next) => {
        try {
            const role = req.body.roles;
            const userId = req.user.id;
            const user = await User.findByPk(userId);

            if (!role || !user) {
                throw new Error('Utilisateur non trouvé');
            }

            if (user.roles !== role) {
                res.status(401).send(statusMessages[401])
            }

            next();
        } catch (error) {
            res.status(401).send(statusMessages[401])
        }
    };
};

module.exports = roleCheck;
