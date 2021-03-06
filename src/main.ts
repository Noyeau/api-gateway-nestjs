import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  const options = new DocumentBuilder()
    .setTitle('API GATEWAY')
    .setDescription('')
    .setVersion('2.0')
    .addApiKey({
      type: 'apiKey', // this should be apiKey
      name: 'Authorization', // this is the name of the key you expect in header
      in: 'header',
    }, 'JWT' // this is the name to show and used in swagger
    )
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Accept');
    next();
  });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
