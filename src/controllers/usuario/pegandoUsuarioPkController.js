
const pegandoUsuarioPkController = async (req,res)=>{

    let usuario = require('../../models/usuario');
    const id = req.params.id;
    const usuarios = await usuario.findByPk(id);
    return res.status(200).json({usuarios: usuarios})
}

module.exports =  pegandoUsuarioPkController ;