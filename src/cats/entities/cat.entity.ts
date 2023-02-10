import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'Cat' })
export class Cat {
  @PrimaryGeneratedColumn({ name: 'id' })
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'age', type: 'int' })
  age: number;

  @Column({ name: 'species' })
  species: string;
}
