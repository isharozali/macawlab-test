import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import UserController from '../controller/user';

jest.mock('@prisma/client');

describe('UserController', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: jest.Mock;

  beforeEach(() => {
    mockRequest = {};
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    mockNext = jest.fn();
  });

  describe('createUser', () => {
    it('should create a new user and return 201 status', async () => {
      const mockUser = { id: 1, name: 'John Doe', email: 'john@example.com' };
      (PrismaClient as jest.Mock).mockImplementation(() => ({
        user: {
          create: jest.fn().mockResolvedValue(mockUser),
        },
      }));

      mockRequest.body = { name: 'John Doe', email: 'john@example.com' };

      await UserController.createUser(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockResponse.status).toHaveBeenCalledWith(201);
      expect(mockResponse.json).toHaveBeenCalledWith(expect.objectContaining(mockUser));
    });

    it('should call next with error if creation fails', async () => {
      const mockError = new Error('Creation failed');
      (PrismaClient as jest.Mock).mockImplementation(() => ({
        user: {
          create: jest.fn().mockRejectedValue(mockError),
        },
      }));

      mockRequest.body = { name: 'John Doe', email: 'john@example.com' };

      await UserController.createUser(mockRequest as Request, mockResponse as Response, mockNext);

      expect(mockNext).toHaveBeenCalledWith(mockError);
    });
  });
});

