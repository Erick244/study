// Entity
export class Profile {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
}

// Abstract Iterator
export interface ProfileIterator {
    getNext(): Profile;
    hasNext(): boolean;
}

// Concrete Iterator
export class FacebookIterator implements ProfileIterator {
    private facebook: Facebook;
    private profileId: number;
    private type: string;

    private currentPosition: number = 0;
    private cache: Profile[] = [];

    constructor(facebook: Facebook, profileId: number, type: string) {
        this.facebook = facebook;
        this.profileId = profileId;
        this.type = type;
    }

    lazyInit() {
        if (!this.cache) {
            // this.cache = this.facebook.socialGraphRequest(profileId, type);
        }
    }

    getNext(): Profile {
        try {
            if (this.hasNext()) {
                const result = this.cache[this.currentPosition];
                this.currentPosition++;

                return result;
            } else {
                throw new Error("No more profiles");
            }
        } catch (err: any) {
            throw new Error(err);
        }
    }

    hasNext(): boolean {
        this.lazyInit();

        return this.currentPosition < this.cache.length;
    }
}

// Abstract Collection
export interface SocialNetwork {
    createFriendsIterator(profileId: number): ProfileIterator;
    createCoworkersIterator(profileId: number): ProfileIterator;
}

// Concrete Collection
export class Facebook implements SocialNetwork {
    createFriendsIterator(profileId: number): ProfileIterator {
        return new FacebookIterator(this, profileId, "friends");
    }
    createCoworkersIterator(profileId: number): ProfileIterator {
        return new FacebookIterator(this, profileId, "coworkers");
    }

    // others...
}

// Iterator Client Manager
export class SocialSpammer {
    public send(iterator: ProfileIterator, message: string) {
        while (iterator.hasNext()) {
            const profile = iterator.getNext();
            console.log(
                `Spamming ${profile.getName()} with message: ${message}`
            );
            // send message to profile...
        }
    }
}

// Client Code
export class Application {
    network: SocialNetwork;
    spammer: SocialSpammer;

    config() {
        // if working with Facebook
        this.network = new Facebook();
        this.spammer = new SocialSpammer();
    }

    sendSpamToFriends(profile: Profile) {
        const iterator = this.network.createFriendsIterator(profile.getId());
        this.spammer.send(iterator, "Hey, check out my new profile!");
    }

    sendSpamToCoworker(profile: Profile) {
        const iterator = this.network.createCoworkersIterator(profile.getId());
        this.spammer.send(iterator, "Hey, check out my new profile!");
    }
}

const app = new Application();
app.config();

const profile = new Profile(1, "John Doe");
app.sendSpamToFriends(profile);
