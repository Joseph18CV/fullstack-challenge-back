import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from "typeorm"
import { Client } from "./client.entity"

@Entity("contact")
class Contact {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column( { length: 127 } )
    name: string

    @Column( { length: 127, unique: true } )
    email: string

    @Column( { length: 13, unique: true } )
    telephone: string

    @CreateDateColumn({type: "date"})
    createdAt: string

    @ManyToOne(() => Client, (client) => client.contacts)
    client: Contact

}

export {
    Contact
}