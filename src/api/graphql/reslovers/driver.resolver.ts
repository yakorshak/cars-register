import { UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Resolver, Query } from '@nestjs/graphql';
import { IsAuthGuard } from 'src/domain/auth/guards/isAuth.guard';
import { IDriver } from 'src/domain/driver/interfaces/driver.interfaces';
import { DriverService } from '../../../domain/driver/driver.service';
import { DriverModel } from '../commons/driver.model';
import { CreateDriverInput } from '../dto/create-driver.input';

@Resolver(() => DriverModel)
export class DriverResolver {
  constructor(private driverService: DriverService) {}

  @Mutation(() => DriverModel)
  @UseGuards(IsAuthGuard)
  createDriver(
    @Args('createDriverInput') createDriverInput: CreateDriverInput,
  ): Promise<IDriver> {
    return this.driverService.createDriver(createDriverInput);
  }

  @Query(() => DriverModel, { name: 'driver' })
  findDriver(@Args('id', { type: () => Int }) id: number) {
    return this.driverService.findOne(id);
  }

  // @Query((returns) => [Driver])
  // test(@Args('carId', { type: () => Int }) carId: number): Promise<Driver[]> {
  //   return this.driverService.findDrivers(carId);
  // }
}
