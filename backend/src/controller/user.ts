import { Request, Response, NextFunction } from "express";
import { successHandler } from "../utils/responseHandler";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { name, email } = req.body;
    const user = await prisma.user.create({
      data: { name, email },
    });
    successHandler(res, user, "User created successfully", 201);
  } catch (error) {
    next(error);
  }
};

const getUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const users = await prisma.user.findMany();
    successHandler(res, users, "Users retrieved successfully", 200);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const user = await prisma.user.findUnique({
      where: { id: parseInt(id) },
    });
    if (user) {
      successHandler(res, user, "User retrieved successfully", 200);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    next(error);
  }
};

const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;
    const user = await prisma.user.update({
      where: { id: parseInt(id) },
      data: { name, email },
    });
    successHandler(res, user, "User updated successfully", 200);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    await prisma.user.delete({
      where: { id: parseInt(id) },
    });
    successHandler(res, {}, "User deleted successfully", 204);
  } catch (error) {
    next(error);
  }
};

export default { createUser, getUsers, getUserById, updateUser, deleteUser };
