import { PrimaryGeneratedColumn, Column, Entity, OneToMany, JoinColumn } from 'typeorm'
import { Comment } from './Comment'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  declare id: number

  @Column()
  declare name: string

  @Column()
  declare last_name: string

  @Column('boolean')
  declare is_active: boolean

  @OneToMany(() => Comment, (comment) => comment.user, {
    eager: true
  })
  declare comments: Comment[]
}
