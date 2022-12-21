import {Task} from "../models/Task.js";


export const getTasks = async (req,res)=>{
    try{
        const tasks = await Task.findAll();
        res.json(tasks);
    }catch(error){
        res.status(500).json({error:error.message})
    }
};


export const createTask = async (req,res)=>{
    try{
        const {name, done, projectId} = req.body;
        const newTask = await Task.create({
            name,
            done,
            projectId
        });
        res.json(newTask);

    }catch(error){
        res.status(500).json({error:error.message});
    }
};

export const getTask = async (req,res)=>{
  try{
     const {id} = req.params;
     const task = await Task.findOne({
        where: {
            id : id
        }
     });

    res.json(task);
  }catch(error){
    res.status(500).json({error:error.message});
  }
};

export const updateTask = async (req,res)=>{
  try{
    const {id} = req.params;
    const task = await Task.findOne({
      where: {
        id:id
      }
    });
    task.set(req.body);
    await task.save();
    res.json(task);
  }catch(error){
     res.status(500).json({error:error.message});
  }
  
};


export const deleteTask = async (req,res)=>{
  try{
    const {id} = req.params;
    const task = await Task.destroy({
         where:{
            id : id
         }
    });
    res.sendStatus(204);
  }catch(error){
    res.status(500).json({error:error.message});
  }
   
};