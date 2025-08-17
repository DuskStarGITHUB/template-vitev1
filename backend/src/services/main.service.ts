/**
 * =====================================================
 *  NAME    : main.service.ts
 *  DESCRIPTION: services for logic for modules
 * =====================================================
 */

// DEPENDENCIES
import { Injectable } from '@nestjs/common';

// SERVICE
@Injectable()
export class AppService {
  getStatus() {
    return {
      message: 'Backend activo',
      framework: 'NestJS',
      runtime: 'Node.js',
      packageManager: 'npm',
      language: 'TypeScript',
    };
  }
}
