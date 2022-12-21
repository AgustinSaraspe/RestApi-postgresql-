import {Project} from "../models/Project.js";
import { Task } from "../models/Task.js";

export const getProjects = async (req,res)=>{
    try{
        const projects = await Project.findAll();
        res.json(projects);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

export const getProject = async (req,res)=>{
    try{
       const {id} = req.params;
       const project = await Project.findOne({
            where: {
              id:id
            }
        });
        if(!project) return res.status(404).json({message: "Project does not exist"});
        res.json(project);
    }catch(error){
        res.status(500).json({error:error.message});
    }
}


export const createProject = async (req,res)=>{
    try{
      const {name, priority, description} = req.body 
      const newProject = await Project.create({
        name,
        description,
        priority
       });
       res.json(newProject);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};

export const updateProject = async (req,res)=>{
    try{
        const {id} = req.params;
        const {name, priority, description} = req.body;
    
       const project = await Project.findByPk(id);
       project.name = name;
       project.priority = priority;
       project.description = description;
    
       await project.save();
       res.json(project)

    }catch(error){
       res.status(500).json({error: error.message});
    }
}

export const deleteProject = async (req,res)=>{ 
    try{
        const {id} = req.params;
        await Project.destroy({
            where: {
                id: id
            }
        });

        res.sendStatus(204);

    }catch(error){
        res.status(500).json({error: error.message});
    }

};

export const getProjectTaks = async (req,res)=>{
    try{
        const {id} = req.params;
        const tasks = await Task.findAll({
          where:{
             projectId : id
          }
        })
        res.json(tasks);
    }catch(error){
        res.status(500).json({error: error.message});
    }
};