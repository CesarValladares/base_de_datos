const express = require('express');
const router = express.Router();

const Contact = require('../models/contacts');
const Envio = require('../models/envios');
const Conductor = require('../models/conductores');
const Sucursal = require('../models/sucursales');
const Empleado = require('../models/empleados');
const Factura = require('../models/facturas');
const Paquete = require('../models/paquetes'); 
const Transporte = require('../models/transportes');
const Usuario = require('../models/usuarios');

//retrieving envios
router.get('/envios', (req,res,next)=>{
    Envio.find(function(err, envios){
        res.json(envios);
    });
});

//add envio 
router.post('/envio', (req, res, next)=>{
    let newEnvio = new Envio({
        sucursal_ini: req.body.sucursal_ini,
        sucursal_fin: req.body.sucursal_fin,
        paquete: req.body.paquete,
        usuario: req.body.usuario,
        empleado: req.body.empleado,
        factura: req.body.factura,
        conductor: req.body.conductor, 
        transporte: req.body.transporte,
        fecha: req.body.fecha
    });

    newEnvio.save((err, envio)=>{
        if(err)
        {
            res.json({msg: 'Error al guardar Envio'});
        }
        else{
            res.json({msg: 'Envio generado exitosamente'});
        }
    })
});

//delete envio
router.delete('/envio/:id',(req, res, next)=>{
    Envio.remove({_id: req.params.id}, function(err,result){
        if (err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

//retrieving info 
router.get('/contacts', (req, res, next)=>{
    Contact.find(function(err, contacts){
        res.json(contacts);
    });
});

//add contact 
router.post('/contact', (req, res, next)=>{
    let newContact = new Contact({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone
    });

    newContact.save((err, contact)=>{
        if(err)
        {
            res.json({msg: 'Failed to add contact'});
        }
        else{
            res.json({msg: 'Contact added successfully'});
        }
    })
});

//delete contacts
router.delete('/contact/:id',(req, res, next)=>{
    Contact.remove({_id: req.params.id}, function(err,result){
        if (err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

//retrieving conductores
router.get('/conductores', (req,res,next)=>{
    Conductor.find(function(err, conductores){
        res.json(conductores);
    });
});

//add conductor
router.post('/conductor', (req, res, next)=>{
    let newConductor = new Conductor({
        nombre: req.body.nombre
    });

    newConductor.save((err, conductor)=>{
        if(err)
        {
            res.json({msg: 'Error al agregar conductor'});
        }
        else{
            res.json({msg: 'Conductor generado exitosamente'});
        }
    })
});

//delete conductor
router.delete('/conductor/:id',(req, res, next)=>{
    Conductor.remove({_id: req.params.id}, function(err,result){
        if (err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

//retrieving empleados
router.get('/empleados', (req,res,next)=>{
    Empleado.find(function(err, empleados){
        res.json(empleados);
    });
});

//add empleados
router.post('/empleado', (req, res, next)=>{
    let newEmpleado = new Empleado({
        nombre: req.body.nombre,
        tipo: req.body.tipo
    });

    newEmpleado.save((err, empleado)=>{
        if(err)
        {
            res.json({msg: 'Error al registrar empleado'});
        }
        else{
            res.json({msg: 'Empleado registrado exitosamente'});
        }
    })
});

//delete empleado
router.delete('/empleado/:id',(req, res, next)=>{
    Empleado.remove({_id: req.params.id}, function(err,result){
        if (err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

//retrieving facturas
router.get('/facturas', (req,res,next)=>{
    Factura.find(function(err, facturas){
        res.json(facturas);
    });
});

//add facturas
router.post('/factura', (req, res, next)=>{
    let newFactura = new Factura({
        precio: req.body.precio,
        direccion_dest: req.body.direccion_dest,
        nombre_usuario_destino: req.body.nombre_usuario_destino,
        fecha: req.body.fecha
    });

    newFactura.save((err, factura)=>{
        if(err)
        {
            res.json({msg: 'Error al generar factura'});
        }
        else{
            res.json({msg: 'Factura generada exitosamente'});
        }
    })
});

//delete factura
router.delete('/factura/:id',(req, res, next)=>{
    Factura.remove({_id: req.params.id}, function(err,result){
        if (err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

//retrieving transporte
router.get('/transportes', (req,res,next)=>{
    Transporte.find(function(err, transportes){
        res.json(transportes);
    });
});

//add transportes
router.post('/transporte', (req, res, next)=>{
    let newTransporte = new Transporte({
        tipo: req.body.tipo, 
        placa: req.body.placa, 
        disponibilidad: req.body.disponibilidad,
        ubicacion: req.body.ubicacion
    });

    newTransporte.save((err, transporte)=>{
        if(err)
        {
            res.json({msg: 'Error al registrar transporte'});
        }
        else{
            res.json({msg: 'Transporte registrado exitosamente'});
        }
    })
});

//delete transporte
router.delete('/transporte/:id',(req, res, next)=>{
    Transporte.remove({_id: req.params.id}, function(err,result){
        if (err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

//retrieving paquetes
router.get('/paquetes', (req,res,next)=>{
    Paquete.find(function(err, paquetes){
        res.json(paquetes);
    });
});

//add paquetes
router.post('/paquete', (req, res, next)=>{
    let newPaquete = new Paquete({
        peso: req.body.peso, 
        tamaño: req.body.tamaño
    });

    newPaquete.save((err, paquete)=>{
        if(err)
        {
            res.json({msg: 'Error al registrar paquete'});
        }
        else{
            res.json({msg: 'Paquete registrado exitosamente'});
        }
    })
});

//delete paquete
router.delete('/paquete/:id',(req, res, next)=>{
    Paquete.remove({_id: req.params.id}, function(err,result){
        if (err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});

//retrieving Usuarios
router.get('/usuarios', (req,res,next)=>{
    Usuario.find(function(err, usuarios){
        res.json(usuarios);
    });
});

//add usuarios
router.post('/usuario', (req, res, next)=>{
    let newUsuario = new Usuario({
        nombre: req.body.nombre,
        direccion: req.body.direccion
    });

    newUsuario.save((err, usuario)=>{
        if(err)
        {
            res.json({msg: 'Error al registrar usuario'});
        }
        else{
            res.json({msg: 'Usuario registrado exitosamente'});
        }
    })
});

//delete usuario
router.delete('/usuario/:id',(req, res, next)=>{
    Usuario.remove({_id: req.params.id}, function(err,result){
        if (err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    });
});


module.exports = router; 