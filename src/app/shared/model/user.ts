import {RoleType} from './roleType';

export class User {
    constructor(public id: number,
                public username: string,
                public password: string,
                public role: RoleType,
                public token: string
    ) {
    }
}
