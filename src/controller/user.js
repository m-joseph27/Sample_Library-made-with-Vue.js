const userModels = require('../models/user');
const MiscHelper = require('../helpers/helpers');
const { genSaltSync, compareSync, hashSync} = require('bcrypt');
// const jwt = require('jsonwebtoken')
// const cloudinary = require('cloudinary')
module.exports = {
    getUser: (req, res) => {
        const search = req.query.search
        console.log(search)
        userModels.getUser(search)
            .then((resultUser) => {
                const result = resultUser
                console.log(result)
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    userDetail: (req, res) => {
        const id_user = req.params.id_user
        userModels.userDetail(id_user)
            .then((resultUser) => {
                const result = resultUser
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    register: (req, res) => {
        const {email, fullname, password} = req.body
        const data = {
            email,
            fullname,
            password,
            photo: 'https://i.pinimg.com/originals/3f/cd/de/3fcdde7d88b8f8dd8b5edf5cfc742325.jpg',
            status: 1
        }
        const salt = genSaltSync(10)
        data.password = hashSync(data.password, salt)
        userModels.register(data)
            .then((result) => {
                MiscHelper.response(res, result, 200)
            })
            .catch(err => {
                MiscHelper.response(res, {}, 201, err)
            })
    },
    login: (req, res) => {
        const {email, password} = req.body
        const data = {
            email,
            password
        }
        console.log(data.email)
        userModels.login(data.email)
            .then((result) => {
                const checkPass = compareSync(data.password, result[0].password)
                console.log(checkPass)
                if (checkPass) {
                    MiscHelper.response(res, result, 200, 'Login Successfully!');
                } else {
                    MiscHelper.response(res, null, 400, 'Invalid Password!');
                }
            })
            .catch(err => {
                MiscHelper.response(res, null, 400, 'Invalid Email');
            })
    },
    insertUser: (req, res) => {
        const { card_number, email, fullname, password, phone, job, address, photo, status } = req.body
        const data = {
            card_number,
            email,
            fullname,
            password,
            phone,
            job,
            address,
            photo,
            status,
            created_at: new Date(),
            updated_at: new Date()
        }
        userModels.insertUser(data)
            .then((resultUser) => {
                const result = resultUser
                MiscHelper.response(res, result, 200, data)
            })
            .catch((error) => {
                console.log(error)
            })
    },
    deleteUser: (req, res) => {
        const id_user = req.params.id_user
        userModels.deleteUser(id_user)
            .then((resultUser) => {
                const result = resultUser
                MiscHelper.response(res, result, 200)
            })
            .catch((error) => {
                console.log(error)
            })
    }
}