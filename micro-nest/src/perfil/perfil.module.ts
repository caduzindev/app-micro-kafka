import { Module } from "@nestjs/common";
import { Perfil } from "./perfil.controller";

@Module({
    controllers: [Perfil],
})

export class PerfilModule { }