// Abstract Event
export interface AccountEvent {
    type: string;
    data: any;
    timestamp: Date;
    mutateBalance?: (balance: number) => number;
}

// Concrete Events
export class AccountCreatedEvent implements AccountEvent {
    type = "AccountCreated";
    timestamp = new Date();

    constructor(public data: { accountId: string; owner: string }) {}
}

export class MoneyDepositedEvent implements AccountEvent {
    type = "MoneyDeposited";
    timestamp = new Date();

    constructor(public data: { accountId: string; amount: number }) {}

    mutateBalance(balance: number): number {
        return balance + this.data.amount;
    }
}

export class MoneyWithdrawEvent implements AccountEvent {
    type = "MoneyWithdraw";
    timestamp = new Date();

    constructor(public data: { accountId: string; amount: number }) {}

    mutateBalance(balance: number): number {
        return balance - this.data.amount;
    }
}

// Aggregate
export class Account {
    private balance: number = 0;
    private events: AccountEvent[] = [];

    constructor(private accountId: string, owner: string) {}

    static create(accountId: string, owner: string) {
        const account = new Account(accountId, owner);
        account.apply(new AccountCreatedEvent({ accountId, owner }));

        return account;
    }

    private apply(event: AccountEvent): void {
        this.events.push(event);
        this.mutate(event);
    }

    private mutate(event: AccountEvent): void {
        if (event.mutateBalance) {
            this.balance = event.mutateBalance(this.balance);
        }
    }

    deposit(amount: number): void {
        this.apply(
            new MoneyDepositedEvent({ accountId: this.accountId, amount })
        );
    }

    withdraw(amount: number): void {
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }

        this.apply(
            new MoneyWithdrawEvent({ accountId: this.accountId, amount })
        );
    }

    getBalance(): number {
        return this.balance;
    }

    getEvents(): AccountEvent[] {
        return this.events;
    }

    loadEvents(events: AccountEvent[]): void {
        events.forEach((e) => this.mutate(e));
    }
}

// Repository
export class EventStore {
    private events: AccountEvent[] = [];

    saveMany(events: AccountEvent[]): void {
        this.events.push(...events);
    }

    findManyByAccountId(accountId: string): AccountEvent[] {
        return this.events.filter((e) => e.data.accountId === accountId);
    }
}

// Usage
const account = Account.create("123", "John");
account.deposit(100);
account.withdraw(30);

const eventStore = new EventStore();
eventStore.saveMany(account.getEvents());

const events = eventStore.findManyByAccountId("123");
const accountReconstituted = new Account("123", "John");
accountReconstituted.loadEvents(events);

console.log(accountReconstituted.getBalance()); // Output: 70
