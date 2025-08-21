/**
 * =====================================================
 *  NAME    : app.module.ts
 *  DESCRIPTION: server join modules
 * =====================================================
 */

// DEPENDENCIES
import { Module } from '@nestjs/common';
import { ServerModule } from './server/server.module';

// MODULES
@Module({
  imports: [ServerModule],
})
  
export class AppModule {}
