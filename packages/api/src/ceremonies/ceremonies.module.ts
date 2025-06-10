import { Module } from "@nestjs/common"
import { CeremoniesController } from "./controller/ceremonies.controller"
import { CeremoniesService } from "./service/ceremonies.service"
import { SequelizeModule } from "@nestjs/sequelize"
import { CeremonyEntity } from "./entities/ceremony.entity"
//import { UsersService } from "src/users/service/users.service"
import { UsersService } from "../users/service/users.service"
//import { UserEntity } from "src/users/entities/user.entity"
import { UserEntity } from "../users/entities/user.entity"
import { ParticipantEntity } from "../participants/entities/participant.entity"
//import { CircuitsService } from "src/circuits/service/circuits.service"
import { CircuitsService } from "../circuits/service/circuits.service"
//import { CircuitEntity } from "src/circuits/entities/circuit.entity"
import { CircuitEntity } from "../circuits/entities/circuit.entity"
//import { ContributionEntity } from "src/circuits/entities/contribution.entity"
import { ContributionEntity } from "../circuits/entities/contribution.entity"
//import { ParticipantsService } from "src/participants/service/participants.service"
import { ParticipantsService } from "../participants/service/participants.service"

@Module({
    controllers: [CeremoniesController],
    providers: [CeremoniesService, CircuitsService, UsersService, ParticipantsService],
    imports: [
        SequelizeModule.forFeature([CeremonyEntity, CircuitEntity, ParticipantEntity, UserEntity, ContributionEntity])
    ],
    exports: [SequelizeModule]
})
export class CeremoniesModule {}
