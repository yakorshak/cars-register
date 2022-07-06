import { Module } from '@nestjs/common';
import { CarService } from './car.service';
import { CarResolver } from '../../api/graphql/reslovers/car.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarEntity } from 'src/domain/car/entities/car.entity';
import { DriverModule } from 'src/domain/driver/driver.module';

@Module({
  imports: [TypeOrmModule.forFeature([CarEntity]), DriverModule],
  providers: [CarService, CarResolver],
})
export class CarModule {}