---
title: "Build a Blog API with NestJS and MongoDB"
summary: "Create a RESTful API for a blog application using NestJS and MongoDB. Implement CRUD operations for blog posts and user authentication."
type: Blog
publishedAt: 2024-05-10
---

![thumbnail](/_static/blogs/post1/thumbnail.webp)

The goal of this article is to create a RESTful API for a blog application using NestJS and MongoDB that can:

- Perform CRUD operations on blog posts
- Implement user authentication
- Handle pagination and sorting for blog post listings

## Introduction

NestJS is a powerful framework for building efficient and scalable server-side applications. When combined with MongoDB, a popular NoSQL database, it provides a robust foundation for creating modern web applications.

In this tutorial, we'll build a blog API that allows users to create, read, update, and delete blog posts. We'll also implement user authentication to ensure that only authorized users can perform certain actions.

## Setup

### MongoDB Setup

First, make sure you have MongoDB installed and running on your system. If you haven't already, you can download and install it from the [official MongoDB website](https://www.mongodb.com/try/download/community).

### NestJS Application Setup

Let's start by creating a new NestJS application:

```bash
npx @nestjs/cli new nestjs-mongodb-blog
cd nestjs-mongodb-blog
```

Now, let's install the necessary dependencies:

```bash
npm install @nestjs/mongoose mongoose
npm install --save-dev @types/mongoose
```

## Implementing the Blog API

### Create the Blog Module

First, let's generate a new module for our blog:

```bash
npx nest g module blog
npx nest g controller blog
npx nest g service blog
```

### Define the Blog Schema

Create a new file `blog.schema.ts` in the `blog` folder:

```typescript
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type BlogDocument = Blog & Document;

@Schema()
export class Blog {
  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  content: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop()
  author: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
```

### Update the Blog Service

Now, let's implement the CRUD operations in our `blog.service.ts`:

```typescript
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Blog, BlogDocument } from "./blog.schema";
import { CreateBlogDto, UpdateBlogDto } from "./dto/blog.dto";

@Injectable()
export class BlogService {
  constructor(@InjectModel(Blog.name) private blogModel: Model<BlogDocument>) {}

  async create(createBlogDto: CreateBlogDto): Promise<Blog> {
    const createdBlog = new this.blogModel(createBlogDto);
    return createdBlog.save();
  }

  async findAll(page: number = 1, limit: number = 10): Promise<Blog[]> {
    return this.blogModel
      .find()
      .sort({ createdAt: -1 })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec();
  }

  async findOne(id: string): Promise<Blog> {
    return this.blogModel.findById(id).exec();
  }

  async update(id: string, updateBlogDto: UpdateBlogDto): Promise<Blog> {
    return this.blogModel
      .findByIdAndUpdate(id, updateBlogDto, { new: true })
      .exec();
  }

  async remove(id: string): Promise<Blog> {
    return this.blogModel.findByIdAndDelete(id).exec();
  }
}
```

### Implement the Blog Controller

Update the `blog.controller.ts` to expose our API endpoints:

```typescript
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Query,
} from "@nestjs/common";
import { BlogService } from "./blog.service";
import { CreateBlogDto, UpdateBlogDto } from "./dto/blog.dto";

@Controller("blog")
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  create(@Body() createBlogDto: CreateBlogDto) {
    return this.blogService.create(createBlogDto);
  }

  @Get()
  findAll(@Query("page") page: number, @Query("limit") limit: number) {
    return this.blogService.findAll(page, limit);
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.blogService.findOne(id);
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.update(id, updateBlogDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.blogService.remove(id);
  }
}
```

### Connect to MongoDB

Update your `app.module.ts` to connect to MongoDB:

```typescript
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { BlogModule } from "./blog/blog.module";

@Module({
  imports: [
    MongooseModule.forRoot("mongodb://localhost/nestjs-blog"),
    BlogModule,
  ],
})
export class AppModule {}
```

## Testing the API

You can now test your API using tools like Postman or curl. Here are some example requests:

- Create a new blog post:

  ```
  POST /blog
  {
    "title": "My First Blog Post",
    "content": "This is the content of my first blog post.",
    "author": "John Doe"
  }
  ```

- Get all blog posts:

  ```
  GET /blog?page=1&limit=10
  ```

- Get a specific blog post:

  ```
  GET /blog/:id
  ```

- Update a blog post:

  ```
  PUT /blog/:id
  {
    "title": "Updated Blog Post Title"
  }
  ```

- Delete a blog post:
  ```
  DELETE /blog/:id
  ```

## Conclusion

In this tutorial, we've built a basic blog API using NestJS and MongoDB. We've implemented CRUD operations for blog posts and added pagination for the list endpoint.

To further enhance this API, you could:

1. Add user authentication and authorization
2. Implement comment functionality for blog posts
3. Add search capabilities
4. Implement file uploads for blog post images

Happy coding!
