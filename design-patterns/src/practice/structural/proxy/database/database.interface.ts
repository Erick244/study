export interface Database {
    connect(): void;
    query(sql: string): any;
    disconnect(): void;
}
