const {
    createUser,
    findUser,
    findAndUpdateUser,
    deleteUser,
    findUsers,
} = require("../service/user.service");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, '/src/uploads');
    },
    filename: function (req, file, callback) {
        callback(null, file.fieldname);
    }
});

const upload = multer({
    storage, limits: {
        fileSize: 1000000 // 1000000 Bytes = 1 MB
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) {
            // upload only png and jpg format
            return cb(new Error('Please upload a Image'))
        }
        cb(undefined, true)
    }
})

async function createUserHandler(req, res) {
    const body = req.body;
    let image;

    if (req.file) {
        upload.single('userImage');
        const host = req.host;
        const filePath = req.protocol + "://" + host + '/' + req.file.path;

        image = req.file;
        body = {
            ...body,
            image,
            userImagePath: filePath
        }
        
    }

    const user = await createUser({ ...body });

    return res.send(user);
}

async function updateUsersHandler(req, res) {
    const email = req.params.email
    const update = req.body;

    const user = await findUser({ email });

    if (!user) {
        return res.sendStatus(404);
    }

    const updatedUser = await findAndUpdateUser({ email }, update, {
        new: true,
    });

    return res.send(updatedUser);
}

async function getUserHandler(req, res) {
    const email = req.params.email;
    const user = await findUser({ email });

    if (!user) {
        return res.sendStatus(404);
    }

    return res.send(user);
}

async function getUserWithUsernameHandler(req, res) {
    const username = req.params.username;
    const user = await findUser({ username });

    if (!user) {
        return res.sendStatus(404);
    }

    return res.send(user);
}

async function getUsersHandler(req, res) {
    const users = await findUsers().sort({ updatedAt: -1 });

    return res.send(users);
}

async function deleteUserHandler(req, res) {
    const email = req.params.email;

    const user = await findUser({ email });

    if (!user) {
        return res.sendStatus(404);
    }

    await deleteUser({ email });

    return res.sendStatus(200);
}

module.exports = {
    createUserHandler,
    updateUsersHandler,
    findAndUpdateUser,
    getUsersHandler,
    deleteUserHandler,
    getUserHandler,
    getUserWithUsernameHandler
}