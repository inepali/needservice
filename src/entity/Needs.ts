import {Column, Entity, PrimaryGeneratedColumn} from "typeorm";

@Entity()
export class Needs {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    isactive: boolean;
}
