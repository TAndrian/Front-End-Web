import {RoleType} from './roleType';

export class User {
    constructor(public username: string,
                public password: string,
                public role: RoleType,
    ) {
    }
}
