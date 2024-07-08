import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);


    // Set up global validation pipe
    app.useGlobalPipes(new ValidationPipe({
      transform: true, // Enables automatic transformation of plain objects to class instances
      whitelist: true, // Removes properties that do not have any decorators
      forbidNonWhitelisted: true, // Throws an error if non-whitelisted properties are found
    }));


    const config = new DocumentBuilder()
    .setTitle('Horus Eye')
    .setDescription('API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
