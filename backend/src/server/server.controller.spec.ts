import { Test, TestingModule } from '@nestjs/testing';
import { ServerController } from './server.controller';

describe('ServerController', () => {
  let controller: ServerController;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ServerController],
    }).compile();
    controller = module.get<ServerController>(ServerController);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
  describe('checkService', () => {
    it('should return health check data', () => {
      const result = controller.checkService();
      expect(result).toHaveProperty('message', 'Backend activo');
      expect(result).toHaveProperty('framework', 'NestJS');
      expect(result).toHaveProperty('runtime', 'Node.js');
      expect(result).toHaveProperty('timestamp');
    });
  });
});
