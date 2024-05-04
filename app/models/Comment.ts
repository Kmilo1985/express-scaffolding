import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn } from 'typeorm'
import { User } from './User'

@Entity('comments')
export class Comment {
  @PrimaryGeneratedColumn()
  declare id: number

  @Column({name: 'description'})
  declare description: string

  @ManyToOne(() => User, (user) => user.comments)
  @JoinColumn({ name: "user_id" })
  declare user: User
}
