/**
 * =====================================================
 *  NAME    : app.module.ts
 *  DESCRIPTION: module server
 * =====================================================
 */

// DEPENDENCIES
import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './controllers/main.controller';
import { AppService } from './services/main.service';
import { MethodMiddleware } from './middlewares/main.middleware';

// MODULE
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MethodMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
