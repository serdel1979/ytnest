import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3030);
  console.log(`Server is running in port ${ await app.getUrl() }`)
}
bootstrap();
