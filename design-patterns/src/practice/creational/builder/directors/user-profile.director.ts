import { UserProfileBuilder } from "../builders/user-profile.builder";

export class UserProfileDirector {
    private builder: UserProfileBuilder;

    constructor(builder: UserProfileBuilder) {
        this.builder = builder;
    }

    buildDefaultUserProfile(email: string, age: number): void {
        this.builder.reset();
        this.builder.setEmail(email);
        this.builder.setAge(age);
    }
}
