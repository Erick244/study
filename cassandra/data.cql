-- CREATE A KEYSPACE
CREATE KEYSPACE IF NOT EXISTS store WITH REPLICATION = {'class' : 'SimpleStrategy', 'replication_factor' : 1};

-- CREATE A TABLE
CREATE TABLE IF NOT EXISTS store.shopping_cart (
	user_id text PRIMARY KEY,
	item_count int,
	last_update_timestamp timestamp
);

-- INSERT A RECORDS
INSERT INTO store.shopping_cart
(user_id, item_count, last_update_timestamp)
VALUES ('user1', 10, toTimeStamp(now()));

INSERT INTO store.shopping_cart
(user_id, item_count, last_update_timestamp)
VALUES ('user2', 5, toTimeStamp(now()));