const router = require('express').Router();

const{
    getAllThoughts,
    getThoughtById,
    createThought,
    addReaction,
    updateThought,
    removeThought,
    removeReaction
} = require('../../controllers/thought-controller');


router
.route('/')
.get(getAllThoughts)
.post(createThought)

router
.route('/:id')
.get(getThoughtById)
.put(updateThought)
.delete(removeThought)

router
.route('/:id/reactions/:reactionId')
.put(addReaction)
.delete(removeReaction)



module.exports = router;
