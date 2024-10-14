import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getComments = async (req: Request, res: Response) => {
  try {
    const comments = await prisma.$queryRaw`
  WITH RECURSIVE comment_tree AS (
    SELECT c.id, c.content, c."userId", u.name, c."parentId", 0 AS depth
    FROM "Comment" c
    JOIN "User" u ON c."userId" = u.id
    WHERE c."parentId" IS NULL
    UNION ALL
    SELECT c.id, c.content, c."userId", u.name, c."parentId", ct.depth + 1
    FROM "Comment" c
    JOIN "User" u ON c."userId" = u.id
    INNER JOIN comment_tree ct ON c."parentId" = ct.id
  )
  SELECT * FROM comment_tree ORDER BY depth, id;
`;
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error || "Error fetching comments" });
  }
};

export const createComment = async (req: Request, res: Response) => {
  const { content, userId, parentId } = req.body;
  try {
    const comment = await prisma.comment.create({
      data: { content, userId, parentId },
    });
    res.status(201).json(comment);
  } catch (error) {
    res.status(500).json({ error: "Error creating comment" });
  }
};

export const updateComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { content } = req.body;
  try {
    const comment = await prisma.comment.update({
      where: { id: parseInt(id) },
      data: { content },
    });
    res.json(comment);
  } catch (error) {
    res.status(500).json({ error: "Error updating comment" });
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    await prisma.comment.delete({
      where: { id: parseInt(id) },
    });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: "Error deleting comment" });
  }
};
