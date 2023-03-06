import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './User';

@Entity({ name: 'user_posts' })
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Index()
  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  desc: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
