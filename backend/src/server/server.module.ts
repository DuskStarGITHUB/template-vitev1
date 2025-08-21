import { Module } from '@nestjs/common';
import { ServerController } from './server.controller';

@Module({
  controllers: [ServerController],
  providers: [], // ← Vacío ya que eliminamos el servicio
})
export class ServerModule {}
