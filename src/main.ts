import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from 'mongoose';

async function connectToDB() {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log(`connected to db on port ${connection.port}`);
  } catch (error) {
    console.log(error);
  }
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
connectToDB();
bootstrap();
