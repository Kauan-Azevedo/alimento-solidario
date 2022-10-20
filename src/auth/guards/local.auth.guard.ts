import { Injectable } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    // https://www.youtube.com/watch?v=3z6Cs_PtYc0&t=2536s&ab_channel=PauloSalvatore
}
