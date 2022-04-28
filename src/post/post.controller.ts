import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AnyFilesInterceptor } from '@nestjs/platform-express';
import { PostService } from './post.service';

@Controller('post')
export class PostController {

    constructor(readonly postService: PostService){}

    @Get()
    getMany(): string {
        return this.postService.getPost();
    }

    @Get(':id')
    getOne(@Param()id: string){
        console.log(id);
    }

    @Post()
    createOne(@Body() dto: any){
       
    }

    @Put(':id')
    editOne(@Param()id: string){

    }

    @Delete(':id')
    deleteOne(@Param()id: string){

    }


}
