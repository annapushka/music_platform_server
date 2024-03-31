import { Module } from '@nestjs/common';
import { TrackModule } from './track/track.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    // imports: [TrackModule, MongooseModule.forRoot(process.env.DB_URL)],
    imports: [
        TrackModule,
        MongooseModule.forRoot(
            'mongodb+srv://user:123@cluster0.4comu.mongodb.net/my',
        ),
    ],
})
export class AppModule {}
