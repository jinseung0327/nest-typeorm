import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  userID: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column({ default: 'default' })
  nickname: string;
}
