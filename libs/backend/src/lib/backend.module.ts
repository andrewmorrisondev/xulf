import { Module } from '@nestjs/common';
import { HealthModule } from '../health/health.module'

@Module({
  controllers: [],
  providers: [],
  exports: [],
  imports: [HealthModule]
})
export class BackendModule {}
