/**
 * =====================================================
 *  NAME    : main.ts
 *  DESCRIPTION: create server
 * =====================================================
 */

// DEPENDENCIES
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// EXEC
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}

void bootstrap();
