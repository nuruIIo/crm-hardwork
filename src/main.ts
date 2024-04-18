import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  await app.listen(process.env.PORT, () => {
    console.log('server listening on port 3000');
  });
}
bootstrap();
