import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v2');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      // NOTE: esto transforma las variables de los DTO a numero o al objeto que se establesca
      // NOTE: no lo utilizo ya que consume recurso en memoria, es preferible utilizar
      // NOTE: @Type(() => Number) de class-transformer
      // transform: true,
      // transformOptions: {
      //   enableImplicitConversion: true,
      // },
    }),
  );
  // NOTE: esto agrega un prefijo a todo el api

  await app.listen(process.env.PORT);
  console.log(`App running on port:${process.env.PORT}`);
}
bootstrap();
