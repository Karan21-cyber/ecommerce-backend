import { LoggerMiddleware } from './middleware.middleware';

describe('MiddlewareMiddleware', () => {
  it('should be defined', () => {
    expect(new LoggerMiddleware()).toBeDefined();
  });
});
