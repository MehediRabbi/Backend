import { Module } from '@nestjs/common';
import { customerModule } from './customer/customer.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductModule } from './product/product.module';

@Module({
  imports: [customerModule,ProductModule ,TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '22630266',
    database: 'tri_gardening', // Change to your database name
    autoLoadEntities: true,
    synchronize: true,
  }) ],
  controllers: [],
  providers: [],
})
export class AppModule {}
