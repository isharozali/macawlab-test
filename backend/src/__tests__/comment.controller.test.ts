import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import * as CommentController from '../controller/comment';

jest.mock('@prisma/client');

describe('CommentController', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
      send: jest.fn(),
    };
  });

  describe('getComments', () => {
    it('should return comments and 200 status', async () => {
      const mockComments = [
        { id: 1, content: 'Test comment', userId: 1, name: 'John Doe', parentId: null, depth: 0 },
      ];
      (PrismaClient as jest.Mock).mockImplementation(() => ({
        $queryRaw: jest.fn().mockResolvedValue(mockComments),
      }));

      await CommentController.getComments(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.json).toHaveBeenCalledWith(mockComments);
    });

    it('should return 500 status if fetching comments fails', async () => {
      const mockError = new Error('Fetching failed');
      (PrismaClient as jest.Mock).mockImplementation(() => ({
        $queryRaw: jest.fn().mockRejectedValue(mockError),
      }));

      await CommentController.getComments(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(500);
      expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Error fetching comments' });
    });
  });

  describe('createComment', () => {
    it('should create a new comment and return 201 status', async () => {
      const mockComment = { id: 1, content: 'New comment', userId: 1, parentId: null };
      (PrismaClient as jest.Mock).mockImplementation(() => ({
        comment: {
          create: jest.fn().mockResolvedValue(mockComment),
        },
      }));

      mockRequest.body = { content: 'New comment', userId: 1, parentId: null };

      await CommentController.createComment(mockRequest as Request, mockResponse as Response);

      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(mockComment);
    });

    // Add more tests for updateComment and deleteComment
  });
});

