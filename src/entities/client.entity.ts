import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, BeforeInsert, BeforeUpdate, OneToMany } from "typeorm"
import { getRounds, hashSync } from "bcryptjs"
import { Contact } from "./contacts.entity"

@Entity("client")
class Client {

    @PrimaryGeneratedColumn("increment")
    id: number

    @Column( { length: 127 } )
    name: string

    @Column( { length: 127, unique: true } )
    email: string

    @Column( { length: 127 } )
    password: string

    @Column( { length: 13, unique: true } )
    telephone: string

    @CreateDateColumn({type: "date"})
    createdAt: string

    @OneToMany(() => Contact, (contacts) => contacts.client)
    contacts: Contact[]

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword(){
        const isEncrypted = getRounds(this.password)
        if(!isEncrypted){
            this.password = hashSync(this.password, 10)
        }
    }   

}

export {
    Client
}