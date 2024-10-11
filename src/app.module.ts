import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/entities/product.entity';

@Module({
  imports: [ConfigModule.forRoot(
    { isGlobal: true, }
  ),
  TypeOrmModule.forRoot({
    type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities : true,
      synchronize: true,
  }),
  ProductsModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
