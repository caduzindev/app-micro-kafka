import { Controller } from "@nestjs/common";
import { EventPattern } from '@nestjs/microservices'
@Controller('perfil')
export class Perfil {
    @EventPattern('user_created')
    async saveImage(data: Record<string, unknown>) {
        console.log(data, 'Primeiro evento')
    }

    @EventPattern('user_created')
    async saveImage2(data: Record<string, unknown>) {
        console.log(data, 'Segundo evento')
    }
}