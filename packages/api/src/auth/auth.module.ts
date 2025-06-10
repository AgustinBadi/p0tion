import { Module } from "@nestjs/common"
import { AuthController } from "./controller/auth.controller"
import { AuthService } from "./service/auth.service"
import { SequelizeModule } from "@nestjs/sequelize"
//import { UserEntity } from "src/users/entities/user.entity"
import { UserEntity } from "../users/entities/user.entity"
//import { UsersService } from "src/users/service/users.service"
import { UsersService } from "../users/service/users.service"
//import { CeremoniesService } from "src/ceremonies/service/ceremonies.service"
import { CeremoniesService } from "../ceremonies/service/ceremonies.service"
//import { CeremonyEntity } from "src/ceremonies/entities/ceremony.entity"
import { CeremonyEntity } from "../ceremonies/entities/ceremony.entity"
//import { ParticipantEntity } from "src/participants/entities/participant.entity"
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
    imports: [
        SequelizeModule.forFeature([UserEntity, CeremonyEntity, ParticipantEntity, CircuitEntity, ContributionEntity])
    ],
    exports: [SequelizeModule],
    controllers: [AuthController],
    providers: [AuthService, UsersService, CeremoniesService, CircuitsService, ParticipantsService]
})
export class AuthModule {}
