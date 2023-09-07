const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

// route 1 = get all the notes . GET request. Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
  const notes = await Note.find({ user: req.user.id })
  res.json(notes);
});

// route 2 = add a new note . POST request. Login required
router.post('/addnote', fetchuser, [
  body('title', 'Enter a valid title').isLength({ min: 3 }),
  body('description', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {

  try {
    const { title, description, tag } = req.body;
  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const note = new Note({
      title, description, tag, user: req.user.id
    })
    const savedNote=await note.save();
    res.json(savedNote)
    
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured")

  }
});
// route 3 = update an exisitng  note . PUT request. Login required

router.put('/updatenote/:id', fetchuser, async (req, res) => {

  try {
    const { title, description, tag } = req.body;
    //create a new note object
    const newNote={}
    if(title){newNote.title=title};
    if(description){newNote.description=description};
    if(tag){newNote.tag=tag};
    
    //find the note to be updated and update it
    let note=await Note.findById(req.params.id);
    if(!note){
      return res.status(404).send("not found");
    }
    if(note.user.toString()!==req.user.id){
return res.status(401).send("not allowed")
    }
   note=await Note.findByIdAndUpdate(req.params.id,{$set:newNote},{new:true})
   res.json(note);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured")

  }
});

// route 4 = delete an exisitng  note . DELETE request. Login required

router.delete('/deletenote/:id', fetchuser, async (req, res) => {

  try {
    //find the note to be deleted and delete it
    let note=await Note.findById(req.params.id);
    if(!note){
      return res.status(404).send("not found");
    }
    //allow deletion only if user owns this note
    if(note.user.toString()!==req.user.id){
return res.status(401).send("not allowed")
    }
    note=await Note.findByIdAndDelete(req.params.id);
   res.json({"Success":" Note has been deleted",note:note});
  } catch (error) {
    console.error(error.message);
    res.status(500).send("some error occured")

  }
});





module.exports = router;
