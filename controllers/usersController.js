const { response, request } = require('express');

const usuariosGet = (req = request, res) => {
    const { q, nombre = 'No name', apikey } = req.query;
    res.json(
        {
            msg: 'get Api - Controller',
            q,
            nombre,
            apikey
        }
    );
}

const usuariosPost = (req, res) => {
    const { nombre, edad } = req.body;
    res.json(
        {
            msg: 'POST Api / Controller',
            nombre,
            edad
        }
    );
}

const usuariosPut = (req, res) => {
    const { id } = req.params;

    res.json(
        {
            msg: 'PUT Api / Controller',
            id
        }
    );
}

const usuariosDelete = (req, res) => {
    res.json(
        {
            msg: 'DELETE Api / Controller',
        }
    );
}

const usuariosPatch = (req, res) => {
    res.json(
        {
            msg: 'PARCH Api / Controller',
        }
    );
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
    usuariosPatch
}