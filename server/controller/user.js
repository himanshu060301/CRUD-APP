import { response } from "express";
import user from "../schema/user-schema.js";
import User from "../schema/user-schema.js";

export const addUser=async(request,respond)=>{
    const  user=request.body;
    const newUser=new User(user);
    
    try {
        await newUser.save();
        respond.status(201).json(newUser);
    } catch (error) {
        respond.status(409).json({message:error.message});
    }
}

export const getUsers=async(request,respond)=>{
    try {
        const users=await User.find({});
        respond.status(200).json(users);
    } catch (error) {
        respond.status(404).json({message:error.message});
    }
}

export const getUser=async(request,respond)=>{
    try {
        //const user=await User.find({_id: request.params.id});
        const user=await User.findById(request.params.id);
        respond.status(200).json(user);
    } catch (error) {
        respond.status(404).json({message:error.message});
    }
}

export const editUser=async(request,respond)=>{
    const  user=request.body;
    const editUser=new User(user);
    
    try {
        await User.updateOne({_id:request.params.id},editUser);
        respond.status(201).json(editUser);
    } catch (error) {
        respond.status(409).json({message:error.message});
    }
}

export const deleteUser=async(request,respond)=>{
    try {
        await User.deleteOne({_id:request.params.id});
        respond.status(200).json(users);
    } catch (error) {
        respond.status(404).json({message:error.message});
    }
}
