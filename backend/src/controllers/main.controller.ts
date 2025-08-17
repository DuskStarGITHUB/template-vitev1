/**
 * =====================================================
 *  NAME    : main.controller.ts
 *  DESCRIPTION: controllers for modules
 * =====================================================
 */

// DEPENDENCIES
import { Controller, Get } from '@nestjs/common';
import { AppService } from '../services/main.service';

// CONTROLLER
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  getStatus() {
    return this.appService.getStatus();
  }
}
